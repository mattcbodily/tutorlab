import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import MyTutorTutorDisplay from './MyTutorTutorDisplay';
import PendingTutorTutors from './PendingTutorTutors';

class MyTutorTutors extends Component {
    constructor(props){
        super(props);
        this.state = {
            tutors: [],
            pendingTutors: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.handleGetMyTutors();
        this.handlePendingTutors();
    }

    handleGetMyTutors(){
        axios.get(`/api/mytutortutors/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                tutors: res.data
            })
        })
    }

    handlePendingTutors(){
        axios.get(`/api/pendingtutortutors/${this.props.tutor.id}`)
        .then(res => {
            this.setState({
                pendingTutors: res.data
            })
        })
    }

    render(){
        const pendingList = this.state.pendingTutors.map((pendingObj, i) => {
            return (
                <PendingTutorTutors key = {i}
                               tutors = {pendingObj}
                               getList = {this.componentDidMount}/>
            )
        })
        const tutorList = this.state.tutors.map((tutorObj, i) => {
            return (
                <MyTutorTutorDisplay key = {i}
                                 tutors = {tutorObj}
                                 getList = {this.componentDidMount}/>
            )
        })
        return(
            <div>
                <Nav />
                <p>Pending Requests</p>
                {pendingList}
                <p>Your Tutors</p>
                {tutorList}
                Back to <Link to = '/tutorprofile/:tutorid'>profile</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {tutor} = reduxState;
    return {
        tutor
    }
}

export default connect(mapStateToProps)(MyTutorTutors);