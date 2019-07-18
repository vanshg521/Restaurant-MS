import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import './SettingsMenu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {MDBIcon} from 'mdbreact';

const settingsMenu = props => {
    
    let menuClass = ['font-neutral-color'];

    library.add();

    menuClass.push('settings-menu-vertical');
    return (
    <ul className={menuClass.join(' ')}>
        <li>
            <a href="/myaccount" className="shadow-box-example hoverable">
            <div className="Icon"><MDBIcon icon="user-alt" /></div>
            <span>My Account</span> 
            </a>
        </li>
        <li>
            <a href="/settings" className="shadow-box-example hoverable">
            <div className="Icon"><MDBIcon icon="cog" /></div>
            <span>Settings</span> 
            </a>
        </li>
        <li>
            <a href="/about" className="shadow-box-example hoverable">
            <div className="Icon"><MDBIcon icon="info-circle" /></div>
            <span>About</span> 
            </a>
        </li>
    </ul>
    );
};

export default settingsMenu;