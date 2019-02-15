import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TutorProfileDisplay from './../ProfileDisplay/TutorProfileDisplay';

class TutorProfile extends Component {
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
        const tutorProfile = this.state.tutor.map(tutorObj => {
            return(
                <TutorProfileDisplay key = {tutorObj.id} 
                                     tutor = {tutorObj}/>
            )
        })
        return(
            <div>
                {tutorProfile}
                <div>
                    <button>Update Info</button>
                </div>
                <div>
                    <button>Your students</button>
                </div>
                <div>
                    <button>Your tutors</button>
                </div>
                <div>
                    <button>Delete Account</button>
                </div>
                Back to <Link to = '/home'>home</Link>
            </div>
        )
    }
}

export default TutorProfile;