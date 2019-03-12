import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TutorDisplay.css';

class TutorDisplay extends Component {
    render(){
        return (
            <div className = 'Tutordisplayflexdiv'>
                {this.props.tutors.profile_pic ?
                (<Link to = {`/tutor/${this.props.subject}/${this.props.tutors.tutor_id}`}>
                <div className = 'Tutorlistdisplaybox'>
                    <div>
                        <img className = 'Tutorlistpicture' src = {this.props.tutors.profile_pic} alt = 'Tutor Pic'/>
                    </div>
                    <div>
                        <p className = 'Tutorlistinfo'>{this.props.tutors.first_name} {this.props.tutors.last_name}</p> 
                        <p className = 'Tutorlistinfo'>{this.props.tutors.email}</p>
                        <p className = 'Tutorlistinfo'>Cost: ${this.props.tutors.price}</p>
                    </div>
                </div>    
                </Link>) : (
                <Link to = {`/tutor/${this.props.subject}/${this.props.tutors.tutor_id}`}>
                <div className = 'Tutorlistnopicture'>
                    <div className = 'Nopicturecomputerview'></div>
                    <p className = 'Nopictureinfo'>{this.props.tutors.first_name} {this.props.tutors.last_name}</p>
                    <p className = 'Nopictureinfo'>{this.props.tutors.email}</p>
                    <p className = 'Nopictureinfo'>Cost: ${this.props.tutors.price}</p>
                </div>    
                </Link>
                )
                }
            </div>
        )
    }
}    

export default TutorDisplay;