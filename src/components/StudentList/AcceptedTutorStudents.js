import React, { Component } from 'react';
import axios from 'axios';

class AcceptedTutorStudents extends Component {
    // handleDropStudent(){
    //     axios.delete(`/api/dropstudent/${this.props.student.student_id}/${this.props.student.class_id}`)
    //     .then(
    //         this.props.getList()
    //     )
    // }

    render(){
        return(
            <div>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <button>Drop Student</button>
            </div>
        )
    }
}

export default AcceptedTutorStudents;