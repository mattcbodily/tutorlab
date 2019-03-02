import React, { Component } from 'react';
import { connect } from 'react-redux';

class TutorSocketsMessages extends Component {
    render(){
        return (
            <div>
                {this.props.message.student ?
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

const mapStateToProps = reduxState => {
    const {student} = reduxState;
    return {
        student
    }
}

export default connect(mapStateToProps)(TutorSocketsMessages);