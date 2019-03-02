import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import PendingStudents from './PendingStudents';
import AcceptedStudents from './AcceptedStudents';
import PendingTutorStudents from './PendingTutorStudents';
import AcceptedTutorStudents from './AcceptedTutorStudents';
import './StudentList.css';

class StudentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            acceptedStudents: [],
            pendingStudents: [],
            acceptedTutorStudents: [],
            pendingTutorStudents: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.getAcceptedStudents();
        this.getAcceptedTutorStudents();
        this.getPendingStudents();
        this.getPendingTutorStudents();
    }

    getAcceptedStudents(){
        axios.get(`/api/acceptedstudents/${this.props.tutor.id}`)
        .then(res => {
            this.setState ({
                acceptedStudents: res.data
            })
        })
    }

    getAcceptedTutorStudents(){
        axios.get(`/api/acceptedtutorstudents/${this.props.tutor.id}`)
        .then(res => {
            this.setState ({
                acceptedTutorStudents: res.data
            })
        })
    }

    getPendingStudents(){
        axios.get(`/api/pendingstudents/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                pendingStudents: res.data
            })
        })
    }

    getPendingTutorStudents(){
        axios.get(`/api/pendingtutorstudents/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                pendingTutorStudents: res.data
            })
        })
    }

    render(){
        const acceptedList = this.state.acceptedStudents.map((acceptedObj, i) => {
            return(
                <AcceptedStudents key = {i}
                                  student = {acceptedObj}
                                  user = {this.props.tutor.id}
                                  getList = {this.componentDidMount}/>
            )
        })
        const acceptedTutorStudentList = this.state.acceptedTutorStudents.map((acceptedTutorObj, i) => {
            return(
                <AcceptedTutorStudents key = {i}
                                       tutor = {acceptedTutorObj}
                                       user = {this.props.tutor.id}
                                       getList = {this.componentDidMount}/>
            )
        })
        const pendingList = this.state.pendingStudents.map((pendingObj, i) => {
            return(
                <PendingStudents key = {i}
                                 student = {pendingObj}
                                 user = {this.props.tutor.id}
                                 getList = {this.componentDidMount}/>
            )
        })
        const pendingTutorStudentList = this.state.pendingTutorStudents.map((pendingTutorObj, i) => {
            return(
                <PendingTutorStudents key = {i}
                                      tutor = {pendingTutorObj}
                                      user = {this.props.tutor.id}
                                      getList = {this.componentDidMount}/>
            )
        })
        return(
            <div className = 'Studentlistdiv'>
                {(this.state.pendingStudents.length || this.state.pendingTutorStudents.length) ?
                (<div>
                    <Nav />
                    <p className = 'Studentlistprompts'>Pending Student Requests</p>
                    {pendingList}
                    {pendingTutorStudentList}
                    <p className = 'Studentlistprompts'>Your Students</p>
                    {acceptedList}
                    {acceptedTutorStudentList}
                    Back to <Link to = '/tutorprofile/:tutorid'>profile</Link>
                </div>) : (
                <div>
                    <Nav />
                    <p className = 'Studentlistprompts'>Your Students</p>
                    {acceptedList}
                    {acceptedTutorStudentList}
                    Back to <Link to = '/tutorprofile/:tutorid'>profile</Link>
                </div>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {tutor} = reduxState;
    return{
        tutor
    }
}

export default connect(mapStateToProps)(StudentList);