import { JWT_TOKEN, USER_ID, USER_ROLE } from '../utils/constant';


export default function (state = [], action) {    
    switch(action.type){
        case JWT_TOKEN:
            return {...state, isAuth: action.payload, role: false};
        case USER_ID:
            return {...state, isAuth: state.isAuth, user_id: action.payload};
        case USER_ROLE:
            return {...state, isAuth: state.isAuth, role: action.payload};
        default:
            return {...state, isAuth: false, role:false};
    }
}