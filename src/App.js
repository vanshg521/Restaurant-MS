import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AnnouncementUser from './pages/Announcement/AnnouncementUser';
import Schedule from './pages/Availability_Schedule/Schedule';
import AnnouncementAdmin from './pages/Announcement/AnnouncementAdmin';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

//Stock
import AdminStock from './pages/Stock/StockAdmin';
import Stock from './pages/Stock/Stock';

//Reservation
import AdminReservation from './pages/Reservation/ReservationAdmin';
// import ReservationEdit from './Reservation/ReservationEdit';
import Reservation from './pages/Reservation/Reservation';

//Schedule
import ScheduleEmpSubmit from './pages/Availability_Schedule/ScheduleEmpSubmit';
import ScheduleManager from './pages/Availability_Schedule/ScheduleManager';

//Announcement
import AnnouncementForm from './components/Announcement/AnnouncementForm';
import UpdateAnnouncement from './components/Announcement/UpdateAnnouncement';
import './style.css';

//User
import Login  from './pages/Others/Login';
import Users from './pages/User/Users';
import MyAccount from './pages/User/MyAccount';
import EditAccount from './pages/User/EditAccount';
import AddAccount from './pages/User/AddAccount';
import UserRegistration from './pages/User/UserRegistration';

//Other
import Settings from './pages/Others/Settings';
import About from './pages/Others/About';
import Availability from './pages/Availability_Schedule/Availability';



export const store = createStore(allReducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    //if(store.auth)
    //{
      return (
        <Provider store={store}>
          <Switch>
              
              {/* Account */}
              <Route exact path="/" component={Login}/>
              <Route path="/myaccount" component={MyAccount}/>
              <Route path="/editaccount" component={EditAccount}/>
              <Route path="/addaccount" component={AddAccount}/>

              {/* Stock */}
              <Route exact path="/admin/stock" component={AdminStock}/>
              <Route exact path="/stock" component={Stock}/>

              {/* Reservation */}
              <Route path="/reservation" component={Reservation}/> 
              <Route exact path="/admin/reservation" component={AdminReservation}/>
              {/* <Route exact path="/admin/ReservationEdit" component={ReservationEdit}/> */}

              {/* Announcements */}
              <Route exact path="/announcement" component={AnnouncementUser}/>
              <Route exact path="/admin/announcement" component={AnnouncementAdmin}/>
              <Route exact path="/admin/createAnnouncement" component={AnnouncementForm}/>
              <Route exact path="/admin/updateAnnouncement" component={UpdateAnnouncement}/>

              {/* Schedule */}
              <Route exact path="/schedule/week" component={Schedule}/>
              <Route path="/schedulemanager" component={ScheduleManager}/>
              <Route path="/scheduleempsubmit" component={ScheduleEmpSubmit}/>

              {/* Availability */}
              <Route path="/availabilities" component={Availability}/>

              {/* User */}
              <Route path="/userreg" component={UserRegistration}/>
              <Route path="/users" component={Users}/>
              
              {/* Other */}
              <Route path="/settings" component={Settings}/>
              <Route path="/about" component={About}/>

          </Switch>
        </Provider>
      )
    /*} else {
      return(
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
          </Provider>
      );
    }*/
  }
}

export default App;
