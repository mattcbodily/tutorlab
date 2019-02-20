import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TutorProfileDisplay from './../ProfileDisplay/TutorProfileDisplay';

class TutorView extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutor: []
        }
    }

    componentDidMount(){
        return this.getTutorProfile();
    }

    getTutorProfile(){
        axios.get('/api/tutorprofile')
        .then(res => {
            this.setState({
                tutor: res.data
            })
        })
    }

    render(){
        const tutorProfile = this.state.tutor.map((tutorObj, i) => {
            return(
                <TutorProfileDisplay key = {i} 
                                     tutor = {tutorObj}/>
            )
        })
        return(
            <div>
                <Nav />
                {tutorProfile}
                <div>
                    <button>Request a Lesson</button>
                </div>
                Back to <Link to = '/tutors/:subjectid'>List</Link>
            </div>
        )
    }
}

export default TutorView;