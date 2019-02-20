module.exports = {
    getSubjectsHome: (req, res) => {
        req.app.get('db').get_subjects_home()
        .then(subject => res.status(200).send(subject))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getAllSubjects: (req, res) => {
        req.app.get('db').get_all_subjects()
        .then(subjects => res.status(200).send(subjects))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getStudentProfile: (req, res) => {
        const {id} = req.params;
        req.app.get('db').get_student_profile([id])
        .then(student => res.status(200).send(student))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getTutorProfile: (req, res) => {
        const {id} = req.params; 
        req.app.get('db').get_tutor_profile([id])
        .then(tutor => res.status(200).send(tutor))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getTutorList: (req, res) => {
        const {subject} = req.params;
        req.app.get('db').get_tutor_list([subject])
        .then(list => res.status(200).send(list))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    updateStudent: (req, res) => {
        const {firstName, lastName, email} = req.body;
        const {id} = req.params;
        req.app.get('db').update_student([firstName, lastName, email, id])
        .then(student => res.status(200).send(student))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    deleteStudent: (req, res) => {
        const {id} = req.params;
        req.app.get('db').delete_student([id])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    updateTutor: (req, res) => {
        const {firstName, lastName, email, price, tutorDescription} = req.body;
        const {id} = req.params;
        req.app.get('db').update_tutor([firstName, lastName, email, price, tutorDescription, id])
        .then(tutor => res.status(200).send(tutor))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    deleteTutor: (req, res) => {
        const {id} = req.params;
        req.app.get('db').delete_tutor([id])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    }
}