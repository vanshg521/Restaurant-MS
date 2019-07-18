import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableHead } from '@material-ui/core';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
    height: '50%'
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
  date: {
    width: 150,
    padding: 2
  },
};

// function convertDate(date){
//   var dat = new Date(date);
//   return new Intl.DateTimeFormat('en-US',{ 
//     hour: '2-digit',
//     minute: '2-digit'
//   }).format(dat);
// }

// function convertToArray(json){
//   console.log("ConvertCall");
//   console.log(json);
//   var arr = [];
//   Object.keys(json).forEach(function(key) {
//     arr.push(json[key]);
//   })

//   console.log(arr);
// }


function AvailabilityTable(props) {
  console.log(props);
  const { classes } = props;
  //var arr = convertToArray(props.data.availabilityList.availabilitys);
  //console.log(classes)  
  return (

    <Paper className={classes.root}>
    
      <Table padding="dense">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.user}>Employee</TableCell>
            <TableCell align="center" className={classes.Mon}>Monday</TableCell>
            <TableCell align="center" className={classes.Tue}>Tuesday</TableCell>
            <TableCell align="center" className={classes.Wed}>Wednesday</TableCell>
            <TableCell align="center" className={classes.Thu}>Thursday</TableCell>
            <TableCell align="center" className={classes.Fri}>Friday</TableCell>
            <TableCell align="center" className={classes.Sat}>Saturday</TableCell>
            <TableCell align="center" className={classes.Sun}>Sunday</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          { console.log(props)}
          {
            
            props.data.availabilityList.availabilitys.map((n, index) => 
            
            <TableRow key={n.id}>
              <TableCell align="center">
                {n.name}
              </TableCell>
              
              <TableCell align="center">              
              {n.Mon.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
              <TableCell align="center">
              {n.Tue.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
              <TableCell align="center">
              {n.Wed.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
              <TableCell align="center">
              {n.Thu.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
              <TableCell align="center">
              {n.Fri.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
              <TableCell align="center">
              {n.Sat.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
              <TableCell align="center">
              {n.Sun.split('\n').map(text => <p>{text}</p>)}
              </TableCell>
            </TableRow>
            ) 
            
          }
        </TableBody>
      </Table>
    </Paper>
    
  );
}



AvailabilityTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvailabilityTable);