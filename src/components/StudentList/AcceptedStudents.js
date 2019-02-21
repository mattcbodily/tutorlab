import React, { Component } from 'react';
import axios from 'axios';

class AcceptedStudents extends Component {
    render(){
        return(
            <div>
                <p>Your Students</p>
                <p>{this.props.student.first_name} {this.props.student.last_name} {this.props.student.email}</p>
                <button>Drop Student</button>
            </div>
        )
    }
}

export default AcceptedStudents;