import React from 'react';

const TutorSubjectDisplay = props => {
    return(
        <div>
            <p className = 'Profilesubjectnames'>{props.subject.subject_name}</p>
        </div>
    )
}

export default TutorSubjectDisplay;