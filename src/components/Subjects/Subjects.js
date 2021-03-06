import React, { Component } from 'react';
import axios from 'axios';
import Nav from './../Nav/Nav';
import SubjectDisplay from './../SubjectDisplay/SubjectDisplay';
import { Link } from 'react-router-dom';
import './Subjects.css';

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
        const subjectList = this.state.subjects.map((subjectObj, i) => {
            return(
                <SubjectDisplay key = {i}
                                subjects = {subjectObj}/>
            )
        })
        return(
            <div className = 'Subjectsdiv'>
                <Nav />
                <h1>Subjects</h1>
                <p className = 'Subjectheader'>Select a subject below</p>
                <div className = 'Homesubjectflexdiv'>
                    {subjectList}
                </div>
                <div>
                    <p className = 'Loginlinks'>Back to <Link to = '/home'>home</Link></p>
                </div>
            </div>
        )
    }
}

export default Subjects;