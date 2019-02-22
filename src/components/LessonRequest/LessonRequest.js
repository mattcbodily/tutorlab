import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LessonRequest extends Component {
    handleLessonRequest(){
        const newRequest = {
            student: this.props.student.id,
            classid: this.props.class.class_id
        }
        axios.post('/api/lessonrequest', newRequest)
    }

    render(){
        return(
            <div>
                <Link to = '/home'><button onClick = {() => this.handleLessonRequest()}>Request a Lesson</button></Link>
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

export default connect(mapStateToProps)(LessonRequest);