import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <p>What do you teach?</p>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <p>Where do you teach?</p>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <p>What is your rate?</p>
                <input />
                <p>Tell us about yourself and your teaching experience</p>
                <input />
                <div>
                    <button>Create Account</button>
                </div>
                <p>Have an account? <Link to = '/'>Log in here.</Link></p>
                <p>Signing up as a student? <Link to = '/registerstudent'>Sign up here.</Link></p>
            </div>
        )
    }
}

export default RegisterTutor;