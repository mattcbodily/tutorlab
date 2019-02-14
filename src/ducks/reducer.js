const initialState = {
    student: {
        id: 0,
        email: ''
    },
    tutor: {
        id: 0,
        email: ''
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
            const {id, email} = payload;
            const student = {id, email};
            return {...state, student};
        // case UPDATE_TUTOR:
        //     const {id, email} = payload;
        //     const tutor = {id, email};
        //     return {...state, tutor};
        default:
            return state;
    }
}