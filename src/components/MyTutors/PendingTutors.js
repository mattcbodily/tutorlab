import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <button onClick = {() => this.handleDeleteRequest()}>Delete Request</button>
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