import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TutorProfile extends Component {
    render(){
        return(
            <div>
                <div>
                    Profile Pic goes here
                </div>
                <div>
                    Tutor Info goes here
                </div>
                <div>
                    <button>Update Info</button>
                </div>
                <div>
                    <button>Your students</button>
                </div>
                <div>
                    <button>Your tutors</button>
                </div>
                <div>
                    <button>Delete Account</button>
                </div>
                Back to <Link to = '/home'>home</Link>
            </div>
        )
    }
}

export default TutorProfile;