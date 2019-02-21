import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './../Nav/Nav';
import axios from 'axios';
import SubjectDisplay from './../SubjectDisplay/SubjectDisplay';
import {updateStudent, updateTutor} from './../../ducks/reducer';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: []
        }
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

    getSubjects(){
        axios.get('/api/subjects')
        .then(res => {
            this.setState({
                subjects: res.data
            })
        })
    }

    logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            this.props.updateStudent({});
            this.props.updateTutor({});
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const subjectList = this.state.subjects.map((subjectObj, i) => {
            return(
                <SubjectDisplay key = {i}
                                subjects = {subjectObj}
                                />
                                
            )
        })
        return(
            <div>
            <Nav />
                <div>
                    <p>Welcome! Start by searching for a subject to learn.</p>
                    <input />
                    <div>
                        <button>Search</button>
                    </div>
                </div>
                <div>
                    <p>Popular Subjects</p>
                    {subjectList}
                </div>
                View more subjects <Link to ='/subjects'>here.</Link>
                <button onClick = {() => this.logout()}>Log out</button>
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