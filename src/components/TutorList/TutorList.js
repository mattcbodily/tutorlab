import React, { Component } from 'react';
import axios from 'axios';
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
        axios.get('/api/tutorlist')
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
                              tutors = {tutorObj}/>
            )
        })
        return(
            <div>
                <p>{this.props.match.params.subject}</p>
                <p>Select a tutor</p>
                {listedTutors}
            </div>
        )
    }
}

export default TutorList;