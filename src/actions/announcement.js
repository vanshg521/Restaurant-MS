import axios from "axios";
import {getToken, getUser} from '../utils/jwtToken'
import { API_ADDRESS, ANNOUNCEMENT_LIST, ANNOUNCEMENT_ADD, ANNOUNCEMENT_ADD_ERROR, ANNOUNCEMENT_CLOSE_NOTIFICATION, ANNOUNCEMENT_DELETE } from '../utils/constant';

export function getList(){
    console.log("APICall")
    return(dispatch)=>{
        return axios.get(
            API_ADDRESS + 'announcements',
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                
            dispatch(addToStore(ANNOUNCEMENT_LIST, data.data));
            console.log(data);
        }).catch((error)=>{
            console.log('error comming',error);
        });
    };
}



export function updateAnnouncement(id, message){
    var body = {
        id: id,
        message: message
    }
    return(dispatch)=>{
        return axios.put(
            API_ADDRESS + 'announcement/'+id,
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

export function addAnnouncement(announcementTitle, announcementMessage, announcementCategory) {
    console.log("API-ADD")
    announcementCategory = (announcementCategory == null) ? 1 : announcementCategory;
    var body =  {
        user: getUser(),
        title: announcementTitle,
        message: announcementMessage,
        category: parseInt(announcementCategory),
        requiresAcknowledge : 0
    }
    console.log(body);
    return(dispatch)=>{
        return axios.post(
            API_ADDRESS + 'announcements',
            body,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                dispatch(addToStore(ANNOUNCEMENT_ADD ,data.data));
        }).catch((error)=>{
            dispatch(addToStore(ANNOUNCEMENT_ADD_ERROR, JSON.parse(error)));
            console.log(error.response.data);
        });
    }
}

export function closeNotification() {
    return(dispatch)=>{
        dispatch(addToStore(ANNOUNCEMENT_CLOSE_NOTIFICATION , "false"));
    }
}

export function deleteAnnouncement(id, index){
    return(dispatch)=>{
        return axios.delete(
            API_ADDRESS + 'announcements/'+id,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Delete',data);
                dispatch(addToStore(ANNOUNCEMENT_DELETE , index));
        }).catch((error)=>{
            console.log('error comming',error);
        });
    }
}



export function addToStore(typeStore ,response){
    return {
        type: typeStore,
        payload: response
    }
}