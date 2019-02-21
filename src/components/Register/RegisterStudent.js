import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateStudent } from './../../ducks/reducer';

class RegisterStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    register(){
        const {firstName, lastName, email, password} = this.state;
        axios.post('/auth/registerstudent', {firstName, lastName, email, password})
        .then(res => {
            this.props.updateStudent(res.data);
            this.props.history.push('/home')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const { firstName, lastName, email, password } = this.state;
        return(
        <div>
            <h1>Create Your Account</h1>
            <p>First Name</p>
            <input 
                value = {firstName}
                onChange = {e => this.handleChange('firstName', e.target.value)}/>
            <p>Last Name</p>
            <input 
                value = {lastName}
                onChange = {e => this.handleChange('lastName', e.target.value)}/>
            <p>Email</p>
            <input 
                value = {email}
                onChange = {e => this.handleChange('email', e.target.value)}/>
            <p>Password</p>
            <input 
                type = 'password'
                value = {password}
                onChange = {e => this.handleChange('password', e.target.value)}/>
            <div>
                <button onClick = {() => this.register()}>Create Account</button>
            </div>
            <p>Have an account? <Link to = '/'>Log in here</Link></p>
            <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here</Link></p>
        </div>
        )
    }
}

const mapStateToProps = reduxState =>{
    const {student} = reduxState;
    return {
        student
    }
}

const mapDispatchToProps = {
    updateStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStudent);