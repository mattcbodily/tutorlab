const initialState = {
    id: 0,
    email: ''
}

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            const {id, email} = payload;
            return {...state, id, email}
        default:
            return state;
    }
}