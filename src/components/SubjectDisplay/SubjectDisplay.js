import React from 'react';
import { Link } from 'react-router-dom';

const SubjectDisplay = props => {
        return (
            <div>
                <Link to = {`/tutors/${props.subjects.subject_name}`}>
                <p>{props.subjects.subject_name}</p>
                </Link>
            </div>
        )
}

export default SubjectDisplay;