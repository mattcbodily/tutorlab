import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import StudentSocketsDisplay from './StudentSocketsDisplay';

class StudentSockets extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: []
        }
        this.handleGetStudentInfo = this.handleGetStudentInfo.bind(this);
    }

    componentDidMount(){
        this.handleGetStudentInfo()
    }

    handleGetStudentInfo(){
        axios.get(`/api/studentinfo/${this.props.match.params.studentid}/${this.props.tutor.id}`)
        .then(res => {
            this.setState ({
                class: res.data
            })
        })
    }

    render(){
        const studentSockets = this.state.class.map((classObj, i) => {
            return (
                <StudentSocketsDisplay key = {i}
                                       class = {classObj}/>
            )
        })
        return (
            <div>
                {studentSockets}
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

export default connect(mapStateToProps)(StudentSockets);