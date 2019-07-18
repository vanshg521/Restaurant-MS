import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Chip } from '@material-ui/core';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
    height: noAuto
  },
  title: {
    width: 50,
  },
  message: {
    width: 100
  },
  category: {
    width: 100
  },
  button: {
    width: 100
  },
};

const CustomTableCell = withStyles(theme => ({
  head: {
    
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);


function checkCategory(cat){
  if (cat === "Warning"){
    return <Chip color="secondary" variant="outlined" label={cat}/>
  }else{
    return <Chip color="primary" variant="outlined" label={cat}/>
  }
}

function AnnouncementTableAdmin(props) {
  console.log(props)
  const { classes } = props
  console.log(classes)  
  return (
    <Paper className={classes.root}>
    
      <Table padding="dense">
        <TableHead >
          <TableRow className="styleTableHeader">
            <CustomTableCell align="left" className={classes.title}> Title</CustomTableCell>
            <CustomTableCell align="left" className={classes.message}>Message</CustomTableCell>
            <CustomTableCell align="center" className={classes.category}>Category</CustomTableCell>
            <CustomTableCell align="center" className={classes.button}>Delete</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { console.log(props)}
          {
            props.data.announcementList.announcements.map((n, index) => 
            
            <TableRow key={n.id}>
              <TableCell align="left">
                {n.title}
              </TableCell>
              <TableCell align="left">
                {n.message}
              </TableCell>
              <TableCell align="center">
              {checkCategory(n.category)}
              </TableCell>
              <TableCell align="center">
                      <Button 
                        variant="contained" 
                        color="default"
                        onClick={() => props.handleDeleteClick(n.id, index)}>Delete
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

AnnouncementTableAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnouncementTableAdmin);