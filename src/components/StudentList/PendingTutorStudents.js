import React, { Component } from 'react';
import axios from 'axios';

class PendingTutorStudents extends Component {
    handleAcceptRequest(){
        axios.put(`/api/accepttutorstudentrequest/${this.props.tutor.tutor_id}/${this.props.tutor.class_id}`)
        .then(
            this.props.getList()
        )
    }

    // handleDeleteRequest(){
    //     axios.delete(`/api/dropstudent/${this.props.student.student_id}/${this.props.student.class_id}`)
    //     .then(
    //         this.props.getList()
    //     )
    // }

    render(){
        return(
            <div>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <button onClick = {() => this.handleAcceptRequest()}>Accept</button>
                <button>Decline</button>
            </div>
        )
    }
}

export default PendingTutorStudents;