import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './../Nav/Nav';
import axios from 'axios';
import SubjectDisplay from './../SubjectDisplay/SubjectDisplay';
import {updateStudent, updateTutor} from './../../ducks/reducer';
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            subjects: [],
            searchedSubject: []
        }
        this.searchSubject = this.searchSubject.bind(this);
    }

    componentDidMount(){
        const {student, tutor} = this.props;
        if(!student.id){
            axios.get('/api/student')
            .then(res => {
               this.props.updateStudent(res.data) 
            })
        } else if(!tutor.id){
            axios.get('/api/tutor')
            .then(res => {
                this.props.updateTutor(res.data)
            })
        }
        return this.getSubjects()
    }

    handleChange(val){
        this.setState({
            search: val
        })
        this.searchSubject();
    }

    getSubjects(){
        axios.get('/api/subjects')
        .then(res => {
            this.setState({
                subjects: res.data
            })
        })
    }

    searchSubject(){
        axios.get(`/api/searchsubject/${this.state.search}`)
        .then(res => {
            this.setState({
                searchedSubject: res.data
            })
        })
    }

    render(){
        console.log(this.state.searchedSubject)
        const subjectList = this.state.subjects.map((subjectObj, i) => {
            return(
                <SubjectDisplay key = {i}
                                subjects = {subjectObj}
                                />
                                
            )
        })
        return(
            <div className = 'Homediv'>
            <Nav />
                <div className = 'Searchdiv'>
                    <p className = 'Searchprompt'>Welcome! Start by searching for a subject to learn.</p>
                    <input
                        className = 'Searchinput' 
                        value = {this.state.search}
                        onChange = {(e) => this.handleChange(e.target.value)}/>
                    <div>
                        <button className = 'Searchbutton'>Search</button>
                    </div>
                </div>
                <div>
                    <p className = 'Popularsubjects'>Popular Subjects</p>
                    {subjectList}
                </div>
                View more subjects <Link to ='/subjects'>here.</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {student, tutor} = reduxState;
    return {
        student,
        tutor
    }
}
const mapDispatchToProps = {
    updateStudent,
    updateTutor
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);