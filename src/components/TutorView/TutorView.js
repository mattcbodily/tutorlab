import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import TutorViewDisplay from './TutorViewDisplay';
import TutorLocationDisplay from './../ProfileDisplay/TutorLocationDisplay';
import LessonRequest from './../LessonRequest/LessonRequest';
import TutorLessonRequest from './../LessonRequest/TutorLessonRequest';

class TutorView extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutor: [],
            class: [],
            locations: []
        }
    }

    componentDidMount(){
        this.getClassId();
        this.getTutorProfile();
        this.getTutorLocations();
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

    getTutorLocations(){
        axios.get(`/api/tutorlocations/${this.props.match.params.tutorid}`)
        .then(res => {
            this.setState({
                locations: res.data
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

        const tutorLocations = this.state.locations.map((locationObj, i) => {
            return(
                <TutorLocationDisplay key = {i}
                                      location = {locationObj}/> 
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
                        {tutorLocations}
                        {lessonRequest}
                    </div>
                </div>
                ) : (
                <div>    
                    <Nav />
                    <div>
                        {tutorProfile}
                        {tutorLocations}
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