import { USER_LIST } from '../utils/constant';

export default function (state = [], action) {    
    switch(action.type){
        case USER_LIST:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}