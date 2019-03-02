import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentSocketsMessages extends Component {
    render(){
        return(
            <div>
                {this.props.message.tutor ?
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
    const {tutor} = reduxState;
    return {
        tutor
    }
}

export default connect(mapStateToProps)(StudentSocketsMessages);