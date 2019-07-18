import axios from "axios";
import { API_ADDRESS, JWT_TOKEN, USER_ID, USER_ROLE } from '../utils/constant';

export function authenticate(email, password){
    var body = {
        email: email,
        password: password
    }
    return(dispatch)=>{
        axios({
            method: 'post',
            url: API_ADDRESS + 'login',
            data: body,
            config: { headers: {'Content-Type': 'application/json' }}
            }
        ).then(function (response) {
            
            console.log('Authenticated');
            console.log('Auth', response.data);
            sessionStorage.setItem(JWT_TOKEN, response.data.token_type + ' '  + response.data.access_token);
            sessionStorage.setItem(USER_ID, response.data.user_id);
            sessionStorage.setItem(USER_ROLE, response.data.user_role);
            dispatch(userAuthenticated(true));
            //getUser(response.data.access_token);
            console.log(response.data);
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
}
function getUser(token){
    console.log("Role called", token)
    return(dispatch)=>{
        return axios.get(
            API_ADDRESS + 'getUser',
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": token
                }
            }).then(function(response){
            console.log("Role", response)
            dispatch(user(response.data));
            console.log("RoleCall", response.data);
        }).catch((error)=>{
            console.log('Role Error', error);
        });
    };
}

export function userAuthenticated(response){
    return{
        type: JWT_TOKEN,
        payload: response
    }
}

export function user(response){
    return{
        type: USER_ID,
        payload: response
    }
}