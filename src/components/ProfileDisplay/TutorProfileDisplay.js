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
                <div>
                    <p className = 'Profilename'>{props.tutor.first_name} {props.tutor.last_name}</p>
                    <div className = 'Profiledescriptionbox'>
                        <span className = 'Profiledescriptions'>Email: </span>
                        <span>{props.tutor.email}</span>
                    </div>
                    <div className = 'Profiledescriptionbox'>
                        <span className = 'Profiledescriptions'>Rate: </span>    
                        <span>${props.tutor.price}</span>
                    </div>
                    <div className = 'Profiledescriptionbox'>
                        <span className = 'Profiledescriptions'>About Me:</span>
                        <p className = 'Tutordescriptiondisplay'>{props.tutor.tutor_description}</p>
                    </div>
                </div>
            </div>) : (
            <div>
                <Link to = '/uploadtutorphoto'><button>Add a Photo</button></Link>
                <div className = 'Infobox'>
                    <p className = 'Profilename'>{props.tutor.first_name} {props.tutor.last_name}</p>
                    <p>Email: {props.tutor.email}</p>
                    <p>Rate: ${props.tutor.price}</p>
                    <p>{props.tutor.tutor_description}</p>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default TutorProfileDisplay;