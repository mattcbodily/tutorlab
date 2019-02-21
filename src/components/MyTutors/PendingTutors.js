import React, { Component } from 'react';

class PendingTutors extends Component {
    render(){
        return(
            <div>
                <p>Pending Requests</p>
                <p>{this.props.tutor.first_name} {this.props.tutor.last_name} {this.props.tutor.email}</p>
                <button>Delete Request</button>
            </div>
        )
    }
}

export default PendingTutors;