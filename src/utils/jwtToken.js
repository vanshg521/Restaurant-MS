import { JWT_TOKEN, USER_ID, USER_ROLE } from '../utils/constant';

export function getToken(){
    if(sessionStorage[JWT_TOKEN]){
        return sessionStorage[JWT_TOKEN];
    } else {
        return '';
    }
}

export function getUser(){
    if(sessionStorage[USER_ID]){
        return sessionStorage[USER_ID];
    } else {
        return '';
    }
}

export function getRole(){
    if(sessionStorage[USER_ROLE]){
        return sessionStorage[USER_ROLE];
    } else {
        return '';
    }
}