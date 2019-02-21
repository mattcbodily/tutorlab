import React, { Component } from 'react';

class MyTutorsDisplay extends Component {
    render(){
        return(
            <div>
                <p>Your Tutors</p>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <button>Drop Tutor</button>
            </div>
        )
    }
}

export default MyTutorsDisplay;