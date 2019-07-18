import { ANNOUNCEMENT_LIST, ANNOUNCEMENT_ADD, ANNOUNCEMENT_DELETE, ANNOUNCEMENT_CLOSE_NOTIFICATION, ANNOUNCEMENT_ADD_ERROR } from '../utils/constant';

const announcementList = {
        announcements: [],
        error: {},
        success: {
            display: 'false',
            message: ''
        }
};

export default function (state = [], action) {
    switch(action.type){
        case ANNOUNCEMENT_LIST:
            return {
                    ...state,
                    announcementList: 
                        {
                            announcements: action.payload,
                            error: {},
                            success: {
                                display: 'false',
                                message: ''
                            }
                        }
                    };
                    
        case ANNOUNCEMENT_ADD:
            return {
                    ...state,
                    announcementList: 
                        {
                            announcements: [...state.announcementList.announcements, action.payload],
                            error: {},
                            success: {
                                display: 'true',
                                message: "Announcement Added!"
                            }
                        }
                    };
        case ANNOUNCEMENT_ADD_ERROR:
        return {
            ...state,
            announcementList: 
                {
                    announcements: [...state.announcementList.announcements],
                    error: action.payload,
                    success: {
                        display: 'false',
                        message: ''
                    }
                }
            };
        case ANNOUNCEMENT_CLOSE_NOTIFICATION:
            return {
                ...state,
                announcementList: 
                    {
                        announcements: [...state.announcementList.announcements],
                        error: {},
                        success: {
                            display: action.payload,
                            message: ''
                        }
                    }
                };
        case ANNOUNCEMENT_DELETE:
                return {
                        ...state,
                        announcementList: 
                            {
                                announcements: [
                                        ...state.announcementList.announcements.slice(0, action.payload),
                                        ...state.announcementList.announcements.slice(action.payload + 1)
                                    ],
                                error: {},
                                success: {
                                    display: 'true',
                                    message: "Announcement Deleted!"
                                }
                            }
                        };
                        
        default:
            return {state, announcementList}
    }
}