import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './../Nav/Nav';
import axios from 'axios';
import SubjectDisplay from './../SubjectDisplay/SubjectDisplay';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount(){
        return this.getSubjects()
    }

    getSubjects(){
        axios.get('/api/subjects')
        .then(res => {
            this.setState({
                subjects: res.data
            })
        })
    }

    render(){
        console.log(this.props.student)
        console.log(this.props.tutor)
        const subjectList = this.state.subjects.map((subjectObj, i) => {
            return(
                <SubjectDisplay key = {i}
                                subjects = {subjectObj}
                                />
                                
            )
        })
        return(
            <div>
            <Nav />
                <div>
                    <p>Welcome! Start by searching for a subject to learn.</p>
                    <input />
                    <div>
                        <button>Search</button>
                    </div>
                </div>
                <div>
                    <p>Popular Subjects</p>
                    {subjectList}
                </div>
                View more subjects <Link to ='/subjects'>here.</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {student, tutor} = reduxState;
    return {
        student,
        tutor
    }
}

export default connect(mapStateToProps)(Home);