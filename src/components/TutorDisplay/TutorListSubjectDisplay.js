import React from 'react';
import './TutorDisplay.css';

const TutorListSubjectDisplay = props => {
    return(
        <div>
            <img className = 'Tutorlistsubjectpictures' src = {props.subject.subject_pic} alt = 'Subject Pic'/>
            <p className = 'Tutorlistsubjectnameprompt'>{props.subject.subject_name}</p>
            <p className = 'Selectatutor'>Select a tutor</p>
        </div>
    )
}

export default TutorListSubjectDisplay;