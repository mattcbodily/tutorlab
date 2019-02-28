require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const path = require('path');
const massive = require('massive');
const sessions = require('express-session');
const aws = require('aws-sdk');
const socket = require('socket.io');
const ac = require('./controllers/authController');
const mc = require('./controllers/mainController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

const app = express();


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const io = socket(
    app.listen(SERVER_PORT, () => console.log(`Coding is happening on port ${SERVER_PORT}`))
)
    
app.use(json());
    
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
    
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/signs3', (req, res) => {
    aws.config = {
        region: 'us-west-1',
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    };

    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        // Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
        };

        return res.send(returnData);
    })
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
app.get('/api/locations', mc.getLocations); //this is in the register student step three component
app.get('/api/studentprofile/:id', mc.getStudentProfile); //this is in the StudentProfile component
app.get('/api/tutorprofile/:id', mc.getTutorProfile); //this is in the TutorProfile component
app.get('/api/tutorlist/:subject', mc.getTutorList) //this is in the TutorList component
app.get('/api/classid/:subject/:tutor', mc.getClassId) //this is in the tutorview component
app.get('/api/pendingstudents/:id', mc.getPendingStudents) //this is in the student list component
app.get('/api/acceptedstudents/:id', mc.getAcceptedStudents) // this is in the student list component
app.get('/api/acceptedtutorstudents/:id', mc.getAcceptedTutorStudents); // this is in the student list component
app.get('/api/mytutors/:id', mc.getMyTutors); // this is in the my tutors component
app.get('/api/mytutortutors/:id', mc.getMyTutorTutors); //this is in the MyTutorTutors component
app.get('/api/pendingtutors/:id', mc.getPendingTutors); //this is in the my tutors component
app.get('/api/pendingtutortutors/:id', mc.getPendingTutortutors); // this is in the MyTutorTutors component
app.get('/api/pendingtutorstudents/:id', mc.getPendingTutorStudents); //this is in the student list component
app.get('/api/studentinfo/:student/:tutor', mc.getStudentRoomInfo); //this is in the student sockets component
app.get('/api/studentroom/:student/:tutor/:classid', mc.getStudentRoomId); // this is in the student sockets display component
app.get('/api/tutorstudentroom/:tutor/:classid/:tutor_student', mc.getTutorStudentRoomId); //this is in the tutor student socket room component
app.get('/api/tutorinfo/:student/:tutor', mc.getTutorStudentRoomInfo); // this is in the tutor student sockets component

app.post('/api/addclass', mc.addClass); //this is in the register subject display component
app.post('/api/addlocation', mc.addTutorLocation); //this is in the location display component
app.post('/api/lessonrequest', mc.postLessonRequest); // this is in the lesson request component
app.post('/api/tutorlessonrequest', mc.postTutorLessonRequest); // this is in the tutor lesson request component
app.post('/api/createroom', mc.createStudentRoom) //this is in the tutor socket room component
app.post('/api/createtutorroom', mc.createTutorStudentRoom) //this is in the tutor student socket room component

app.put('/api/updatestudent/:id', mc.updateStudent); //this is in the student profile component
app.put('/api/updatetutor/:id', mc.updateTutor); //this is in the tutor profile component
app.put('/api/acceptrequest/:student/:classid', mc.acceptRequest); // this is in the pending students component
app.put('/api/accepttutorstudentrequest/:tutor/:classid', mc.acceptTutorStudentRequest); //this is in the pending tutor students component
app.put('/api/profilepic', mc.uploadProfilePic); //this is in the upload profile pic component
app.put('/api/tutorprofilepic', mc.uploadTutorProfilePic); // this is in the upload tutor profule pic component

app.delete('/api/deletestudent/:id', mc.deleteStudent); //this is in the student profile component
app.delete('/api/deletetutor/:id', mc.deleteTutor); // this is in the tutor profile component
app.delete('/api/dropstudent/:student/:classid', mc.dropStudent); // this is in the pending students, accepted students, my tutor display, and pending tutor components
app.delete('/api/droptutorstudent/:tutor/:classid', mc.dropTutorStudent); // this is in the pending tutor students, accepted tutor students components

// SOCKETS
io.on('connection', socket => {
    console.log('User Connected');
    
    socket.on('join room', async data => {
        const { room, student, tutor, classid, tutor_student } = data;
        const db = app.get('db');
        console.log('Room Joined', room);
        let existingRoom = await db.sockets.check_room([room]);
        const {room_id} = existingRoom[0];
        !existingRoom.length ? db.sockets.create_room([student, tutor, classid, tutor_student]) : null;
        let messages = await db.sockets.fetch_message_history(room_id);
        socket.join(room_id);
        io.to(room_id).emit('room joined', messages, room_id)
    });
    
    socket.on('message sent', async data => {
        const { room, message, tutor, student, tutor_student } = data;
        const db = app.get('db');
        await db.sockets.create_message([room, message, tutor, student, tutor_student]);
        let messages = await db.sockets.fetch_message_history([room]);
        io.to(data.room).emit('message dispatched', messages);
    });
    
    socket.on('disconnect', () => {
        console.log('User Disconnected')
    });
});