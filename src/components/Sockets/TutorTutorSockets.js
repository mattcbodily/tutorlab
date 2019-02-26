import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TutorTutorSocketRoom from './TutorTutorSocketRoom';



class TutorTutorSockets extends Component {
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
        axios.get(`/api/tutorinfo/${this.props.match.params.studentid}/${this.props.tutor.id}`)
        .then(res => {
            this.setState ({
                class: res.data
            })
        })
    }

    render(){
        const tutorSockets = this.state.class.map((classObj, i) => {
            return(
                <TutorTutorSocketRoom    key = {i}
                                           class = {classObj}/>
            )
        })
        return (
            <div>
                {tutorSockets}
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

export default connect(mapStateToProps)(TutorTutorSockets);