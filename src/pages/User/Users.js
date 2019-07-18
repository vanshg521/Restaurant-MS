import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import UserAccounts from '../../components/UserList/UserAccounts';
import {connect} from 'react-redux';
import {getList} from '../../actions/user';
import Button from "@material-ui/core/Button";
import Footer from '../../components/Footer/Footer';

class Users extends Component {
    componentDidMount() {
      this.props.getList("","");
    }

    handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };

    state = {
      open: false,
    };

  render() {
    
    return (
        <div>
            <Menu />
            <main>
              
                <h2>Staff</h2>
                  <UserAccounts data={this.props.users}></UserAccounts>
                  <br/>
                  <Button
                    href="/AddAccount"
                    variant="contained"
                    color="primary">Add New User</Button>
              
            </main>
            <Footer/>
        </div>
    );
  }
}

const mapStatetoProps=(state)=>{
  return {users: state.users};
}

export default connect(mapStatetoProps,{getList})(Users);
