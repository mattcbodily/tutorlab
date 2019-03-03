import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PendingTutors extends Component {
    handleDeleteRequest(){
        axios.delete(`/api/dropstudent/${this.props.student.id}/${this.props.tutor.class_id}`)
        .then (
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
                        alt = 'Tutor Profile Pic'/>
                    <p className = 'Studentlistname'>{this.props.tutor.first_name} {this.props.tutor.last_name}</p> 
                    <p>{this.props.tutor.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/tutormessage/${this.props.tutor.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDeleteRequest()}>Delete Request</button>
                    </div>
                </div>) : (
                <div className = 'Studentsdiv'>
                    <div className = 'Studentlistcomputerviewdiv'></div>
                    <p className = 'Studentlistname'>{this.props.tutor.first_name} {this.props.tutor.last_name}</p> 
                    <p>{this.props.tutor.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/tutormessage/${this.props.tutor.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDeleteRequest()}>Delete Request</button>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {student} = reduxState;
    return {
        student
    }
}

export default connect(mapStateToProps)(PendingTutors);