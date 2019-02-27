import React from 'react';
import { Link } from 'react-router-dom';

const StudentProfileDisplay = props => {
    return(
        <div>
        {props.student.profile_pic ?
            (<div>
                <div>
                    <img src = {props.student.profile_pic} alt = 'Profile Pic'/>
                </div>
                <div>
                    <p>{props.student.first_name} {props.student.last_name}</p>
                    <p>{props.student.email}</p>
                </div>
            </div>) : (
            <div>
                <Link to = '/uploadphoto'><button>Add a Photo</button></Link>
                <p>{props.student.first_name} {props.student.last_name}</p>
                <p>{props.student.email}</p>
            </div>
            )
        }
        </div>
    )
}

export default StudentProfileDisplay;