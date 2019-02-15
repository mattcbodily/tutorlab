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
    }
}