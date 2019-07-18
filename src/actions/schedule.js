import axios from "axios";
import {getToken} from '../utils/jwtToken'
import { API_ADDRESS, SCHEDULE_LIST, SCHEDULE_ADD_ERROR, SCHEDULE_CLOSE_NOTIFICATION, SCHEDULE_DELETE } from '../utils/constant';

export function getList(){
    //console.log("APICall")
    return(dispatch)=>{
        return axios.get(
            //API_ADDRESS + 'schedules/week/' + getMonday(),
            API_ADDRESS + 'scheduleFull/' + getMonday(),
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                
            dispatch(addToStore(SCHEDULE_LIST, data.data));
            //console.log(data);
        }).catch((error)=>{
            //console.log('error comming',error);
        });
    };
}

function getMonday() {
    //Need to check start/end of month.
    var d = new Date();
    //console.log(d);
    var day = d.getDay();
    var m = d.getMonth() + 1;
    //console.log(m);
    m = ( m < 10 ? ("0" + m) : m);
    var y = d.getFullYear();
    var diff = d.getDate() - day + (day === 0 ? -6 : 1);
    //console.log(diff);
    //console.log(y + "-" + m + "-" + diff);
    return (y + "-" + m + "-" + diff);
}

function getWeekDate(day, date){
    var dat = new Date(date);
    //dat.setDate(dat.getDate() + 1);
    console.log('dat', dat);
    var d = dat.getDate();
    var m = dat.getMonth() + 1;
    //console.log("m", m);
    m = ( m < 10 ? ("0" + m) : m);
    var y = dat.getFullYear();
    //var monday = d.getDate() - day + (day === 0 ? -6 : 1);
    //console.log(diff);
    //console.log(y + "-" + m + "-" + d);
    var newDate = new Date(y + "/" + m + "/" + d);
    //console.log("day", day)
    //console.log("newDate", newDate);
    switch(day){
        case 'Tue':
            newDate.setDate(newDate.getDate() + 1);
            break;
        case 'Wed':
            newDate.setDate(newDate.getDate() + 2);
            break;
        case 'Thu':
            newDate.setDate(newDate.getDate() + 3);
            break;
        case 'Fri':
            newDate.setDate(newDate.getDate() + 4);
            break;
        case 'Sat':
            newDate.setDate(newDate.getDate() + 5);
            break;
        case 'Sun':
            newDate.setDate(newDate.getDate() + 6);
            break;
        default:
            break;
    }
    //console.log(newDate);
    var newday = newDate.getDate();
    var newm = newDate.getMonth() + 1;
    newm = ( newm < 10 ? ("0" + newm) : newm);
    var newy = newDate.getFullYear();
    console.log(newy + "-" + newm + "-" + newday);
    return (newy + "-" + newm + "-" + newday);
}


export function updateSchedule(id, message){
    var body = {
        id: id,
        message: message
    }
    return(dispatch)=>{
        return axios.put(
            API_ADDRESS + 'schedules/'+id,
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

export function addSchedule(user_id, day, user_start, user_end) {
    var dt = getMonday();
    console.log("API Schedule ADD")
    //console.log(user_start);
    //console.log(user_end);
    var dt = getWeekDate(day, dt);
    //console.log("dt", dt);
    var body =  {
        user: user_id,
        date: dt,
        startShift: (dt + " " + user_start) ,
        endShift: (dt + " " + user_end),
        acknowledge: '0',
    }
    //console.log(body);
    return(dispatch)=>{
        return axios.post(
            API_ADDRESS + 'schedules',
            body,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": getToken(),
                }
            }).then((data)=>{
                //dispatch(addToStore(SCHEDULE_ADD ,data.data));
        }).catch((error)=>{
            console.log(error);
            //dispatch(addToStore(SCHEDULE_ADD_ERROR, JSON.parse(error)));
        });
    }
}

export function closeNotification() {
    return(dispatch)=>{
        dispatch(addToStore(SCHEDULE_CLOSE_NOTIFICATION , "false"));
    }
}

export function deleteSchedule(id, index){
    return(dispatch)=>{
        return axios.delete(
            API_ADDRESS + 'schedules/'+id,
            { headers: 
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": getToken(),
                    
                }
            }).then((data)=>{
                console.log('Delete',data);
                dispatch(addToStore(SCHEDULE_DELETE , index));
        }).catch((error)=>{
            console.log('error comming',error);
        });
    }
}

export function clearSchedule(){
    //console.log("APICall-ClearSchedule")
    
    var monday = getMonday();
    console.log("monday", monday);
    return(dispatch)=>{
        return axios.get(
            //API_ADDRESS + 'schedules/week/' + getMonday(),
            API_ADDRESS + 'schedules/clearWeek/' + monday,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                
                //console.log("dataClear", data);
                //dispatch(addToStore(SCHEDULE_CLEAR_WEEK, data.data));
                //console.log(data);
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