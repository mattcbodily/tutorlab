import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TutorDisplay extends Component {
    render(){
        return (
            <div>
                <Link to = {`/tutor/${this.props.subject}/${this.props.tutors.tutor_id}`}>
                <p>{this.props.tutors.first_name} {this.props.tutors.last_name}</p>
                <p>{this.props.tutors.email} {this.props.tutors.price}</p>
                </Link>
            </div>
        )
    }
}    

export default TutorDisplay;