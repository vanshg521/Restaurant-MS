import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const styles = theme => ({
  
  root: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: '100%',
  },
});

// const fieldsId = {
//   RESERVATION_TEXT: "txtRegistrationName"
// };


function RegistrationNew(props) {
  const { classes } = props;
  return (
        // <div className={classes.root}>
        // <TextField 
        //   id={fieldsId.RESERVATION_TEXT}
        //   label="Name"
        //   type="text"
        //   margin="normal"
        //   align="center"
        //   onChange={props.handleTextChange} />
        //   &nbsp;
        // <TextField 
        //   id={fieldsId.RESERVATION_TEXT}
        //   label="Phone"
        //   type="text"
        //   margin="normal"
        //   align="center"
        //   onChange={props.handleTextChange} />
        //   &nbsp;
        // <TextField 
        //   id={fieldsId.RESERVATION_TEXT}
        //   label="Email"
        //   type="text"
        //   margin="normal"
        //   align="center"
        //   onChange={props.handleTextChange} />
        //   &nbsp;
        // <TextField 
        //   id={fieldsId.RESERVATION_TEXT}
        //   label="Date and Time"
        //   type="text"
        //   margin="normal"
        //   align="center"
        //   onChange={props.handleTextChange} />
        //   &nbsp;
        // <TextField 
        //   id={fieldsId.RESERVATION_TEXT}
        //   label="# of People"
        //   type="text"
        //   margin="normal"
        //   align="center"
        //   onChange={props.handleTextChange} />
        //   &nbsp;
        // <TextField 
        //   id={fieldsId.RESERVATION_TEXT}
        //   label="Note"
        //   type="text"
        //   margin="normal"
        //   align="center"
        //   onChange={props.handleTextChange} />

          <Button variant="contained" color="primary" className={classes.root}
            href="../../Registration" >
              Make New Registration
          </Button>
          // </div>
  );
}

RegistrationNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationNew);
