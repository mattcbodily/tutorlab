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
            let studentObj = {
                student: payload
            }
            return {...state, studentObj};
        case UPDATE_TUTOR:
            let tutorObj = {
                tutor: payload
            }
            return {...state, tutorObj};
            
        default:
            return state;
    }
}