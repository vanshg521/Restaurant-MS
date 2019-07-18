import { ACCOUNT_LIST } from '../utils/constant';

export default function (state = [], action) {    
    switch(action.type){
        case ACCOUNT_LIST:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}