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
                {this.props.student.profile_pic ?
                (<div className = 'Studentsdiv'>
                    <img
                        className = 'Studentlistpic' 
                        src = {this.props.student.profile_pic} 
                        alt = 'Student Profile Pic'/>
                    <p className = 'Studentlistname'>{this.props.student.first_name} {this.props.student.last_name}</p> 
                    <p>{this.props.student.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/studentmessage/${this.props.student.student_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Studentlistbutton' onClick = {() => this.handleAcceptRequest()}>Accept</button>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDeleteRequest()}>Decline</button>
                    </div>
                </div>) : (
                <div className = 'Studentsdiv'>
                    <p className = 'Studentlistname'>{this.props.student.first_name} {this.props.student.last_name}</p> 
                    <p>{this.props.student.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/studentmessage/${this.props.student.student_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Studentlistbutton' onClick = {() => this.handleAcceptRequest()}>Accept</button>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDeleteRequest()}>Decline</button>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

export default PendingStudents;