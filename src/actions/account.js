import axios from "axios";
import { API_ADDRESS, ACCOUNT_LIST } from '../utils/constant';

export function getList(token_type,token){
    return(dispatch)=>{
        axios({
            method: 'get',
            url: API_ADDRESS + 'account/1',
            config: { 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token_type + ' ' + token
                }
            }
        }).then(function (response) {
            //handle success
            dispatch(userAuthenticated(response.data));
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
}

export function userAuthenticated(response){
    return{
        type: ACCOUNT_LIST,
        payload: response
    }
}