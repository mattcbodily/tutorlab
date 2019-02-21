import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import RegisterSubjectDisplay from './../SubjectDisplay/RegisterSubjectDisplay';
import { updateTutor } from './../../ducks/reducer';

class RegisterTutorStepTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount(){
        const {tutor} = this.props;
        if(!tutor.id){
            axios.get('/api/tutor')
            .then(res => {
                this.props.updateTutor(res.data)
            })
        }
        return this.getAllSubjects();
    }
    
    getAllSubjects(){
        axios.get('/api/allsubjects')
        .then(res => {
            this.setState({
                subjects: res.data
            })
        })
    }

    render(){
        const subjectList = this.state.subjects.map((subjectObj, i) => {
            return(
                <RegisterSubjectDisplay key = {i}
                                subjects = {subjectObj}/>
            )
        })
        return(
            <div>
                <h1>Create Your Account</h1>
                <h1>Step Two</h1>
                <p>What do you teach?</p>
                {subjectList}
                <div>
                    <Link to = '/registertutorlocation'><button>Submit</button></Link>
                </div>
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

const mapDispatchToProps = {
    updateTutor
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTutorStepTwo);