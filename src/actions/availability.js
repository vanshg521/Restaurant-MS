import axios from "axios";
import {getUser, getToken} from '../utils/jwtToken'
//import {getUser} from '../actions/auth'
import { API_ADDRESS, AVAILABILITY_LIST, AVAILABILITY_LIST_CURRENT, AVAILABILITY_CLOSE_NOTIFICATION, AVAILABILITY_CLEAR_WEEK, AVAILABILITY_DELETE } from '../utils/constant';

export function getList(){
    console.log("APICall")
    return(dispatch)=>{
        return axios.get(
            //API_ADDRESS + 'availabilities/week/' + getMonday(),
            API_ADDRESS + 'availabilitiesFull/' + getMonday(),
            //API_ADDRESS + 'availabilitiesFull/2019-03-18',
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                
            dispatch(addToStore(AVAILABILITY_LIST, data.data));
            console.log("API Availability");
            console.log(data);
        }).catch((error)=>{
            console.log('error comming',error);
        });
    };
}

export function getCurrent(){
    console.log("APICallCurrent")
    var user = getUser();
    console.log(user);
    return(dispatch)=>{
        return axios.get(
            //API_ADDRESS + 'availabilities/week/' + getMonday(),
            API_ADDRESS + 'availabilities/current/' + getMonday() + '/' + user,
            //API_ADDRESS + 'availabilitiesFull/2019-03-18',
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                
            dispatch(addToStore(AVAILABILITY_LIST_CURRENT, data.data));
            console.log("API Current");
            console.log(data);
        }).catch((error)=>{
            console.log('error comming',error);
        });
    };
}

function getMonday() {
    //Need to check start/end of month.
    var d = new Date();
    console.log(d);
    var day = d.getDay();
    var m = d.getMonth() + 1;
    console.log(m);
    m = ( m < 10 ? ("0" + m) : m);
    var y = d.getFullYear();
    var diff = d.getDate() - day + (day === 0 ? -6 : 1);
    console.log(diff);
    console.log(y + "-" + m + "-" + diff);
    return (y + "-" + m + "-" + diff);
}


export function updateAvailability(id, message){
    var body = {
        id: id,
        message: message
    }
    return(dispatch)=>{
        return axios.put(
            API_ADDRESS + 'availabilities/'+id,
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

export function addAvailability(date, availabilityStart, availabilityEnd) {
    var body =  {
        user: getUser(),
        date: date,
        initTime: availabilityStart,
        endTime: availabilityEnd
    }
    console.log(body);
    return(dispatch)=>{
        return axios.post(
            API_ADDRESS + 'availabilities',
            body,
            { headers: 
                { 
                    "Content-Type": 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log("API-Added", data);
                //dispatch(addToStore(AVAILABILITY_ADD ,data.data));
        }).catch((error)=>{
            console.log("API-AddedError", error);
            //dispatch(addToStore(AVAILABILITY_ADD_ERROR, JSON.parse(error.response.data)));
        });
    }
}

export function closeNotification() {
    return(dispatch)=>{
        dispatch(addToStore(AVAILABILITY_CLOSE_NOTIFICATION , "false"));
    }
}

export function deleteAvailability(id, index){
    return(dispatch)=>{
        return axios.delete(
            API_ADDRESS + 'availabilities/'+id,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Delete',data);
                dispatch(addToStore(AVAILABILITY_DELETE , index));
        }).catch((error)=>{
            console.log('error comming',error);
        });
    }
}

export function clearAvailability(){
    console.log("APICall-ClearSchedule")
    
    var monday = getMonday();
    console.log("monday", monday);
    var user = getUser();
    return(dispatch)=>{
        return axios.get(
            //API_ADDRESS + 'schedules/week/' + getMonday(),
            API_ADDRESS + 'availabilities/clearWeek/' + monday + '/' + user,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                
                //console.log("dataClear", data);
                dispatch(addToStore(AVAILABILITY_CLEAR_WEEK, data.data));
                console.log("DataClear:", data);
        }).catch((error)=>{
            console.log('error comming',error);
        });
    };
}



export function addToStore(typeStore ,response){
    return {
        type: typeStore,
        payload: response
    }
}