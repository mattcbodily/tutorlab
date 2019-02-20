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
        req.app.get('db').get_student_profile()
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
    }
}