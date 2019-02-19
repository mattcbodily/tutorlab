import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateStudent, updateTutor} from './../../ducks/reducer'; 

class Nav extends Component {
    logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            this.props.updateStudent({});
            this.props.updateTutor({});
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <Link to = '/home'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contact'>Contact</Link>
                <button onClick = {() => this.logout()}>Log Out</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateStudent,
    updateTutor
}

export default connect(null, mapDispatchToProps)(Nav);