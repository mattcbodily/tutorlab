import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentProfile extends Component {
    render(){
        return(
            <div>
                <div>
                    Profile Pic goes here
                </div>
                <div>
                    User Info goes here
                </div>
                <div>
                    <button>Update Info</button>
                </div>
                <div>
                    <button>Your Tutors</button>
                </div>
                <div>
                    <button>Delete Account</button>
                </div>
                Back to <Link to = '/home'>home</Link>
            </div>
        )
    }
}

export default StudentProfile;