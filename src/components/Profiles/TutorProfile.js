import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import TutorProfileDisplay from './../ProfileDisplay/TutorProfileDisplay';

class TutorProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutor: [],
            firstName: '',
            lastName: '',
            email: '',
            price: 0,
            tutorDescription: '',
            editProfile: false
        }
    }

    handleEditToggle(){
        this.setState ({
            editProfile: !this.state.editProfile
        })
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    componentDidMount(){
        return this.getTutorProfile();
    }

    getTutorProfile(){
        axios.get(`/api/tutorprofile/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                tutor: res.data
            })
        })
    }

    updateTutorInfo(){
        const editTutor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            price: this.state.price,
            tutorDescription: this.state.tutorDescription
        }
        axios.put(`/api/updatetutor/${this.props.tutor.id}`, editTutor)
        .then(res => {
            this.setState ({
                tutor: res.data
            })
            this.handleEditToggle();
            this.getTutorProfile();
        })
    }

    deleteAccount(){
        axios.delete(`/api/deletetutor/${this.props.tutor.id}`)
        .then(
            this.props.history.push('/registertutor')
        )
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const tutorProfile = this.state.tutor.map((tutorObj, i) => {
            return(
                <TutorProfileDisplay key = {i} 
                                     tutor = {tutorObj}/>
            )
        })
        return(
            <div>
                {!this.state.editProfile ?
                (<div>
                    <Nav />
                    {tutorProfile}
                    <div>
                        <button onClick = {() => this.handleEditToggle()}>Update Info</button>
                    </div>
                    <div>
                        <Link to = {`/studentlist/${this.props.tutor.id}`}><button>Your students</button></Link>
                    </div>
                    {/* <div>
                        <button>Your tutors</button>
                    </div> */}
                    <div>
                        <button onClick = {() => this.deleteAccount()}>Delete Account</button>
                    </div>
                    Back to <Link to = '/home'>home</Link>
                </div>) : (
                <div>
                    <div>
                        <input 
                            value = {this.state.firstName}
                            onChange = {e => this.handleChange('firstName', e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            value = {this.state.lastName}
                            onChange = {e => this.handleChange('lastName', e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            value = {this.state.email}
                            onChange = {e => this.handleChange('email', e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            value = {this.state.price}
                            onChange = {e => this.handleChange('price', e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            value = {this.state.tutorDescription}
                            onChange = {e => this.handleChange('tutorDescription', e.target.value)}/>
                    </div>
                    <div>
                        <button onClick = {() => this.updateTutorInfo()}>Submit</button>
                    </div>
                    <div>
                        <button onClick = {() => this.handleEditToggle()}>Cancel</button>
                    </div>
                </div>
                )
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

export default connect(mapStateToProps)(TutorProfile);