import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    render(){
        return(
        <div>
            <h1>Create Your Account</h1>
            <p>First Name</p>
            <input />
            <p>Last Name</p>
            <input />
            <p>Email</p>
            <input />
            <p>Password</p>
            <input />
            <div>
                <button>Create Account</button>
            </div>
            <p>Have an account? <Link to = '/'>Log in here</Link></p>
            <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here</Link></p>
        </div>
        )
    }
}

export default RegisterStudent;