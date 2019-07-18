import axios from "axios";
import {getToken} from '../utils/jwtToken'
import { API_ADDRESS, PRODUCT_LIST, PRODUCT_ADD, PRODUCT_ADD_ERROR, PRODUCT_CLOSE_NOTIFICATION,PRODUCT_DELETE } from '../utils/constant';

export function getList(){
    return(dispatch)=>{
        return axios.get(
            API_ADDRESS + 'products',
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
            dispatch(addToStore(PRODUCT_LIST ,data.data));
        }).catch((error)=>{
            console.log('error comming',error);
        });
    };
}



export function updateProduct(id, qty){
    var body = {
        id: id,
        qty: qty
    }
    return(dispatch)=>{
        return axios.put(
            API_ADDRESS + 'products/'+id,
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

export function addProduct(productName) {
    var body =  {
        name: productName
    }
    return(dispatch)=>{
        return axios.post(
            API_ADDRESS + 'products',
            body,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Added',data.data);
                dispatch(addToStore(PRODUCT_ADD ,data.data));
        }).catch((error)=>{
            console.log(error);
            dispatch(addToStore(PRODUCT_ADD_ERROR, JSON.parse(error.response.data)));
        });
    }
}

export function closeNotification() {
    return(dispatch)=>{
        dispatch(addToStore(PRODUCT_CLOSE_NOTIFICATION , "false"));
    }
}

export function deleteProduct(id, index){
    return(dispatch)=>{
        return axios.delete(
            API_ADDRESS + 'products/'+id,
            { headers: 
                { 
                    'Content-Type': 'application/json',
                    "Authorization": getToken()
                }
            }).then((data)=>{
                console.log('Delete',data);
                dispatch(addToStore(PRODUCT_DELETE , index));
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