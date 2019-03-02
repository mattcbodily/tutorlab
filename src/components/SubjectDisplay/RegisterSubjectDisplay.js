import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RegisterSubjectDisplay extends Component {
    handleAddClass(){
        const newClass = {
            tutor: this.props.tutor.id,
            subject: this.props.subjects.subject_id
        }
        axios.post('/api/addclass', newClass)
    }

    render(){
        return (
            <div className = 'Homesubjectdiv'
                 onClick = {() => this.handleAddClass()}>
                <Link to = '/registertutorlocation'> 
                <img
                    className = 'Homesubjectpictures'
                    src = {this.props.subjects.subject_pic}
                    alt = 'Subject Pic'/>
                <p className = 'Subjectnames'>{this.props.subjects.subject_name}</p>
                </Link>
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

export default connect(mapStateToProps)(RegisterSubjectDisplay);