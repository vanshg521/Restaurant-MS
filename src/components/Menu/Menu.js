import React, { Component } from 'react';
import '../../App.css';
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';



class Menu extends Component {
  state = {
    isSideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {isSideDrawerOpen: !prevState.isSideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({isSideDrawerOpen: false});
  };
 
  render() {
    let backdrop;

    if(this.state.isSideDrawerOpen){
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
        <div>
            <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
            <SideDrawer className="sideDrawer" show={this.state.isSideDrawerOpen}/>
            {backdrop}
        </div>
    );
  }
}

export default Menu;
