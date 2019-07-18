import {combineReducers} from 'redux';
import authReducer from './auth';
import products from './product';
import users from './user';
import account from './account';
import reservation from './reservation';
import announcements from './announcement';
import schedules from './schedule';
import availabilitys from './availability';

const allReducers = combineReducers({
    auth: authReducer,
    products: products,
    users: users,
    account: account,
    reservation: reservation,
    announcements: announcements,
    schedules: schedules,
    availabilitys: availabilitys
});

export default allReducers;