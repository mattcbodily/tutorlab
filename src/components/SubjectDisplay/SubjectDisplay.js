import React from 'react';
import { Link } from 'react-router-dom';

const SubjectDisplay = props => {
        return (
            <div>
                <Link to = {`/tutors/${props.subjects.subject_name}`}>
                <div className = 'Homesubjectdiv'>
                    <img
                        className = 'Homesubjectpictures' 
                        src = {props.subjects.subject_pic} 
                        alt = 'Subjects'/>
                    <p className = 'Subjectnames'>{props.subjects.subject_name}</p>
                </div>    
                </Link>
            </div>
        )
}

export default SubjectDisplay;