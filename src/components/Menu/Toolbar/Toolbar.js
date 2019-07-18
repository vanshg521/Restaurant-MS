import React from 'react';

import * as CONSTANT from '../../../utils/constant';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import MenuItem from '../MenuItem/MenuItem';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar fixed-top">
        <nav className="toolbar__navigation navbar-fixed-top" >
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo font-neutral-color">
                <h3><a href="/">BIG TROUBLE</a></h3>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <MenuItem location={CONSTANT.MENU_ORIENTATION_HORIZONTAL} />
            </div>
        </nav>
    </header>
);

export default toolbar;