const bcrypt = require('bcryptjs');

module.exports = {
    studentLogin: async (req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let student = await db.login_student({student: email})
        student = student[0];
        if(!student){
            return res.sendStatus(400);
        }
        const foundStudent = bcrypt.compareSync(password, student.password);
        if(foundStudent){
            delete student.password;
            session.student = student;
            res.status(200).send(session.student);
        } else {
            res.status(401).send('Not Authorized')
        }
    },
    tutorLogin: async (req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let tutor = await db.login_tutor({tutor: email})
        tutor = tutor[0];
        if(!tutor){
            return res.sendStatus(400);
        }
        const foundTutor = bcrypt.compareSync(password, student.password);
        if(foundTutor){
            delete tutor.password;
            session.tutor = tutor;
            res.status(200).send(session.tutor);
        } else {
            res.status(401).send('Not Authorized')
        }
    }
}