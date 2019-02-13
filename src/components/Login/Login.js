import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isTutor: false
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    toggleTutor(){
        this.setState({isTutor: !this.state.isTutor})
    }

    studentLogin(){
        const {email, password} = this.state;
        axios.post('/auth/student/login', {email, password})
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/home');
        })
        .catch(err => {
            console.log(err);
        })
    }

    tutorLogin(){
        const {email, password} = this.state;
        axios.post('/auth/tutor/login', {email, password})
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/home');
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        console.log(this.state.isTutor);
        const {email, password, isTutor} = this.state;
        return(
            <div>
                <h1>Welcome</h1>
                <p>Student Login</p>
                <p>Email Address</p>
                <input 
                    value = {email}
                    onChange = {e => this.handleChange('email', e.target.value)}
                />
                <p>Password</p>
                <input
                    type = 'password' 
                    value = {password}
                    onChange = {e => this.handleChange('password', e.target.value)}
                />
                <div>
                    <button>Log In</button>
                    <input 
                        type='checkbox' 
                        value = {isTutor}
                        onClick = {() => this.toggleTutor()}    
                    />
                </div>
                {/* <p>Tutor Login</p>
                <p>Email Address</p>
                <input 
                    value = {email}
                    onChange = {e => this.handleChange('email', e.target.value)}
                />
                <p>Password</p>
                <input
                    type = 'password' 
                    value = {password}
                    onChange = {e => this.handleChange('password', e.target.value)}
                />
                <div>
                    <button>Log In</button>
                </div> */}
                <p>Don't have an account? <Link to = '/registerstudent'>Sign up here.</Link></p>
                <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here.</Link></p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);