import React, { Component } from 'react';
import axios from 'axios';

class AcceptedTutorStudents extends Component {
    handleDropTutorStudent(){
        axios.delete(`/api/droptutorstudent/${this.props.tutor.tutor_id}/${this.props.tutor.class_id}`)
        .then(
            this.props.getList()
        )
    }

    render(){
        return(
            <div>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <button onClick = {() => this.handleDropTutorStudent()}>Drop Student</button>
            </div>
        )
    }
}

export default AcceptedTutorStudents;