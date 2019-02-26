import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PendingTutorStudents extends Component {
    handleAcceptRequest(){
        axios.put(`/api/accepttutorstudentrequest/${this.props.tutor.tutor_id}/${this.props.tutor.class_id}`)
        .then(
            this.props.getList()
        )
    }

    handleDeleteRequest(){
        axios.delete(`/api/droptutorstudent/${this.props.tutor.student_id}/${this.props.tutor.class_id}`)
        .then(
            this.props.getList()
        )
    }

    render(){
        return(
            <div>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <Link to = {`/tutorstudent/${this.props.tutor.tutor_id}`}><button>Message</button></Link>
                <button onClick = {() => this.handleAcceptRequest()}>Accept</button>
                <button onClick = {() => this.handleDeleteRequest()}>Decline</button>
            </div>
        )
    }
}

export default PendingTutorStudents;