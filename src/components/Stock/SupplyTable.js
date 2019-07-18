import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Input } from '@material-ui/core';
import {connect} from 'react-redux';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, restockamount) {
  id += 1;
  return { id, name, restockamount };
}

const data = [
  createData('Paper', 6),
  createData('Napkins', 9),
  createData('Forks', 22),
  createData('Spoons', 35),
  createData('Chairs', 14),
  createData('Pens', 25),
  createData('Plates', 12),
  createData('Cups', 27),
  createData('Tissues', 25),
  createData('Bread', 12),
  createData('Jam', 27),
];


function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Item</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Re-Stock</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            console.log(this.props.products)
            /*
            this.props.products.map((listProd) => {
              return (
                listProd.map(p => 
                  <TableRow key={p.id}>
                        <TableCell align="left">{p.name}</TableCell>
                        <TableCell align="right"><Input></Input></TableCell>
                        <TableCell align="right"><Button variant="contained" color="primary">Restock</Button></TableCell>
                        <TableCell align="right"><Button variant="contained" color="primary">Edit</Button></TableCell>
                    </TableRow>
                  )
              );*/
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps=(state)=>{
  return {products: state.products};
};

export default connect(mapStateToProps)(withStyles(styles)(SimpleTable));