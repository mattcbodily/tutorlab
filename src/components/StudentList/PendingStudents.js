import React, { Component } from 'react';
import axios from 'axios';

class PendingStudents extends Component {
    handleAcceptRequest(){
        axios.put(`/api/acceptrequest/${this.props.student.student_id}`)
        .then(
            this.props.getList()
        )
    }

    render(){
        return(
            <div>
                <p>Pending Student Requests</p>
                <p>{this.props.student.first_name} {this.props.student.last_name} {this.props.student.email}</p>
                <button onClick = {() => this.handleAcceptRequest()}>Accept</button>
                <button>Decline</button>
            </div>
        )
    }
}

export default PendingStudents;