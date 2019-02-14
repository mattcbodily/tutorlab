import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TutorView extends Component {
    render(){
        return(
            <div>
                <div>
                    Profile pic goes here
                </div>
                <div>
                    Tutor info goes here
                </div>
                <div>
                    <button>Request a Lesson</button>
                </div>
                Back to <Link to = '/tutors/:subjectid'>List</Link>
            </div>
        )
    }
}

export default TutorView;