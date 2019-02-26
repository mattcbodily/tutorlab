import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MyTutorsDisplay extends Component {
    handleDropTutor(){
        axios.delete(`/api/dropstudent/${this.props.student.id}/${this.props.tutor.class_id}`)
        .then (
            this.props.getList()
        )
    }

    render(){
        return(
            <div>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <Link to = {`/tutormessage/${this.props.tutor.tutor_id}`}><button>Message</button></Link>
                <button onClick = {() => this.handleDropTutor()}>Drop Tutor</button>
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

export default connect(mapStateToProps)(MyTutorsDisplay);