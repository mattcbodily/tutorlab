import React from 'react';

const TutorLocationDisplay = props => {
    return(
        <div>
            <p className = 'Profilesubjectnames'>{props.location.lesson_location_name}</p>
        </div>
    )
}

export default TutorLocationDisplay;