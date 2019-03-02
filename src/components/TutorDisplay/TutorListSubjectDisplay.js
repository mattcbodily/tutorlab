import React from 'react';

const TutorListSubjectDisplay = props => {
    return(
        <div>
            <img className = 'Homesubjectpictures' src = {props.subject.subject_pic} alt = 'Subject Pic'/>
            <p className = 'Tutorlistsubjectname'>{props.subject.subject_name}</p>
            <p className = 'Selectatutor'>Select a tutor</p>
        </div>
    )
}

export default TutorListSubjectDisplay;