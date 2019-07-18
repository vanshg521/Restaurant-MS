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

function convertDate(date){
  var dat = new Date(date);
  return new Intl.DateTimeFormat('en-US',{ 
    hour: '2-digit',
    minute: '2-digit'
  }).format(dat);
}

function convertToArray(json){
  console.log("ConvertCall");
  console.log(json);
  var arr = [];
  Object.keys(json).forEach(function(key) {
    arr.push(json[key]);
  })

  console.log(arr);
}


function AvailabilityList(props) {
  console.log(props);
  const { classes } = props;
  //var arr = convertToArray(props.data.availabilityList.availabilitys);
  //console.log(classes)  
  return (

    <Paper className={classes.root}>
    
      
          { console.log(props)}
          {
            
            props.data.availabilityList.availabilitys.map((n, index) => 
              <div>
                <p>{n.name}</p>
                <ul>
                  <li>Monday</li>
                  <ul>
                    {n.Mon.substring(0, n.Mon.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  <li>Tuesday</li>
                  <ul>
                    {n.Tue.substring(0, n.Tue.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  <li>Wednesday</li>
                  <ul>
                    {n.Wed.substring(0, n.Wed.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  <li>Thursday</li>
                  <ul>
                    {n.Thu.substring(0, n.Thu.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  <li>Friday</li>
                  <ul>
                    {n.Fri.substring(0, n.Fri.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  <li>Saturday</li>
                  <ul>
                    {n.Sat.substring(0, n.Sat.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  <li>Sunday</li>
                  <ul>
                    {n.Sun.substring(0, n.Sun.length - 2).split('\n').map(text => <li>{text}</li>)}
                  </ul>
                  
                </ul>
              </div>
            ) 
            
          }

    </Paper>
    
  );
}



AvailabilityList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvailabilityList);