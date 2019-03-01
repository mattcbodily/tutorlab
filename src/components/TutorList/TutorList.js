import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './../Nav/Nav';
import TutorDisplay from './../TutorDisplay/TutorDisplay';
import TutorListSubjectDisplay from './../TutorDisplay/TutorListSubjectDisplay';
import './TutorList.css';

class TutorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutors: [],
            subject: []
        }
    }

    componentDidMount(){
        this.getTutorList();
        this.getCurrentSubject();
    }

    getTutorList(){
        axios.get(`/api/tutorlist/${this.props.match.params.subject}`)
        .then(res => {
            this.setState({
                tutors: res.data
            })
        })
    }

    getCurrentSubject(){
        axios.get(`/api/currentsubject/${this.props.match.params.subject}`)
        .then(res => {
            this.setState({
                subject: res.data
            })
        })
    }

    render(){
        const currentSubject = this.state.subject.map((subjectObj, i) => {
            return(
                <TutorListSubjectDisplay key = {i}
                                         subject = {subjectObj}/>
            )
        })
        const listedTutors = this.state.tutors.map((tutorObj, i) => {
            return(
                <TutorDisplay key = {i} 
                              tutors = {tutorObj}
                              subject = {this.props.match.params.subject}/>
            )
        })
        return(
            <div>
                <Nav />
                {currentSubject}
                {listedTutors}
                <p>Back to <Link to = '/subjects'>subjects</Link></p>
            </div>
        )
    }
}

export default TutorList;