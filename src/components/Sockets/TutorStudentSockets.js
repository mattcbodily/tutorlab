import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TutorStudentSocketRoom from './TutorStudentSocketRoom';


class TutorStudentSockets extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: []
        }
    }

    componentDidMount(){
        this.handleGetClassInfo()
    }

    handleGetClassInfo(){
        axios.get(`/api/tutorinfo/${this.props.tutor.id}/${this.props.match.params.tutorid}`)
        .then(res => {
            this.setState ({
                class: res.data
            })
        })
    }

    render(){
        const tutorSockets = this.state.class.map((classObj, i) => {
            return(
                <TutorStudentSocketRoom    key = {i}
                                           class = {classObj}/>
            )
        })
        return (
            <div>
                {tutorSockets}
                I am the tutor student sockets component
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

export default connect(mapStateToProps)(TutorStudentSockets);