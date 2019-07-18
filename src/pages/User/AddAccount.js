import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import AccountAdd from '../../components/Account/AccountAdd';
import Button from '@material-ui/core/Button';

class Users extends Component {
  componentDidMount() {
    this.props.getList("","");
  }
  render() {
    return (
        <div>
            <Menu />
            <main>
                <center>
                    <AccountAdd></AccountAdd>
                    <br />
                    <Button
                    href="/Users"
                    variant="contained"
                    color="primary"
                  >Create Account</Button>
                </center>
            </main>
        </div>
    );
  }
}

export default Users;
