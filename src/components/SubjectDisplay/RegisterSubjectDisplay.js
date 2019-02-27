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
            <div>
                <p>{this.props.subjects.subject_name}</p>
                <Link to = '/registertutorlocation'><button className = 'Subjectbuttons' onClick = {() => this.handleAddClass()}>Select</button></Link>
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