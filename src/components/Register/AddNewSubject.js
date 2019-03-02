import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddNewSubjectDisplay from './../SubjectDisplay/AddNewSubjectDisplay';
import { updateTutor } from './../../ducks/reducer';
import Nav from './../Nav/Nav';

class AddNewSubject extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount(){
        const {tutor} = this.props;
        if(!tutor.id){
            axios.get('/api/tutor')
            .then(res => {
                this.props.updateTutor(res.data)
            })
        }
        return this.getAllSubjects();
    }
    
    getAllSubjects(){
        axios.get('/api/allsubjects')
        .then(res => {
            this.setState({
                subjects: res.data
            })
        })
    }

    render(){
        const subjectList = this.state.subjects.map((subjectObj, i) => {
            return(
                <AddNewSubjectDisplay key = {i}
                                subjects = {subjectObj}/>
            )
        })
        return(
            <div className = 'Addnewsubjectdiv'>
                <Nav />
                <h1>Add a Subject</h1>
                <h3>Select a subject below</h3>
                <div className = 'Homesubjectflexdiv'>
                    {subjectList}
                </div>
                <p className = 'Loginlinks'>Back to <Link to = '/home'>home</Link></p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {tutor} = reduxState;
    return {
        tutor
    }
}

const mapDispatchToProps = {
    updateTutor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSubject);