import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../Nav/Nav';
import TutorViewDisplay from './TutorViewDisplay';
import LessonRequest from './../LessonRequest/LessonRequest';

class TutorView extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutor: [],
            class: []
        }
    }

    componentDidMount(){
        this.getClassId();
        this.getTutorProfile();
    }

    getClassId(){
        axios.get(`/api/classid/${this.props.match.params.subject}/${this.props.match.params.tutorid}`)
        .then(res => {
            this.setState({
                class: res.data
            })
        })
    }
    
    getTutorProfile(){
        axios.get(`/api/tutorprofile/${this.props.match.params.tutorid}`)
        .then(res => {
            this.setState({
                tutor: res.data
            })
        })
    }
    
    render(){
        const lessonRequest = this.state.class.map((classObj, i) => {
            return (
                <LessonRequest key = {i}
                               class = {classObj}/>
            );
        })

        const tutorProfile = this.state.tutor.map((tutorObj, i) => {
            return(
                <TutorViewDisplay key = {i} 
                                  tutor = {tutorObj}/>
            )
        })
        return(
            <div>
                <Nav />
                {tutorProfile}
                {lessonRequest}
            </div>
        )
    }
}

export default TutorView;