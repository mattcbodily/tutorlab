import React from 'react';
import { Link } from 'react-router-dom';

const StudentProfileDisplay = props => {
    return(
        <div>
        {props.student.profile_pic ?
            (<div>
                <div>
                    <img
                        className = 'Profilepicture' 
                        src = {props.student.profile_pic} 
                        alt = 'Profile Pic'/>
                </div>
                <div>
                    <p className = 'Profilename'>{props.student.first_name} {props.student.last_name}</p>
                    <div className = 'Studentprofiledescriptionbox'>
                        <span class = 'Profiledescriptions'>Email: </span>
                        <span>{props.student.email}</span>
                    </div>
                </div>
            </div>) : (
            <div>
                <Link to = '/uploadphoto'><button className = 'Addaphoto'>Add a Photo</button></Link>
                <p className = 'Profilename'>{props.student.first_name} {props.student.last_name}</p>
                <div className = 'Studentprofiledescriptionbox'>
                        <span class = 'Profiledescriptions'>Email: </span>
                        <span>{props.student.email}</span>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default StudentProfileDisplay;