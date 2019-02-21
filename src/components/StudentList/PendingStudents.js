import React, { Component } from 'react';

class PendingStudents extends Component {
    render(){
        return(
            <div>
                <p>Pending Student Requests</p>
                <p>{this.props.student.first_name} {this.props.student.last_name} {this.props.student.email}</p>
                <button>Accept</button>
                <button>Decline</button>
            </div>
        )
    }
}

export default PendingStudents;