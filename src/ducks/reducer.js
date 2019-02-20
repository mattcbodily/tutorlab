const initialState = {
    student: {
        id: 0,
        firstName: '',
        lastName: '',
        email: ''
    },
    tutor: {
        id: 0,
        firstName: '',
        lastName: '', 
        email: '',
        price: 0,
        tutorDescription: ''
    }
}

const UPDATE_STUDENT = 'UPDATE_STUDENT';
const UPDATE_TUTOR = 'UPDATE_TUTOR';

export function updateStudent(studentObj){
    return {
        type: UPDATE_STUDENT,
        payload: studentObj
    }
}

export function updateTutor(tutorObj){
    return {
        type: UPDATE_TUTOR,
        payload: tutorObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_STUDENT:
            // const {id, firstName, lastName, email} = payload;
            // const student = {id, firstName, lastName, email};
            let student = {
                    id: payload.student_id,
                    firstName: payload.first_name,
                    lastName: payload.last_name,
                    email: payload.email
            }
            return {...state, student};
        case UPDATE_TUTOR: 
            let tutor = {
                id: payload.tutor_id,
                firstName: payload.first_name,
                lastName: payload.last_name,
                email: payload.email,
                price: payload.price,
                tutorDescription: payload.tutor_description
            }
            return {...state, tutor};
            
        default:
            return state;
    }
}