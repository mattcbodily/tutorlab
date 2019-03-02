import React, { Component } from 'react';
import axios from 'axios';
import LocationDisplay from './../LocationDisplay/LocationDisplay';
import AuthNav from './../Nav/AuthNav';

class RegisterTutorStepThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: []
        }
    }

    componentDidMount(){
        this.getLocations();
    }

    getLocations(){
        axios.get('/api/locations')
        .then(res => {
            this.setState({
                location: res.data
            })
        })
    }

    render(){
        const locationList = this.state.location.map((locationObj, i) => {
            return (
                <LocationDisplay key = {i} 
                                 locations = {locationObj}/>
            )
        })
        return(
            <div>
                <AuthNav />
                <h1>Create Your Account</h1>
                <h1>Step Three</h1>
                <p>Where do you teach?</p>
                {locationList}
            </div>
        )
    }
}

export default RegisterTutorStepThree;