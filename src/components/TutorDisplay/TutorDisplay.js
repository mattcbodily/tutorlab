import React from 'react';

const TutorDisplay = props => {
    return (
        <div>
            <p>{props.tutors.first_name} {props.tutors.last_name}</p>
            <p>{props.tutors.email} {props.tutors.price}</p>
        </div>
    )
}

export default TutorDisplay;