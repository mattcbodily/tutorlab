import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateTutor } from './../../ducks/reducer';
import Nav from './../Nav/Nav';
import TutorProfileDisplay from './../ProfileDisplay/TutorProfileDisplay';
import TutorSubjectDisplay from './../ProfileDisplay/TutorSubjectDisplay';
import TutorLocationDisplay from './../ProfileDisplay/TutorLocationDisplay';
import './Profile.css';

class TutorProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: [],
            locations: [],
            tutor: [],
            firstName: '',
            lastName: '',
            email: '',
            price: '',
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
        this.getTutorProfile();
        this.getTutorSubjects();
        this.getTutorLocations();
    }

    getTutorSubjects(){
        axios.get(`/api/tutorsubjects/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                subjects: res.data
            })
        })
    }

    getTutorLocations(){
        axios.get(`/api/tutorlocations/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                locations: res.data
            })
        })
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

    logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            this.props.updateTutor({});
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const tutorSubjects = this.state.subjects.map((subjectObj, i) => {
            return(
                <TutorSubjectDisplay key = {i}
                                     subject = {subjectObj}/>
            )
        })
        const tutorLocations = this.state.locations.map((locationObj, i) => {
            return(
                <TutorLocationDisplay key = {i}
                                      location = {locationObj}/>
            )
        })
        const tutorProfile = this.state.tutor.map((tutorObj, i) => {
            return(
                <TutorProfileDisplay key = {i} 
                                     tutor = {tutorObj}/>
            )
        })
        return(
            <div>
                {!this.state.editProfile ?
                (<div className = 'Profilediv'>
                    <Nav />
                    <div className = 'Infobox'>
                        {tutorProfile}
                        <div className = 'Tutorsubjectbox'>
                            <span className = 'Profiledescriptions'>What I Teach:</span>
                            {tutorSubjects}
                        </div>
                        <div className = 'Tutorsubjectbox'>    
                            <span className = 'Profiledescriptions'>Where I Teach:</span>
                            {tutorLocations}
                        </div>    
                    </div>
                    <div>
                        <button className = 'Profilebuttons' onClick = {() => this.handleEditToggle()}>Edit Profile</button>
                    </div>
                    <div>
                        <Link to = {`/studentlist/${this.props.tutor.id}`}><button className = 'Profilebuttons'>Your students</button></Link>
                    </div>
                    <div>    
                        <Link to = {`/mytutors/${this.props.tutor.id}`}><button className = 'Profilebuttons'>Your tutors</button></Link>
                    </div>
                    <div>    
                        <button  className = 'Profilebuttons' onClick = {() => this.deleteAccount()}>Delete Account</button>
                    </div>
                    <div>    
                        <button  className = 'Profilebuttons' onClick = {() => this.logout()}>Log Out</button>
                    </div>
                    Back to <Link to = '/home'>home</Link>
                </div>) : (
                <div>
                    <h1>Edit Your Profile</h1>
                    <div>
                        <p className = 'Profileprompts'>First Name</p>
                        <input
                            className = 'Profileinputs' 
                            value = {this.state.firstName}
                            onChange = {e => this.handleChange('firstName', e.target.value)}/>
                    </div>
                    <div>
                        <p className = 'Profileprompts'>Last Name</p>
                        <input
                            className = 'Profileinputs' 
                            value = {this.state.lastName}
                            onChange = {e => this.handleChange('lastName', e.target.value)}/>
                    </div>
                    <div>
                        <p className = 'Profileprompts'>Email</p>
                        <input
                            className = 'Profileinputs' 
                            value = {this.state.email}
                            onChange = {e => this.handleChange('email', e.target.value)}/>
                    </div>
                    <div>
                        <p className = 'Profileprompts'>Edit Your Rate</p>
                        <input
                            className = 'Profileinputs' 
                            value = {this.state.price}
                            onChange = {e => this.handleChange('price', e.target.value)}/>
                    </div>
                    <div>
                        <p className = 'Profileprompts'>Edit Your Description</p>
                        <textarea
                            className = 'Tutordescriptionbox'
                            value = {this.state.tutorDescription}
                            onChange = {e => this.handleChange('tutorDescription', e.target.value)}/>
                    </div>
                    <div>
                    <Link to = '/uploadtutorphoto'><button className = 'Profilebuttons'>Change Profile Photo</button></Link>
                    </div>
                    <div>
                        <Link to = '/addsubject'><button className = 'Profilebuttons'>Add a Subject</button></Link>
                    </div>
                    <div>
                        <Link to = '/addlocation'><button className = 'Profilebuttons'>Add a Location</button></Link>
                    </div>
                    <div>
                        <button className = 'Profilebuttons' onClick = {() => this.updateTutorInfo()}>Submit</button>
                    </div>
                    <div>
                        <button className = 'Profilebuttons' onClick = {() => this.handleEditToggle()}>Cancel</button>
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

const mapDispatchToProps = {
    updateTutor
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorProfile);