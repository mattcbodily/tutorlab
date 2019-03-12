import React, { Component } from 'react';
import { connect } from 'react-redux';

class TutorSocketsMessages extends Component {
    render(){
        return (
            <div>
                {this.props.message.student ?
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

const mapStateToProps = reduxState => {
    const {student} = reduxState;
    return {
        student
    }
}

export default connect(mapStateToProps)(TutorSocketsMessages);