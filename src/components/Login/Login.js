import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStudent, updateTutor } from './../../ducks/reducer';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isTutor: false
        }
    }

    componentDidMount(){
        const {student, tutor} = this.props;
        if(student.id) {
            this.props.history.push('/home')
        } else if(tutor.id) {
            this.props.history.push('/home')
        } else {
            axios.get('/api/student')
            .then(res => {
                this.props.updateStudent(res.data);
            })
            axios.get('/api/tutor')
            .then(res => {
                this.props.updateTutor(res.data);
            })
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    loginStudent(){
        const {email, password} = this.state;
        axios.post('/auth/loginstudent', {email, password})
        .then(res => {
            this.props.updateStudent(res.data);
            this.props.history.push('/home');
        })
        .catch(err => {
            console.log(err)
        })
    }

    loginTutor(){
        const {email, password} = this.state;
        axios.post('/auth/logintutor', {email, password})
        .then(res => {
            this.props.updateTutor(res.data);
            this.props.history.push('/home');
        })
        .catch(err => {
            console.log(err)
        })
    }

    toggleTutor(){
        this.setState({isTutor: !this.state.isTutor})
    }

    render(){
        const {email, password, isTutor} = this.state;
        return(
            <div>
                {!isTutor
                ? ( <div>
                        <h1>Welcome</h1>
                        <h3>Student Login</h3>
                        <p id = 'Authprompts'>Email Address</p>
                        <input
                            id = 'Authinputs' 
                            value = {email}
                            onChange = {e => this.handleChange('email', e.target.value)}
                        />
                        <p id = 'Authprompts'>Password</p>
                        <input
                            id = 'Authinputs'
                            type = 'password' 
                            value = {password}
                            onChange = {e => this.handleChange('password', e.target.value)}
                        />
                        <div>
                            <button id = 'Authbuttons' onClick = {() => this.loginStudent()}>Log In</button>
                        </div>
                            <input 
                                type='checkbox' 
                                value = {isTutor}
                                onClick = {() => this.toggleTutor()}    
                            />
                        <p>Don't have an account? <Link to = '/registerstudent'>Sign up here.</Link></p>
                        <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here.</Link></p>
                    </div>)
                : ( <div>
                        <h1>Welcome</h1> 
                        <h3>Tutor Login</h3>
                        <p id = 'Authprompts'>Email Address</p>
                        <input
                            id = 'Authinputs' 
                            value = {email}
                            onChange = {e => this.handleChange('email', e.target.value)}
                        />
                        <p id = 'Authprompts'>Password</p>
                        <input
                            id = 'Authinputs'
                            type = 'password' 
                            value = {password}
                            onChange = {e => this.handleChange('password', e.target.value)}
                        />
                        <div>
                            <button id = 'Authbuttons' onClick = {() => this.loginTutor()}>Log In</button>
                        </div>
                        <div>
                            <input 
                                type='checkbox' 
                                value = {isTutor}
                                onClick = {() => this.toggleTutor()}    
                            />
                        </div>
                        <p>Don't have an account? <Link to = '/registerstudent'>Sign up here.</Link></p>
                        <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here.</Link></p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        student: reduxState.student,
        tutor: reduxState.tutor
    }
}

const mapDispatchToProps = {
    updateStudent,
    updateTutor
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);