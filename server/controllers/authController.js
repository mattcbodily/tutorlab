const bcrypt = require('bcryptjs');

module.exports = {
    registerStudent: async(req, res) => {
        const {firstName, lastName, email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        let newStudent = await db.register_student([firstName, lastName, email, hash]);
        newStudent = newStudent[0];
        session.student = {...newStudent};
        res.status(201).send(session.student);
    },

    registerTutor: async(req, res) => {
        const {firstName, lastName, email, password, price, tutorDescription} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        let newTutor = await db.register_tutor([firstName, lastName, email, hash, price, tutorDescription]);
        newTutor = newTutor[0];
        session.tutor = {...newTutor};
        res.status(201).send(session.tutor);
    },

    loginStudent: async(req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let student = await db.login_student([email])
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
            res.status(401).send('Incorrect Password')
        }
    },

    loginTutor: async(req, res) => {
        const {email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db');
        let tutor = await db.login_tutor([email])
        tutor = tutor[0];
        if(!tutor){
            return res.sendStatus(400);
        }
        const foundTutor = bcrypt.compareSync(password, tutor.password);
        if(foundTutor){
            delete tutor.password;
            session.tutor = tutor;
            res.status(200).send(session.tutor);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    getStudent: (req, res) => {
        const {student} = req.session;
        if(student) {
            res.status(200).send(student)
        } else {
            res.sendStatus(401)
        }
    },

    getTutor: (req, res) => {
        const {tutor} = req.session;
        if(tutor) {
            res.status(200).send(tutor)
        } else {
            res.sendStatus(401)
        }
    }
}