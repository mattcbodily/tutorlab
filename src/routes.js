import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import RegisterStudent from './components/Register/RegisterStudent';
import RegisterTutor from './components/Register/RegisterTutor';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Subjects from './components/Subjects/Subjects';
import AddNewSubject from './components/Register/AddNewSubject';
import TutorList from './components/TutorList/TutorList';
import TutorView from './components/TutorView/TutorView';
import StudentProfile from './components/Profiles/StudentProfile';
import TutorProfile from './components/Profiles/TutorProfile';
import StudentList from './components/StudentList/StudentList';
import MyTutors from './components/MyTutors/MyTutors';
import MyTutorTutors from './components/MyTutorTutors/MyTutorTutors';
import RegisterTutorStepTwo from './components/Register/RegisterTutorStepTwo';
import RegisterTutorStepThree from './components/Register/RegisterTutorStepThree';
import StudentSockets from './components/Sockets/StudentSockets';
import TutorSockets from './components/Sockets/TutorSockets';
import TutorStudentSockets from './components/Sockets/TutorStudentSockets';
import TutorTutorSockets from './components/Sockets/TutorTutorSockets';
import AddNewLocation from './components/Register/AddNewLocation';

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
        <Route path = '/addsubject' component = {AddNewSubject}/>
        <Route path = '/addlocation' component = {AddNewLocation}/>
        <Route path = '/tutors/:subject' component = {TutorList}/>
        <Route path = '/tutor/:subject/:tutorid' component = {TutorView}/>
        <Route path = '/studentprofile/:studentid' component = {StudentProfile}/>
        <Route path = '/tutorprofile/:tutorid' component = {TutorProfile}/>
        <Route path = '/studentlist/:tutorid' component = {StudentList}/>
        <Route path = '/tutorlist/:studentid' component = {MyTutors}/>
        <Route path = '/mytutors/:tutorid' component = {MyTutorTutors}/>
        <Route path = '/studentmessage/:studentid' component = {StudentSockets}/>
        <Route path = '/tutormessage/:tutorid' component = {TutorSockets}/>
        <Route path = '/mytutormessage/:tutorid' component = {TutorStudentSockets}/>
        <Route path = '/tutorstudent/:studentid' component = {TutorTutorSockets}/>
    </Switch>
)