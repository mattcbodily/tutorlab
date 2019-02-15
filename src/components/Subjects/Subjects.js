import React, { Component } from 'react';
import axios from 'axios';
import SubjectDisplay from './../SubjectDisplay/SubjectDisplay';

class Subjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount(){
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
        const subjectList = this.state.subjects.map(subjectObj => {
            return(
                <SubjectDisplay key = {subjectObj.index}
                                subjects = {subjectObj}/>
            )
        })
        return(
            <div>
                <p>Select a subject below</p>
                {subjectList}
            </div>
        )
    }
}

export default Subjects;