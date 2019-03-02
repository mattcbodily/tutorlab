import React, { Component } from 'react';

class TutorStudentMessages extends Component {
    render(){
        return(
            <div>
                {this.props.message.tutor_student ?
                (<div className = 'Usermessage'>
                    <span className = 'Usermessagebox'>{this.props.message.message}</span>
                </div>) : (
                <div className = 'Notusermessage'>
                    <span className = 'Notusermessagebox'>{this.props.message.message}</span>
                </div>)
                }
            </div>
        )
    }
}

export default TutorStudentMessages;