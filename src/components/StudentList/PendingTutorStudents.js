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
                {this.props.tutor.profile_pic ?
                (<div className = 'Studentsdiv'>
                    <img
                        className = 'Student Profile Pic' 
                        src = {this.props.tutor.profile_pic} 
                        alt = 'Student Profile Pic'/>
                    <p className = 'Studentlistname'>{this.props.tutor.first_name} {this.props.tutor.last_name}</p> 
                    <p>{this.props.tutor.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/tutorstudent/${this.props.tutor.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Studentlistbutton' onClick = {() => this.handleAcceptRequest()}>Accept</button>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDeleteRequest()}>Decline</button>
                    </div>
                </div>) : (
                <div className = 'Studentsdiv'>
                    <p className = 'Studentlistname'>{this.props.tutor.first_name} {this.props.tutor.last_name}</p> 
                    <p>{this.props.tutor.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/tutorstudent/${this.props.tutor.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
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

export default PendingTutorStudents;