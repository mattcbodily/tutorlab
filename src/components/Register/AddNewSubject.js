import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AddNewSubjectDisplay from './../SubjectDisplay/AddNewSubjectDisplay';
import { updateTutor } from './../../ducks/reducer';

class AddNewSubject extends Component {
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
                <AddNewSubjectDisplay key = {i}
                                subjects = {subjectObj}/>
            )
        })
        return(
            <div>
                <p>Select a subject</p>
                {subjectList}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSubject);