import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AcceptedStudents extends Component {
    handleDropStudent(){
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
                <button onClick = {() => this.handleDropStudent()}>Drop Student</button>
            </div>
        )
    }
}

export default AcceptedStudents;