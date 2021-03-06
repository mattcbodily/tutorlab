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
                        <button className = 'Droplistbutton' onClick = {() => this.handleDropStudent()}>Drop Student</button>
                    </div>
                </div>) : (
                <div className = 'Studentsdiv'>
                    <div className = 'Studentlistcomputerviewdiv'></div>
                    <p className = 'Studentlistname'>{this.props.student.first_name} {this.props.student.last_name}</p> 
                    <p>{this.props.student.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/studentmessage/${this.props.student.student_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDropStudent()}>Drop Student</button>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

export default AcceptedStudents;