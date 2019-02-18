import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import RegisterStudent from './components/Register/RegisterStudent';
import RegisterTutor from './components/Register/RegisterTutor';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Subjects from './components/Subjects/Subjects';
import TutorList from './components/TutorList/TutorList';
import TutorView from './components/TutorView/TutorView';
import StudentProfile from './components/Profiles/StudentProfile';
import TutorProfile from './components/Profiles/TutorProfile';
import StudentList from './components/StudentList/StudentList';
import MyTutors from './components/MyTutors/MyTutors';
import RegisterTutorStepTwo from './components/Register/RegisterTutorStepTwo';
import RegisterTutorStepThree from './components/Register/RegisterTutorStepThree';

export default (
    <Switch>
        <Route exact path = '/' component = {Login}/>
        <Route path = '/registerstudent' component = {RegisterStudent}/>
        <Route path = '/registertutorsubject' component = {RegisterTutorStepTwo}/>
        <Route path = '/registertutorlocation' component = {RegisterTutorStepThree}/>
        <Route path = '/registertutor' component = {RegisterTutor}/>
        <Route path = '/home' component = {Home}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/contact' component = {Contact}/>
        <Route path = '/subjects' component = {Subjects}/>
        <Route path = '/tutors/:subject' component = {TutorList}/>
        <Route path = '/tutor/:tutorid' component = {TutorView}/>
        <Route path = '/studentprofile/:studentid' component = {StudentProfile}/>
        <Route path = '/tutorprofile/:tutorid' component = {TutorProfile}/>
        <Route path = '/studentlist/:tutorid' component = {StudentList}/>
        <Route path = '/tutorlist/:studentid' component = {MyTutors}/>
        {/* <Route path = '/tutorlist/:tutorid' component = {TutorList}/> */}
    </Switch>
)