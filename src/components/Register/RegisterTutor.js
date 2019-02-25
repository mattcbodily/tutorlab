import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateTutor } from './../../ducks/reducer';

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
            <div>
                <h1>Create Your Account</h1>
                <p id = 'Authprompts'>First Name</p>
                <input 
                    value = {firstName}
                    onChange = {e => this.handleChange('firstName', e.target.value)}/>
                <p id = 'Authprompts'>Last Name</p>
                <input 
                    value = {lastName}
                    onChange = {e => this.handleChange('lastName', e.target.value)}/>
                <p id = 'Authprompts'>Email</p>
                <input 
                    value = {email}
                    onChange = {e => this.handleChange('email', e.target.value)}/>
                <p id = 'Authprompts'>Password</p>
                <input 
                    type = 'password'
                    value = {password}
                    onChange = {e => this.handleChange('password', e.target.value)}/>
                <p id = 'Authprompts'>What is your rate?</p>
                <input 
                    value = {price}
                    onChange = {e => this.handleChange('price', e.target.value)}/>
                <p id = 'Authprompts'>Tell us about yourself and your teaching experience</p>
                <input 
                    value = {tutorDescription}
                    onChange = {e => this.handleChange('tutorDescription', e.target.value)}/>
                <div>
                    <button onClick = {() => this.register()}>Create Account</button>
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