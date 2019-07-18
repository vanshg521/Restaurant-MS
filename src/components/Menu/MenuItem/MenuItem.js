import React from 'react';
import * as CONSTANT from '../../../utils/constant';
import {getRole} from '../../../utils/jwtToken'

import './MenuItem.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBIcon} from 'mdbreact';

const menuItem = ({location}) => {
    let menuClass = ['font-neutral-color'];
    if(location === CONSTANT.MENU_ORIENTATION_HORIZONTAL)
    {
        menuClass.push('options-menu-horizontal');
        return (
            <ul className={menuClass.join(' ')}>
                <li><a href="/myaccount"><div className="childIcon"><MDBIcon icon="user-alt" /></div></a></li>
                <li><a href="/myaccount">My Account</a></li>
            </ul>
        );
    } else {
        menuClass.push('options-menu-vertical');
        console.log("Role", getRole())
        if(getRole() == 1){
        return (
           
            <ul className={menuClass.join(' ')}>
                <li>
                        <a href="/schedule/week" className="shadow-box-example hoverable">
                            <div className="Icon"><MDBIcon far icon="calendar-alt" /></div>
                            <span>Schedule</span>
                            <div className="spacer"/>
                        </a>
                   <ul className="sub-menu">
                            <li>
                                <a href="/scheduleempsubmit" className="shadow-box-example hoverable">
                                    <div className="childIcon"><MDBIcon icon="pencil-alt" /></div>
                                    Input Availability
                                </a>
                            </li>
                        </ul>
                    <ul className="sub-menu">
                           <li>
                               <a href="/availabilities" className="shadow-box-example hoverable">
                                <div className="childIcon">
                                    <MDBIcon icon="pencil-alt" />
                                </div>Create Schedule
                               </a>
                            </li>
                        </ul>
                </li>
                <li>
                    <a href="/stock" className="shadow-box-example hoverable">
                        <div className="childIcon">
                            <MDBIcon icon="cart-plus" />
                        </div>
                            <span>Stocks</span>
                        <div className="spacer"/>
                    </a>
                    <ul className="sub-menu">
                        <li className="shadow-box-example hoverable">
                            <a href="/admin/stock" >
                                <div className="childIcon">
                                    <MDBIcon icon="pencil-alt" />
                                </div>Edit/Add/Delete
                            </a>
                        </li>
                    </ul>
                </li> 
                <li>
                    <a href="/announcement" className="shadow-box-example hoverable">
                    <div className="childIcon"><MDBIcon icon="bullhorn" /></div>
                        <span>Announcements</span>
                        <div className="spacer"/>
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <a href="/admin/announcement" className="shadow-box-example hoverable">
                                <div className="childIcon">
                                    <MDBIcon icon="pencil-alt" />
                                </div>Edit/Add/Delete
                            </a>
                       </li>
                    </ul>
                        </li> 
                    <li>
                    <a href="/reservation" className="shadow-box-example hoverable">
                    <div className="childIcon"><MDBIcon far icon="list-alt" /></div>
                        <span>Reservations</span>
                        <div className="spacer"/>
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <a href="/admin/reservation" className="shadow-box-example hoverable">
                                <div className="childIcon">
                                    <MDBIcon icon="pencil-alt" />
                                </div>Edit/Add/Delete
                            </a>
                        </li>
                    </ul>
                </li> <li>
                    <a href="/users" className="shadow-box-example hoverable">
                    <div className="childIcon"><MDBIcon icon="users" /></div>
                        <span>All Users</span>
                        <div className="spacer"/>
                    </a>
                    {/* <ul className="sub-menu">
                        <li><a href="/editaccount"><FontAwesomeIcon icon="pen"/>reservation</a></li>
                    </ul> */}
                </li>                
            </ul>
           
        );
    }else{
        return (
            <ul className={menuClass.join(' ')}>
                <li>
                    <a href="/schedule/week">
                    <div className="Icon"><MDBIcon far icon="calendar-alt" /></div>
                        <span>Schedule</span>
                        <div className="spacer"/>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="/scheduleempsubmit"> <div className="childIcon"><MDBIcon icon="pencil-alt" /></div>Input Availability</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/stock">
                    <div className="childIcon">
                            <MDBIcon icon="cart-plus" />
                        </div>
                        <span>Stocks</span>
                        <div className="spacer"/>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="/admin/stock"> <div className="childIcon"><MDBIcon icon="pencil-alt" /></div>Edit/Add/Delete</a></li>
                    </ul>
                </li> <li>
                    <a href="/announcement">
                    <div className="childIcon"><MDBIcon icon="bullhorn" /></div>
                        <span>Announcements</span>
                        <div className="spacer"/>
                    </a>
                </li> <li>
                    <a href="/reservation">
                    <div className="childIcon"><MDBIcon far icon="list-alt" /></div>
                        <span>Reservations</span>
                        <div className="spacer"/>
                    </a>
                    <ul className="sub-menu">
                        <li><a href="/admin/reservation"> <div className="childIcon"><MDBIcon icon="pencil-alt" /></div>Edit/Add/Delete</a></li>
                    </ul>
                </li>              
            </ul>
        );
               
    }
    }
};


export default menuItem;