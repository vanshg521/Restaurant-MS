import axios from "axios";
import {getToken} from '../utils/jwtToken'
import { 
        API_ADDRESS, 
        RESERVATION_LIST,
        RESERVATION_ADD_ERROR,
        RESERVATION_VALIDADE_SUCCESS,
        RESERVATION_ADD,
        RESERVATION_EDIT,
        RESERVATION_DELETE,
        RESERVATION_CLOSE_NOTIFICATION
    } from '../utils/constant';

export function getList(date){
    return(dispatch)=>{
        return axios.get(
            API_ADDRESS + 'reservations/' + date,
            { headers: 
                { 
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('listing', data.data);
                dispatch(addToStore(RESERVATION_LIST, data.data));
        }).catch((error)=>{
            console.log('error comming',error);
        });
    };
}


export function updateReservation(id, name, phone, email, datetime, quantity, note) {
    if(email === null || (email !== undefined && email.length === 0))
        email = undefined;

        
    if(note === null || (note !== undefined && note.length === 0))
        note = undefined;

    var body = {
        id: id,
        name: name,
        phone: phone,
        email: email,
        datetime: datetime, 
        quantity: quantity,
        note: note
    }

    console.log('Update reservation', API_ADDRESS + 'reservations/'+id);
    return(dispatch)=>{
        return axios.put(
            API_ADDRESS + 'reservations/'+id,
            body,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Updated',data);
        }).catch((error)=>{
            console.log('error comming',error);
        });
    }
}

export function addReservation(name, phone, email, datetime, quantity, note) {
    if(email === null || (email !== undefined && email.length === 0))
        email = undefined;

        
    if(note === null || (note !== undefined && note.length === 0))
        note = undefined;

    var body = {
        name: name,
        phone: phone,
        email: email,
        datetime: datetime, 
        quantity: quantity,
        note: note
    }
    return(dispatch)=>{
        return axios.post(
            API_ADDRESS + 'reservations',
            body,
            { headers: 
                { 
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Added',data);
                dispatch(addToStore(RESERVATION_ADD, data.data));
        }).catch((error)=>{
            console.log(error.response);

            if(error.response.status === 400){
                console.log(JSON.parse(error.response.data));
                dispatch(addToStore(RESERVATION_ADD_ERROR, JSON.parse(error.response.data)));
            }
        });
    }
}

export function validate(name, phone, email, datetime, quantity, note) {
    if(email === null || (email !== undefined && email.length === 0))
       email = undefined;

       
    if(note === null || (note !== undefined && note.length === 0))
        note = undefined;

    var body = {
        name: name,
        phone: phone,
        email: email,
        datetime: datetime, 
        quantity: quantity,
        note: note
    }
    return(dispatch)=>{
        return axios.post(
            API_ADDRESS + 'reservations/validate',
            body,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Validate',data);
                dispatch(addToStore(RESERVATION_VALIDADE_SUCCESS, data.data));
        }).catch((error)=>{
            console.log(error.response);

            if(error.response.status === 400){
                console.log(JSON.parse(error.response.data));
                dispatch(addToStore(RESERVATION_ADD_ERROR, JSON.parse(error.response.data)));
            }
        });
    }
}

export function editReservation(index){
    return(dispatch) => {
        dispatch(addToStore(RESERVATION_EDIT, index));
    }
}


export function deleteReservation(id, index){
    return(dispatch)=>{
        return axios.delete(
            API_ADDRESS + 'reservations/'+id,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Delete',data);
                dispatch(addToStore(RESERVATION_DELETE , index));
        }).catch((error)=>{
            console.log('error comming',error);
        });
    }
}

export function closeNotification() {
    return(dispatch)=>{
        dispatch(addToStore(RESERVATION_CLOSE_NOTIFICATION , "false"));
    }
}


export function addToStore(typeStore ,response){
    return {
        type: typeStore,
        payload: response
    }
}
