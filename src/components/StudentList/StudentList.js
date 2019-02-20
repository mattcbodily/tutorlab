import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentList extends Component {
    render(){
        return(
            <div>
                <Nav />
                <p>Your Students</p>
                <div>
                    This is where the list of the tutors students go
                </div>
                Back to <Link to = '/tutorprofile/:tutorid'>profile</Link>
            </div>
        )
    }
}

export default StudentList;