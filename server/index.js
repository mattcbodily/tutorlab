require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const sessions = require('express-session');
const ac = require('./controllers/authController');
const mc = require('./controllers/mainController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
app.use(json());

app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Coding is happening on port ${SERVER_PORT}`))
})

//authentication endpoints
app.post('/auth/registerstudent', ac.registerStudent); //This is in the register student component
app.post('/auth/registertutor', ac.registerTutor); //This is in the register tutor component
app.post('/auth/loginstudent', ac.loginStudent); //This is in the login component
app.post('/auth/logintutor', ac.loginTutor); //This is in the login component
app.post('/auth/logout', ac.logout); //This is in the nav component
app.get('/api/student', ac.getStudent); //This is in the home component
app.get('/api/tutor', ac.getTutor); //This is in the home component

//data endpoints
app.get('/api/subjects', mc.getSubjectsHome); //this is in the Home component
app.get('/api/allsubjects', mc.getAllSubjects); //this is in the Subjects component
app.get('/api/studentprofile/:id', mc.getStudentProfile); //this is in the StudentProfile component
app.get('/api/tutorprofile/:id', mc.getTutorProfile); //this is in the TutorProfile component
app.get('/api/tutorlist/:subject', mc.getTutorList) //this is in the TutorList component

app.put('/api/updatestudent/:id', mc.updateStudent); //this is in the student profile component
app.put('/api/updatetutor/:id', mc.updateTutor); //this is in the tutor profile component

app.delete('/api/deletestudent/:id', mc.deleteStudent); //this is in the student profile component
app.delete('/api/deletetutor/:id', mc.deleteTutor); // this is in the tutor profile component