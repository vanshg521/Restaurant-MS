import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const dummyRegistration = [ {
    name: 'Dummy Data',
    phone: '4168791243',
    email: 'dummy@data.org',
    datetime: '12-21-1990 23:00', 
    quantity: 3,
    note: 'Dummy notes', 
    user: 'Dummy User Name', 
    archive: '',
    created_at: '12-21-1990 23:00',
    updated_at: '12-21-1990 23:00'
  }
];

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  qty: {
    width: "auto",
  },
  button: {
    width: 100
  },
};

function RegistrationTable(props) {
  const { classes } = props;
  
  return (
    <Paper className={classes.root}>
      <Table padding="dense">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center" className={classes.name}>Name</TableCell>
            <TableCell align="center" className={classes.phone}>Phone</TableCell>
            <TableCell align="center" className={classes.email}>Email</TableCell>
            <TableCell align="center" className={classes.datetime}>Date</TableCell>
            <TableCell align="center" className={classes.quantity}># People</TableCell>
            <TableCell align="center" className={classes.note}>Note</TableCell>
            <TableCell align="center" className={classes.user}>Created By</TableCell>
            <TableCell align="center" className={classes.created_at}>Created On</TableCell>
            <TableCell align="center" className={classes.updated_at}>Updated On</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            dummyRegistration.map(n => (
                  <TableRow key={n.id}>
                    <TableCell align="left">{n.id}</TableCell>
                    <TableCell align="left">{n.name}</TableCell>
                    <TableCell align="left">{n.phone}</TableCell>
                    <TableCell align="left">{n.email}</TableCell>
                    <TableCell align="left">{n.datetime}</TableCell>
                    <TableCell align="left">{n.quantity}</TableCell>
                    <TableCell align="left">{n.note}</TableCell>
                    <TableCell align="left">{n.user}</TableCell>
                    <TableCell align="left">{n.created_at}</TableCell>
                    <TableCell align="left">{n.updated_at}</TableCell>
                    <TableCell align="right">
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => props.handleRegistrationClick(n.id, "reservation_"+n.id)}>Edit
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => props.handleRegistrationClick(n.id, "reservation_"+n.id)}>Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </Paper>
  );
}

RegistrationTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationTable);