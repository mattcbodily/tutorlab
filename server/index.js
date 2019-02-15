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
app.post('/auth/student/login', ac.studentLogin);
app.post('/auth/tutor/login', ac.tutorLogin);

//data endpoints
app.get('/api/subjects', mc.getSubjectsHome);
app.get('/api/allsubjects', mc.getAllSubjects);

app.get('/api/studentprofile', mc.getStudentProfile);
app.get('/api/tutorprofile', mc.getTutorProfile);