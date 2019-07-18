import { SCHEDULE_LIST, SCHEDULE_ADD, SCHEDULE_DELETE, SCHEDULE_CLOSE_NOTIFICATION, SCHEDULE_ADD_ERROR, SCHEDULE_CLEAR_WEEK } from '../utils/constant';

const scheduleList = {
        schedules: [],
        error: {},
        success: {
            display: 'false',
            message: ''
        }
};

export default function (state = [], action) {
    switch(action.type){
        case SCHEDULE_LIST:
            return {
                    ...state,
                    scheduleList: 
                        {
                            schedules: action.payload,
                            error: {},
                            success: {
                                display: 'false',
                                message: ''
                            }
                        }
                    };
                    
        case SCHEDULE_ADD:
            return {
                    ...state,
                    scheduleList: 
                        {
                            schedules: [...state.scheduleList.schedules, action.payload],
                            error: {},
                            success: {
                                display: 'true',
                                message: "Schedule Added!"
                            }
                        }
                    };
        case SCHEDULE_ADD_ERROR:
        return {
            ...state,
            scheduleList: 
                {
                    schedules: [...state.scheduleList.schedules],
                    error: action.payload,
                    success: {
                        display: 'false',
                        message: ''
                    }
                }
            };
        case SCHEDULE_CLOSE_NOTIFICATION:
            return {
                ...state,
                scheduleList: 
                    {
                        schedules: [...state.scheduleList.schedules],
                        error: {},
                        success: {
                            display: action.payload,
                            message: ''
                        }
                    }
                };
        case SCHEDULE_DELETE:
                return {
                        ...state,
                        scheduleList: 
                            {
                                schedules: [
                                        ...state.scheduleList.schedules.slice(0, action.payload),
                                        ...state.scheduleList.schedules.slice(action.payload + 1)
                                    ],
                                error: {},
                                success: {
                                    display: 'true',
                                    message: "Schedule Deleted!"
                                }
                            }
                        };
        case SCHEDULE_CLEAR_WEEK:
            return {
                ...state,
                scheduleList:
                    {
                        schedules: action.payload,
                        error: {},
                        success: {
                            display: 'false',
                            message: ''
                        }
                    }
                };
                        
        default:
            return {state, scheduleList}
    }
}