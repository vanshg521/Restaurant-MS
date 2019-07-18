import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, TableRow } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class FilledTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TableRow> 
            <TableCell align="left">
              <TextField
                id="add-new-user"
                label="New User Name"
                className={classes.textField}
                type="text"
                name="newItem"
                margin="normal"
                variant="filled" /></TableCell>
            <TableCell align="right">
            <Button
                    href="/Users"
                    variant="contained"
                    color="primary"
                  >Add New User</Button>
            </TableCell>
        </TableRow>
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);
