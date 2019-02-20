import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import StudentProfileDisplay from './../ProfileDisplay/StudentProfileDisplay';

class StudentProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            student: [],
            firstName: '',
            lastName: '',
            email: '',
            editProfile: false
        }
    }

    componentDidMount(){
        return this.getStudentInfo()
    }

    getStudentInfo(){
        axios.get(`/api/studentprofile/${this.props.student.id}`)
        .then(res => {
            this.setState({
                student: res.data
            })
        })
    }

    updateStudentInfo(){
        const editStudent = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        }
        axios.put(`/api/updatestudent/${this.props.student.id}`, editStudent)
        .then(res => {
            this.setState({
                student: res.data
            })
            this.handleEditToggle();
            this.componentDidMount();
        })
    }

    deleteAccount(){
        axios.delete(`/api/deletestudent/${this.props.student.id}`)
        .then(
            this.props.history.push('/registerstudent')
        )
        .catch(err => {
            console.log(err)
        })
    }

    handleEditToggle(){
        this.setState ({
            editProfile: !this.state.editProfile
        })
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        const studentProfile = this.state.student.map((studentObj, i) => {
            return(
                <StudentProfileDisplay key = {i} 
                                       student = {studentObj}/>
            )
        })
        return(
            <div>
                {!this.state.editProfile ?
                (<div>
                    <Nav />
                    {studentProfile}
                    <div>
                        <button onClick = {() => this.handleEditToggle()}>Update Info</button>
                    </div>
                    <div>
                        <button>Your Tutors</button>
                    </div>
                    <div>
                        <button onClick = {() => this.deleteAccount()}>Delete Account</button>
                    </div>
                    Back to <Link to = '/home'>home</Link>
                </div>) : (
                <div>
                    <Nav />
                    <div>
                        <input 
                            value = {this.state.firstName}
                            onChange = {e => this.handleChange('firstName', e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            value = {this.state.lastName}
                            onChange = {e => this.handleChange('lastName', e.target.value)}/>
                    </div>
                    <div>
                        <input 
                            value = {this.state.email}
                            onChange = {e => this.handleChange('email', e.target.value)}/>
                    </div>
                    <div>
                        <button onClick = {() => this.updateStudentInfo()}>Submit</button>
                    </div>
                    <div>
                        <button onClick = {() => this.handleEditToggle()}>Cancel</button>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {student} = reduxState;
    return {
        student
    }
}

export default connect(mapStateToProps)(StudentProfile);