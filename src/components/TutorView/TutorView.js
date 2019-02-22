import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import TutorViewDisplay from './TutorViewDisplay';
import LessonRequest from './../LessonRequest/LessonRequest';
import TutorLessonRequest from './../LessonRequest/TutorLessonRequest';

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
        const tutorLessonRequest = this.state.class.map((classObj, i) => {
            return (
                <TutorLessonRequest key = {i}
                                    class = {classObj}/>
            )
        })
        return(
            <div>
                {this.props.student.id ?
                (<div>
                    <Nav />
                    <div>
                        {tutorProfile}
                        {lessonRequest}
                    </div>
                </div>
                ) : (
                <div>    
                    <Nav />
                    <div>
                        {tutorProfile}
                        {tutorLessonRequest}
                    </div>
                </div>
                )
            }
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

export default connect(mapStateToProps)(TutorView);