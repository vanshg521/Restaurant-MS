import { AVAILABILITY_LIST, AVAILABILITY_LIST_CURRENT, AVAILABILITY_ADD, AVAILABILITY_DELETE, AVAILABILITY_CLOSE_NOTIFICATION, AVAILABILITY_ADD_ERROR } from '../utils/constant';

const availabilityList = {
        availabilitys: [],
        availabilitysCurrent: [],
        error: {},
        success: {
            display: 'false',
            message: ''
        }
};

export default function (state = [], action) {
    switch(action.type){
        case AVAILABILITY_LIST:
            return {
                    ...state,
                    availabilityList: 
                        {
                            availabilitys: action.payload,
                            error: {},
                            success: {
                                display: 'false',
                                message: ''
                            }
                        }
                    };
        case AVAILABILITY_LIST_CURRENT:
            return {
                    ...state,
                    availabilityList: 
                        {
                            availabilitysCurrent: action.payload,
                            error: {},
                            success: {
                                display: 'false',
                                message: ''
                            }
                        }
                    };
                    
        case AVAILABILITY_ADD:
            return {
                    ...state,
                    availabilityList: 
                        {
                            availabilitys: [...state.availabilityList.availabilitys, action.payload],
                            error: {},
                            success: {
                                display: 'true',
                                message: "Availability Added!"
                            }
                        }
                    };
        case AVAILABILITY_ADD_ERROR:
        return {
            ...state,
            availabilityList: 
                {
                    availabilitys: [...state.availabilityList.availabilitys],
                    error: action.payload,
                    success: {
                        display: 'false',
                        message: ''
                    }
                }
            };
        case AVAILABILITY_CLOSE_NOTIFICATION:
            return {
                ...state,
                availabilityList: 
                    {
                        availabilitys: [...state.availabilityList.availabilitys],
                        error: {},
                        success: {
                            display: action.payload,
                            message: ''
                        }
                    }
                };
        case AVAILABILITY_DELETE:
                return {
                        ...state,
                        availabilityList: 
                            {
                                availabilitys: [
                                        ...state.availabilityList.availabilitys.slice(0, action.payload),
                                        ...state.availabilityList.availabilitys.slice(action.payload + 1)
                                    ],
                                error: {},
                                success: {
                                    display: 'true',
                                    message: "Availability Deleted!"
                                }
                            }
                        };
                        
        default:
            if(typeof state.availabilityList !== 'undefined')
                availabilityList.availabilitys = state.availabilityList.availabilitys;
                
            return {state, availabilityList}
    }
}