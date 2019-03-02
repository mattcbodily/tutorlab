import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css'

class Nav extends Component {
    render(){
        const {student, tutor} = this.props;
        return (
            <div className = 'Navbar'>
                {student.id ? (
                <div className = 'Navdiv'>
                    <div className = 'Websitenamediv'>
                        <span className = 'Websitename'>Teachio</span>
                    </div>
                    <div className = 'Linkdiv'>
                        <Link className = 'Navlinks' to = '/home'>Home</Link>
                        <Link className = 'Navlinks' to = '/subjects'>Subjects</Link>
                        <Link className = 'Navlinks' to = {`/studentprofile/${student.id}`}>Profile</Link>
                        <Link className = 'Biglinks' to = '/about'>About</Link>
                        <Link className = 'Biglinks' to = '/contact'>Contact</Link>
                    </div>
                </div> ) : (
                <div className = 'Navdiv'>
                    <div>
                        <span className = 'Websitename'>Teachio</span>
                    </div>
                    <div  className = 'Linkdiv'>
                        <Link className = 'Navlinks' to = '/home'>Home</Link>
                        <Link className = 'Navlinks' to = '/subjects'>Subjects</Link>
                        <Link className = 'Navlinks' to = {`/tutorprofile/${tutor.id}`}>Profile</Link>
                        <Link className = 'Biglinks' to = '/about'>About</Link>
                        <Link className = 'Biglinks' to = '/contact'>Contact</Link>
                    </div>
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