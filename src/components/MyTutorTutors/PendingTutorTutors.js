import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PendingTutorTutors extends Component {
    handleDeleteRequest(){
        axios.delete(`/api/droptutorstudent/${this.props.tutor.id}/${this.props.tutors.class_id}`)
        .then (
            this.props.getList()
        )
    }

    render(){
        return(
            <div>
                {this.props.tutors.profile_pic ?
                (<div className = 'Studentsdiv'>
                    <img
                        className = 'Studentlistpic'
                        src = {this.props.tutors.profile_pic}
                        alt = 'Tutor Profile Pic'/>
                    <p className = 'Studentlistname'>{this.props.tutors.first_name} {this.props.tutors.last_name}</p> 
                    <p>{this.props.tutors.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/mytutormessage/${this.props.tutors.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
                        <button className = 'Droplistbutton' onClick = {() => this.handleDeleteRequest()}>Delete Request</button>
                    </div>
                </div>) :(
                <div className = 'Studentsdiv'>
                    <div className = 'Studentlistcomputerviewdiv'></div>
                    <p className = 'Studentlistname'>{this.props.tutors.first_name} {this.props.tutors.last_name}</p> 
                    <p>{this.props.tutors.email}</p>
                    <div className = 'Studentlistbuttondiv'>
                        <Link to = {`/mytutormessage/${this.props.tutors.tutor_id}`}><button className = 'Messagelistbutton'>Message</button></Link>
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
    const {tutor} = reduxState;
    return {
        tutor
    }
}

export default connect(mapStateToProps)(PendingTutorTutors);