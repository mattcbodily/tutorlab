import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddLocationDisplay extends Component {
    handleAddLocation(){
        const newLocation = {
            tutor: this.props.tutor.id,
            location: this.props.locations.lesson_location_id
        }
        axios.post('/api/addlocation', newLocation)
    }

    render(){
        return(
            <div>
                <p>{this.props.locations.lesson_location_name}</p>
                <Link to = {`/tutorprofile/${this.props.tutor.id}`}><button className = 'Subjectbuttons' onClick = {() => this.handleAddLocation()}>Select</button></Link>
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

export default connect(mapStateToProps)(AddLocationDisplay);