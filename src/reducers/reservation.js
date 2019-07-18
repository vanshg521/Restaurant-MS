import { 
        RESERVATION_FORM, 
        RESERVATION_LIST,
        RESERVATION_ADD_ERROR,
        RESERVATION_VALIDADE_SUCCESS,
        RESERVATION_ADD,
        RESERVATION_EDIT,
        RESERVATION_DELETE,
        RESERVATION_CLOSE_NOTIFICATION
     } from '../utils/constant';

const reservationList = {
    step: 0,
    reservations: [],
    error: {},
    success: {
        display: 'false',
        message: ''
    }
};

export default function (state = [], action) {
    switch(action.type){
        case RESERVATION_FORM:
            reservationList.reservations = state.reservationList.reservations;
            reservationList.current = state.reservationList.current;
            return {...action.payload, reservationList};
        case RESERVATION_LIST:
            return {
                    ...state,
                    reservationList: {
                        step: 0,
                        reservations: action.payload,
                        error: {},
                        success: {
                            display: 'false',
                            message: ''
                        }
                    }
                };
        case RESERVATION_VALIDADE_SUCCESS:
            console.log('reducer validate success',state.reservationList);
            return {
                    ...state,
                    reservationList: {
                        step: 1,
                        reservations: state.reservationList.reservations,
                        current: state.reservationList.current,
                        error: {},
                        success: {
                            display: 'false',
                            message: ''
                        }
                    }
                };
        case RESERVATION_ADD_ERROR:
            return {
                ...state,
                reservationList: 
                    {
                        step: 0,
                        reservations: [],
                        error: action.payload,
                        current: state.reservationList.current,
                        success: {
                            display: 'false',
                            message: ''
                        }
                    }
                };
        case RESERVATION_ADD :
            return {
                ...state,
                reservationList: 
                    {
                        step: 2,
                        reservations: [],
                        error: {},
                        success: {
                            display: 'true',
                            message: 'Reservation Confirmed!'
                        }
                    }
                };
        case RESERVATION_EDIT:
            return {
                ...state,
                reservationList: 
                    {
                        step: 0,
                        reservations: [...state.reservationList.reservations],
                        current: action.payload,
                        error: {},
                        success: {
                            display: 'false',
                            message: ''
                        }
                    }
            }
        case RESERVATION_DELETE:
            return {
                    ...state,
                    reservationList: 
                        {
                            reservations: [
                                    ...state.reservationList.reservations.slice(0, action.payload),
                                    ...state.reservationList.reservations.slice(action.payload + 1)
                                ],
                            error: {},
                            success: {
                                display: 'true',
                                message: "Reservation Deleted!"
                            }
                        }
                    };
        case RESERVATION_CLOSE_NOTIFICATION:
            return {
            ...state,
            reservationList: 
                {
                    step: 0,
                    reservations: [...state.reservationList.reservations],
                    error: {},
                    success: {
                        display: 'false',
                        message: ''
                    }
                }
            }
        default:
            return {state, reservationList};
    }
}