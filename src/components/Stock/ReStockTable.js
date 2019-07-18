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

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  qty: {
    width: 50,
  },
  button: {
    width: 100
  },
};

function ReStockTable(props) {
  const { classes } = props
  return (
    <Paper className={classes.root}>
      <Table padding="dense">
        <TableHead>
          <TableRow>
            <TableCell align="left">Item</TableCell>
            <TableCell align="center" className={classes.qty}>Amount</TableCell>
            <TableCell align="center" className={classes.button}>Re-Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.data.productList.products.map((n, index) => 
                  <TableRow key={n.id}>
                    <TableCell align="left">{n.name}</TableCell>
                    <TableCell align="center">
                    <Input 
                      id={"product_"+n.id} 
                      value={props.state["product_"+n.id] || n.qty} 
                      onChange={props.handleTextChange} />
                    </TableCell>
                    <TableCell align="center">
                      <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => props.handleRestockClick(n.id, "product_"+n.id)}>Restock
                      </Button>
                    </TableCell>
                  </TableRow>
                )
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

ReStockTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReStockTable);