import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Settings/Card'
import Footer from '../../components/Footer/Footer';

class Users extends Component {
  render() {
    return (
        <div>
            <Menu />
            <main>
              <center><Card/></center>
            </main>
            <Footer/>
        </div>
    );
  }
}

export default Users;
