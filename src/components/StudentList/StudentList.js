import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import PendingStudents from './PendingStudents';
// import AcceptedStudents from './AcceptedStudents';

class StudentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            acceptedStudents: [],
            pendingStudents: []
        }
    }

    componentDidMount(){
        this.getPendingStudents();
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
        const pendingList = this.state.pendingStudents.map((pendingObj, i) => {
            return(
                <PendingStudents key = {i}
                                 student = {pendingObj}/>
            )
        })
        return(
            <div>
                <Nav />
                {pendingList}
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