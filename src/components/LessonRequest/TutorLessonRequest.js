import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class TutorLessonRequest extends Component {
    handleLessonRequest(){
        const newRequest = {
            tutor: this.props.tutor.id,
            classid: this.props.class.class_id
        }
        axios.post('/api/tutorlessonrequest', newRequest)
    }

    render(){
        return(
            <div>
                <button onClick = {() => this.handleLessonRequest()}>Request a Lesson</button>
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

export default connect(mapStateToProps)(TutorLessonRequest);