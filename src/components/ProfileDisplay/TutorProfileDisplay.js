import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDisplay.css'

const TutorProfileDisplay = props => {
    return (
        <div>
        {props.tutor.profile_pic ?
            (<div>
                <div className = 'Profilepicturediv'>
                    <img
                        className = 'Profilepicture' 
                        src = {props.tutor.profile_pic} 
                        alt = 'Profile Pic'/>
                </div>
                <div className = 'Profileinformationdiv'>
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
                <div>
                    <Link to = '/uploadtutorphoto'><button className = 'Addaphoto'>Add a Photo</button></Link>
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
            </div>
            )
        }
        </div>
    )
}

export default TutorProfileDisplay;