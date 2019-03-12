import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentSocketsMessages extends Component {
    render(){
        return(
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

const mapStateToProps = reduxState => {
    const {tutor} = reduxState;
    return {
        tutor
    }
}

export default connect(mapStateToProps)(StudentSocketsMessages);