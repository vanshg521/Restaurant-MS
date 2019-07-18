import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import AccountDetails from '../../components/Account/AccountDetails';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import {getList} from '../../actions/account';
import Footer from '../../components/Footer/Footer';

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
                    <AccountDetails data={this.props.account}></AccountDetails>

                    <br />
                    <Button
                    href="/EditAccount"
                    variant="contained"
                    color="primary"
                  >Edit Profile</Button>
                </center>
            </main>
            <Footer/>
        </div>
       
        
    );
  }
}

const mapStatetoProps=(state)=>{
  return {account: state.account};
}

export default connect(mapStatetoProps,{getList})(Users);
