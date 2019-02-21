import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './../Nav/Nav';
import TutorDisplay from './../TutorDisplay/TutorDisplay';

class TutorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutors: []
        }
    }

    componentDidMount(){
        this.getTutorList()
    }

    getTutorList(){
        axios.get(`/api/tutorlist/${this.props.match.params.subject}`)
        .then(res => {
            this.setState({
                tutors: res.data
            })
        })
    }

    render(){
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
                <p>{this.props.match.params.subject}</p>
                <p>Select a tutor</p>
                {listedTutors}
                <p>Back to <Link to = '/subjects'>subjects</Link></p>
            </div>
        )
    }
}

export default TutorList;