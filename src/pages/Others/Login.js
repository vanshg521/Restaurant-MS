import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import TextField from "@material-ui/core/TextField";

import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import * as actionCreators from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import {getToken} from '../../utils/jwtToken'


const styles = theme => ({
    formControl: {
      marginTop: theme.spacing.unit ,
      borderRadius: 0,
    },
    inputLogin: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 0,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&.focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  });

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthenticated = getToken() !== 'true';
 }

  componentDidMount() {
    
    document.body.classList.add("login");
  }

  componentWillUnmount() {
    document.body.classList.remove("login");
  }

  handleChange = event => {
    const {id, value} = event.target;
    this.setState({ [id]: value });
  };

  handleClick = event => {
    this.props.authenticate(this.state.txtEmail, this.state.txtPassword);
    this.forceUpdate();
  };

  render() {
  const { classes } = this.props;
  
  if(this.props.auth.isAuth) {
    return <Redirect to='/announcement'/>;
  } else {
    return(
    <main>
        <div className="logo">
          <h1>BIG<br/>TROUBLE<br/>BAR</h1>
        </div>
            <TextField 
              id="txtEmail" 
              variant="filled" 
              margin="dense"
              label="Login"
              onChange={this.handleChange} 
              classes={{
                root: classes.inputLogin,
              }}
            />
            <TextField 
              id="txtPassword" 
              variant="filled" 
              margin="dense"
              label="Password"
              type="password"
              onChange={this.handleChange} 
              classes={{
                root: classes.inputLogin,
              }}
            />

        <Button
            variant="contained"
            color="primary"
            className={classes.formControl}
            onClick={this.handleClick}
        >Log In</Button>
    </main>
    )
  }
  };
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps=(state)=>{
    return {auth: state.auth}
};

export default withStyles(styles)(connect(mapStateToProps,actionCreators)(Login));