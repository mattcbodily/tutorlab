import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                {this.props.tutor.profile_pic ?
                (<div className = 'Studentsdiv'>
                    <img
                        className = 'Studentlistpic' 
                        src = {this.props.tutor.profile_pic} 
                        alt = 'Student Profile Pic'/>
                    <p className = 'Studentlistname'>{this.props.tutor.first_name} {this.props.tutor.last_name}</p>
                    <p>{this.props.tutor.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/tutorstudent/${this.props.tutor.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDropTutorStudent()}>Drop Student</button>
                    </div>
                </div>) : (
                <div className = 'Studentsdiv'>
                    <p className = 'Studentlistname'>{this.props.tutor.first_name} {this.props.tutor.last_name}</p> 
                    <p>{this.props.tutor.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/tutorstudent/${this.props.tutor.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDropTutorStudent()}>Drop Student</button>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

export default AcceptedTutorStudents;