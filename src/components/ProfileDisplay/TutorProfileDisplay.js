import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDisplay.css'

const TutorProfileDisplay = props => {
    return (
        <div>
        {props.tutor.profile_pic ?
            (<div>
                <div>
                    <img
                        className = 'Profilepicture' 
                        src = {props.tutor.profile_pic} 
                        alt = 'Profile Pic'/>
                </div>
                <div className = 'Infobox'>
                    <p>{props.tutor.first_name} {props.tutor.last_name}</p>
                    <p>{props.tutor.email}</p>
                    <p>${props.tutor.price}</p>
                    <p>{props.tutor.tutor_description}</p>
                </div>
            </div>) : (
            <div>
                <Link to = '/uploadtutorphoto'><button>Add a Photo</button></Link>
                <div className = 'Infobox'>
                    <p>{props.tutor.first_name} {props.tutor.last_name}</p>
                    <p>{props.tutor.email}</p>
                    <p>${props.tutor.price}</p>
                    <p>{props.tutor.tutor_description}</p>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default TutorProfileDisplay;