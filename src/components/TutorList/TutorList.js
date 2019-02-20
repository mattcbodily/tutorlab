import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './../Nav/Nav';
import TutorDisplay from './../TutorDisplay/TutorDisplay';

class TutorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject: [],
            tutors: []
        }
    }

    componentDidMount(){
        this.getTutorList()
        this.getOneSubject()
    }

    getTutorList(){
        axios.get(`/api/tutorlist/`)
        .then(res => {
            this.setState({
                tutors: res.data
            })
        })
    }

    getOneSubject(){
        axios.get(`/api/onesubject/${this.props.match.params.subject}`)
        .then(res => {
            this.setState ({
                subject: res.data
            })
        })
    }

    render(){
        console.log(this.state.subject)
        const listedTutors = this.state.tutors.map((tutorObj, i) => {
            return(
                <TutorDisplay key = {i} 
                              tutors = {tutorObj}/>
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