import React, { Component } from 'react';

class TutorTutorMessages extends Component {
    render(){
        return (
            <div>
                {this.props.message.tutor ?
                (<div className = 'Usermessagedisplay'>
                    <div className = 'Usermessage'>
                        <div className = 'Usermessagebox'>{this.props.message.message}</div>
                    </div>
                </div>) : (
                <div className = 'Notusermessagedisplay'>
                    <div className = 'Notusermessage'>
                        <div className = 'Notusermessagebox'>{this.props.message.message}</div>
                    </div>
                </div>)
                }
            </div>
        )
    }
}

export default TutorTutorMessages;