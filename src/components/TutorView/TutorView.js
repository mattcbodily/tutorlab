import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../Nav/Nav';
import TutorViewDisplay from './TutorViewDisplay';

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
        axios.get(`/api/tutorprofile/${this.props.match.params.tutorid}`)
        .then(res => {
            this.setState({
                tutor: res.data
            })
        })
    }

    render(){
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
                <div>
                    <button>Request a Lesson</button>
                </div>
            </div>
        )
    }
}

export default TutorView;