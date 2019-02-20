import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStudent, updateTutor } from './../../ducks/reducer';

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
                            <button onClick = {() => this.loginStudent()}>Log In</button>
                            <input 
                                type='checkbox' 
                                value = {isTutor}
                                onClick = {() => this.toggleTutor()}    
                            />
                        </div>
                        <p>Don't have an account? <Link to = '/registerstudent'>Sign up here.</Link></p>
                        <p>Signing up as a tutor? <Link to = '/registertutor'>Sign up here.</Link></p>
                    </div>)
                : ( <div>
                        <h1>Welcome</h1> 
                        <p>Tutor Login</p>
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
                            <button onClick = {() => this.loginTutor()}>Log In</button>
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