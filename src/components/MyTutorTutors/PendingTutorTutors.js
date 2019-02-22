import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <p>{this.props.tutors.first_name} {this.props.tutors.last_name} {this.props.tutors.email}</p>
                <button onClick = {() => this.handleDeleteRequest()}>Delete Request</button>
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