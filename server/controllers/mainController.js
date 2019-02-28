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

    getTutorSubjects: (req, res) => {
        const {id} = req.params;
        req.app.get('db').get_tutors_subjects([id])
        .then(subjects => res.status(200).send(subjects))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getTutorLocations: (req, res) => {
        const {id} = req.params;
        req.app.get('db').get_tutor_locations([id])
        .then(locations => res.status(200).send(locations))
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
    },

    addClass: (req, res) => {
        const {tutor, subject} = req.body;
        req.app.get('db').add_class([tutor, subject])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getLocations: (req, res) => {
        req.app.get('db').get_locations()
        .then(locations => res.status(200).send(locations))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    addTutorLocation: (req, res) => {
        const {tutor, location} = req.body;
        req.app.get('db').add_tutor_location([tutor, location])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getClassId: (req, res) => {
        const {subject, tutor} = req.params;
        req.app.get('db').get_class_id([subject, tutor])
        .then(classId => res.status(200).send(classId))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    },

    postLessonRequest: (req, res) => {
        const {student, classid} = req.body;
        req.app.get('db').post_lesson_request([student, classid])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    postTutorLessonRequest: (req, res) => {
        const {tutor, classid} = req.body;
        req.app.get('db').tutor_lesson_request([tutor, classid])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getPendingStudents: (req, res) => {
        const {id} = req.params;
        req.app.get('db').pending_students([id])
        .then(students => res.status(200).send(students))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getPendingTutorStudents: (req, res) => {
        const {id} = req.params;
        req.app.get('db').pending_tutor_students([id])
        .then(tutorStudents => res.status(200).send(tutorStudents))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getAcceptedStudents: (req, res) => {
        const {id} = req.params;
        req.app.get('db').accepted_students([id])
        .then(students => res.status(200).send(students))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getAcceptedTutorStudents: (req, res) => {
        const {id} = req.params;
        req.app.get('db').accepted_tutor_students([id])
        .then(tutors => res.status(200).send(tutors))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    acceptRequest: (req, res) => {
        const {student, classid} = req.params;
        req.app.get('db').accept_request([student, classid])
        .then(student => res.status(200).send(student))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    acceptTutorStudentRequest: (req, res) => {
        const {tutor, classid} = req.params;
        req.app.get('db').accept_tutor_student_request([tutor, classid])
        .then(tutor => res.status(200).send(tutor))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    dropStudent: (req, res) => {
        const {student, classid} = req.params;
        req.app.get('db').drop_student_from_list([student, classid])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    dropTutorStudent: (req, res) => {
        const {tutor, classid} = req.params;
        req.app.get('db').drop_tutor_student([tutor, classid])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getMyTutors: (req, res) => {
        const {id} = req.params;
        req.app.get('db').my_tutors([id])
        .then(tutors => res.status(200).send(tutors))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getMyTutorTutors: (req, res) => {
        const {id} = req.params;
        req.app.get('db').my_tutor_tutors([id])
        .then(tutors => res.status(200).send(tutors))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getPendingTutors: (req, res) => {
        const {id} = req.params;
        req.app.get('db').pending_tutors([id])
        .then(tutors => res.status(200).send(tutors))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getPendingTutortutors: (req, res) => {
        const {id} = req.params;
        req.app.get('db').pending_tutor_tutors([id])
        .then(tutors => res.status(200).send(tutors))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getStudentRoomInfo: (req, res) => {
        const {student, tutor} = req.params;
        req.app.get('db').get_student_room_info([student, tutor])
        .then(info => res.status(200).send(info))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getStudentRoomId: (req, res) => {
        const {student, tutor, classid} = req.params;
        req.app.get('db').sockets.get_student_room_id([student, tutor, classid])
        .then(room => res.status(200).send(room))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getTutorStudentRoomId: (req, res) => {
        const {tutor, classid, tutor_student} = req.params;
        req.app.get('db').sockets.get_tutor_student_room([tutor, classid, tutor_student])
        .then(room => res.status(200).send(room))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    getTutorStudentRoomInfo: (req, res) => {
        const {student, tutor} = req.params;
        req.app.get('db').get_tutor_student_room_info([student, tutor])
        .then(info => res.status(200).send(info))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    createStudentRoom: (req, res) => {
        const {student, tutor, classid} = req.body;
        req.app.get('db').create_new_room([student, tutor, classid])
        .then(room => res.status(200).send(room))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    createTutorStudentRoom: (req, res) => {
        const {tutor, classid, tutor_student} = req.body;
        req.app.get('db').create_new_tutor_student_room([tutor, classid, tutor_student])
        .then(room => res.status(200).send(room))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    uploadProfilePic: (req, res) => {
        const {profile_pic, student} = req.body;
        req.app.get('db').upload_profile_pic([profile_pic, student])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    uploadTutorProfilePic: (req, res) => {
        const {profile_pic, tutor} = req.body;
        req.app.get('db').upload_tutor_profile_pic([profile_pic, tutor])
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    }
}