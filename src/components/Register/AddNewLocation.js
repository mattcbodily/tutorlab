import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddLocationDisplay from './../LocationDisplay/AddLocationDisplay';
import Nav from './../Nav/Nav';

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
                <Nav />
                <h1>Add a Location</h1>
                <div className = 'Registerlocationcomputerview'>
                    {locationList}
                </div>
                <p className = 'Loginlinks'>Back to <Link to = '/home'>home</Link></p>
            </div>
        )
    }
}

export default AddNewLocation;