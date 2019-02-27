import React from 'react';
import { Link } from 'react-router-dom';

const TutorProfileDisplay = props => {
    return (
        <div>
        {props.tutor.profile_pic ?
            (<div>
                <div>
                    <img src = {props.tutor.profile_pic} alt = 'Profile Pic'/>
                </div>
                <div>
                    <p>{props.tutor.first_name} {props.tutor.last_name}</p>
                    <p>{props.tutor.email}</p>
                    <p>${props.tutor.price}</p>
                    <p>{props.tutor.tutor_description}</p>
                </div>
            </div>) : (
            <div>
                <Link to = '/uploadtutorphoto'><button>Add a Photo</button></Link>
                <p>{props.tutor.first_name} {props.tutor.last_name}</p>
                <p>{props.tutor.email}</p>
                <p>${props.tutor.price}</p>
                <p>{props.tutor.tutor_description}</p>
            </div>
            )
        }
        </div>
    )
}

export default TutorProfileDisplay;