import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStudent, updateTutor } from './../../ducks/reducer';
import AuthNav from './../Nav/AuthNav';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            tutorEmail: '',
            tutorPassword: ''
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
        const tutorInfo = {
            email: this.state.tutorEmail,
            password: this.state.tutorPassword
        }
        axios.post('/auth/logintutor', tutorInfo)
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
        const {email, password, tutorEmail, tutorPassword} = this.state;
        return(
            <div className = 'Loginhomediv'>
                <AuthNav />
                <div className = 'Welcomebackdiv'>
                    <h1 className = 'Welcomeback'>Welcome to Teachio</h1>
                    <h3 className = 'Findtutorsonline'>Find Tutors Online</h3>
                </div>
                <div className = 'Authdoubleflex'>
                    <div className = 'Authflexdiv'>
                        <div className = 'Studentloginbox'>
                            <h3 className = 'Studentloginprompt'>Student Login</h3>
                            <p className = 'Authprompts'>Email Address</p>
                            <input
                                className = 'Authinputs'
                                value = {email}
                                onChange = {e => this.handleChange('email', e.target.value)}
                            />
                            <p className = 'Authprompts'>Password</p>
                            <input
                                className = 'Authinputs'
                                type = 'password' 
                                value = {password}
                                onChange = {e => this.handleChange('password', e.target.value)}
                            />
                            <div>
                                <button className = 'Authbuttons' onClick = {() => this.loginStudent()}>Log In</button>
                            </div>
                            <p className = 'Loginlinks'>Don't have an account? <Link to = '/registerstudent'>Sign up here.</Link></p>
                        </div>
                        <div className = 'Tutorloginbox'> 
                            <h3 className = 'Studentloginprompt'>Tutor Login</h3>
                            <p className = 'Authprompts'>Email Address</p>
                            <input
                                className = 'Authinputs' 
                                value = {tutorEmail}
                                onChange = {e => this.handleChange('tutorEmail', e.target.value)}
                            />
                            <p className = 'Authprompts'>Password</p>
                            <input
                                className = 'Authinputs'
                                type = 'password' 
                                value = {tutorPassword}
                                onChange = {e => this.handleChange('tutorPassword', e.target.value)}
                            />
                            <div>
                                <button className = 'Authbuttons' onClick = {() => this.loginTutor()}>Log In</button>
                            </div>
                            <p className = 'Loginlinks'>Signing up as a tutor? <Link to = '/registertutor'>Sign up here.</Link></p>
                        </div>
                    </div>
                </div> 
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