import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    render(){
        const {student, tutor} = this.props;
        return (
            <div>
                {student.id ? (
                <div>
                    <Link to = '/home'>Home</Link>
                    <Link to = '/about'>About</Link>
                    <Link to = '/contact'>Contact</Link>
                    <Link to = {`/studentprofile/${student.id}`}>Profile</Link>
                </div> ) : (
                <div>
                    <Link to = '/home'>Home</Link>
                    <Link to = '/about'>About</Link>
                    <Link to = '/contact'>Contact</Link>
                    <Link to = {`/tutorprofile/${tutor.id}`}>Profile</Link>
                </div>  
                )
            }
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

export default connect(mapStateToProps)(Nav);