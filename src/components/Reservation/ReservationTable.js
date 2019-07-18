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

function ReservationTable(props) {
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
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.data.map((n, index) => (
                  <TableRow key={n.id}>
                    <TableCell align="left">{n.id}</TableCell>
                    <TableCell align="left">{n.name}</TableCell>
                    <TableCell align="left">{n.phone}</TableCell>
                    <TableCell align="left">{n.email}</TableCell>
                    <TableCell align="center">{n.datetime}</TableCell>
                    <TableCell align="center">{n.quantity}</TableCell>
                    <TableCell align="right">
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => props.handleEditClick(index)}>Edit
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => props.handleDeleteClick(n.id, index)}>Delete
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

ReservationTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReservationTable);