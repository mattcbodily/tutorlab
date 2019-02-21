import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import PendingStudents from './PendingStudents';
import AcceptedStudents from './AcceptedStudents';

class StudentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            acceptedStudents: [],
            pendingStudents: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.getAcceptedStudents();
        this.getPendingStudents();
    }

    getAcceptedStudents(){
        axios.get(`/api/acceptedstudents/${this.props.tutor.id}`)
        .then(res => {
            this.setState ({
                acceptedStudents: res.data
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

    render(){
        const acceptedList = this.state.acceptedStudents.map((acceptedObj, i) => {
            return(
                <AcceptedStudents key = {i}
                                  student = {acceptedObj}
                                  getList = {this.componentDidMount}/>
            )
        })
        const pendingList = this.state.pendingStudents.map((pendingObj, i) => {
            return(
                <PendingStudents key = {i}
                                 student = {pendingObj}
                                 getList = {this.componentDidMount}/>
            )
        })
        return(
            <div>
                <Nav />
                <p>Pending Student Requests</p>
                {pendingList}
                <p>Your Students</p>
                {acceptedList}
                Back to <Link to = '/tutorprofile/:tutorid'>profile</Link>
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