import React, { Component } from 'react';
import axios from 'axios';
import AddLocationDisplay from './../LocationDisplay/AddLocationDisplay';

class AddNewLocation extends Component {
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
                <AddLocationDisplay key = {i} 
                                 locations = {locationObj}/>
            )
        })
        return(
            <div>
                <p>Select a Location</p>
                {locationList}
            </div>
        )
    }
}

export default AddNewLocation;