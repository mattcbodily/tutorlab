import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PendingStudents extends Component {
    handleAcceptRequest(){
        axios.put(`/api/acceptrequest/${this.props.student.student_id}/${this.props.student.class_id}`)
        .then(
            this.props.getList()
        )
    }

    handleDeleteRequest(){
        axios.delete(`/api/dropstudent/${this.props.student.student_id}/${this.props.student.class_id}`)
        .then(
            this.props.getList()
        )
    }

    render(){
        return(
            <div>
                <p>{this.props.student.first_name} {this.props.student.last_name} {this.props.student.email}</p>
                <Link to = {`/studentmessage/${this.props.student.student_id}`}><button>Message</button></Link>
                <button onClick = {() => this.handleAcceptRequest()}>Accept</button>
                <button onClick = {() => this.handleDeleteRequest()}>Decline</button>
            </div>
        )
    }
}

export default PendingStudents;