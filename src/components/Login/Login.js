import React, { Component } from 'react';
import Input from './../Input/Input';
import Button from './../Button/Button';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <p>Email Address</p>
                <Input />
                <p>Password</p>
                <Input />
                <Button />
                <p>Don't have an account? <Link to = '/registerstudent'>Sign up here.</Link></p>
                <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here.</Link></p>
            </div>
        )
    }
}

export default Login;