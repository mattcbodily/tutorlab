import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateTutor } from './../../ducks/reducer';
import './Register.css'

class RegisterTutor extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            price: 0,
            tutorDescription: ''
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    register(){
        const {firstName, lastName, email, password, price, tutorDescription} = this.state;
        axios.post('/auth/registertutor', {firstName, lastName, email, password, price, tutorDescription})
        .then(res => {
            this.props.updateTutor(res.data);
            this.props.history.push('/registertutorsubject')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const {firstName, lastName, email, password, price, tutorDescription} = this.state;
        return(
            <div className = 'Registertutordiv'>
                <h1>Create Your Account</h1>
                <p className = 'Authprompts'>First Name</p>
                <input 
                    className = 'Authinputs'
                    value = {firstName}
                    onChange = {e => this.handleChange('firstName', e.target.value)}/>
                <p className = 'Authprompts'>Last Name</p>
                <input 
                    className = 'Authinputs'
                    value = {lastName}
                    onChange = {e => this.handleChange('lastName', e.target.value)}/>
                <p className = 'Authprompts'>Email</p>
                <input 
                    className = 'Authinputs'
                    value = {email}
                    onChange = {e => this.handleChange('email', e.target.value)}/>
                <p className = 'Authprompts'>Password</p>
                <input
                    className = 'Authinputs' 
                    type = 'password'
                    value = {password}
                    onChange = {e => this.handleChange('password', e.target.value)}/>
                <p className = 'Authprompts'>What is your rate?</p>
                <input
                    className = 'Authinputs' 
                    value = {price}
                    onChange = {e => this.handleChange('price', e.target.value)}/>
                <p className = 'Authprompts'>Tell us about yourself and your teaching experience</p>
                <input 
                    className = 'Authinputs'
                    value = {tutorDescription}
                    onChange = {e => this.handleChange('tutorDescription', e.target.value)}/>
                <div>
                    <button className = 'Authbuttons' onClick = {() => this.register()}>Create Account</button>
                </div>
                <p>Have an account? <Link to = '/'>Log in here.</Link></p>
                <p>Signing up as a student? <Link to = '/registerstudent'>Sign up here.</Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTutor);