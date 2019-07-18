import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import AccountEdit from '../../components/Account/AccountEdit';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getList} from '../../actions/account';

class EditAccount extends Component {
  componentDidMount() {
    this.props.getList("","");
  }

  render() {
    return (
        <div>
            <Menu />
            <main>
                <center>
                    <AccountEdit data={this.props.account}></AccountEdit>

                    <br />
                    <Button
                    href="/MyAccount"
                    variant="contained"
                    color="primary"
                  >Save</Button>
                </center>
            </main>
        </div>
    );
  }
}

const mapStatetoProps=(state)=>{
  return {account: state.account};
}

EditAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStatetoProps,{getList})((EditAccount));

