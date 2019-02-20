import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './../Nav/Nav';
import StudentProfileDisplay from './../ProfileDisplay/StudentProfileDisplay';

class StudentProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            student: []
        }
    }

    componentDidMount(){
        return this.getStudentInfo()
    }

    getStudentInfo(){
        axios.get('/api/studentprofile')
        .then(res => {
            this.setState({
                student: res.data
            })
        })
    }

    render(){
        const studentProfile = this.state.student.map((studentObj, i) => {
            return(
                <StudentProfileDisplay key = {i} 
                                       student = {studentObj}/>
            )
        })
        return(
            <div>
                <Nav />
                {studentProfile}
                <div>
                    <button>Update Info</button>
                </div>
                <div>
                    <button>Your Tutors</button>
                </div>
                <div>
                    <button>Delete Account</button>
                </div>
                Back to <Link to = '/home'>home</Link>
            </div>
        )
    }
}

export default StudentProfile;