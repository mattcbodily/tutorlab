import React from 'react';

const StudentProfileDisplay = props => {
    return(
        <div>
            <div>
                {props.student.profile_pic}
            </div>
            <div>
                <p>{props.student.first_name} {props.student.last_name}</p>
                <p>{props.student.email}</p>
            </div>
        </div>
    )
}

export default StudentProfileDisplay;