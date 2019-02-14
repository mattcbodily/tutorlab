import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyTutors extends Component {
    render(){
        return(
            <div>
                <p>Your Tutors</p>
                <div>
                    This is where the list of the students tutors go
                </div>
                Back to <Link to = '/studentprofile/:studentid'>profile</Link>
            </div>
        )
    }
}

export default MyTutors;