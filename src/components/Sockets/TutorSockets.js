import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TutorSocketRoom from './TutorSocketRoom';

class TutorSockets extends Component {
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
        axios.get(`/api/studentinfo/${this.props.student.id}/${this.props.match.params.tutorid}`)
        .then(res => {
            this.setState ({
                class: res.data
            })
        })
    }

    render(){
        const tutorSockets = this.state.class.map((classObj, i) => {
            return(
                <TutorSocketRoom    key = {i}
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
    const {student} = reduxState;
    return {
        student
    }
}

export default connect(mapStateToProps)(TutorSockets);