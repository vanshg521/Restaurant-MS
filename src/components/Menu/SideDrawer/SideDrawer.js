import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
import * as CONSTANT from '../../../utils/constant';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];

    if(props.show) {
        drawerClasses.push('open');
    }
    return (
        <nav className={drawerClasses.join(' ')}>
        
            <h3 className="font-neutral-color">BIG TROUBLE</h3>
            
            <MenuItem location={CONSTANT.MENU_ORIENTATION_VERTICAL} />
            <SettingsMenu />
        </nav>
    );
};

export default sideDrawer;