import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './../Nav/Nav';
import MyTutorsDisplay from './MyTutorsDisplay';
import PendingTutors from './PendingTutors';

class MyTutors extends Component {
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
        axios.get(`/api/mytutors/${this.props.student.id}`)
        .then(res => {
            this.setState({
                tutors: res.data
            })
        })
    }

    handlePendingTutors(){
        axios.get(`/api/pendingtutors/${this.props.student.id}`)
        .then(res => {
            this.setState({
                pendingTutors: res.data
            })
        })
    }

    render(){
        const pendingList = this.state.pendingTutors.map((pendingObj, i) => {
            return (
                <PendingTutors key = {i}
                               tutor = {pendingObj}
                               getList = {this.componentDidMount}/>
            )
        })
        const tutorList = this.state.tutors.map((tutorObj, i) => {
            return (
                <MyTutorsDisplay key = {i}
                                 tutor = {tutorObj}
                                 getList = {this.componentDidMount}/>
            )
        })
        return(
            <div className = 'Studentlistdiv'>
                {this.state.pendingTutors.length ?
                (<div>
                    <Nav />
                    <p className = 'Studentlistprompts'>Pending Requests</p>
                    {pendingList}
                    <p className = 'Studentlistprompts'>Your Tutors</p>
                    {tutorList}
                    <p className = 'Loginlinks'>Back to <Link to = '/studentprofile/:studentid'>profile</Link></p>
                </div>) : (
                <div>
                    <Nav />
                    <p className = 'Studentlistprompts'>Your Tutors</p>
                    {tutorList}
                    <p className = 'Loginlinks'>Back to <Link to = '/studentprofile/:studentid'>profile</Link></p>
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

export default connect(mapStateToProps)(MyTutors);