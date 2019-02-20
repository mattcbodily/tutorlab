import React from 'react';

const TutorViewDisplay = props => {
    return (
        <div>
            <div>
                {props.tutor.profile_pic}
            </div>
            <div>
                <p>{props.tutor.first_name} {props.tutor.last_name}</p>
                <p>{props.tutor.email}</p>
                <p>${props.tutor.price}</p>
                <p>{props.tutor.tutor_description}</p>
            </div>
        </div>
    )
}

export default TutorViewDisplay;