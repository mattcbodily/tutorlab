import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './../Nav/Nav';

class MyTutors extends Component {
    render(){
        return(
            <div>
                <Nav />
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