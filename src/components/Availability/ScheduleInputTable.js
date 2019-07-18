import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
      width: '100%',
      height: '50%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    select: {
        width: 200,
    },
    column: {
      flexBasis: '50%',
      width: 80,
    },
    table: {
      flexBasis: '100%',
      width: '100%',
    },
    columnMiddle: {
        flexBasis: '10%',
        alignItems: 'center',
        marginRight: 15
      },
    column2: {
      flexBasis: '30%',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        width: 110,
      },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });

function ScheduleInputTable(props) {
  console.log(props);
  const { classes } = props;
  //const users = props.users
  var schedule = props.schedules.scheduleList.schedules;
  //console.log(users); 

  if(schedule != null){
    //props.updateStatus(schedule);
  }

  //var arr = convertToArray(props.data.availabilityList.availabilitys);
  //console.log(classes)  
  return (
    <div className={classes.root}>
    <ExpansionPanel height="50%">
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>New Schedule</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
        <Table padding="dense" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.column}>Employee</TableCell>
              <TableCell align="center" className={classes.column}>Monday</TableCell>
              <TableCell align="center" className={classes.column}>Tuesday</TableCell>
              <TableCell align="center" className={classes.column}>Wednesday</TableCell>
              <TableCell align="center" className={classes.column}>Thursday</TableCell>
              <TableCell align="center" className={classes.column}>Friday</TableCell>
              <TableCell align="center" className={classes.column}>Saturday</TableCell>
              <TableCell align="center" className={classes.column}>Sunday</TableCell>
                            
            </TableRow>
          </TableHead>
          <TableBody>
            {
              /*
              users.map((users) => 
                users.map(n => (
              */
                schedule.map(n =>(

                <TableRow key={n.user}>
                  <TableCell align="center">
                    {n.name}
                  </TableCell>
                  
                  <TableCell align="center">  
                                
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Mon_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Mon.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Mon_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Mon.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  <TableCell align="center">
                  <TextField onChange={props.handleInput}
                            id={n.user +  "_Tue_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Tue.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Tue_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Tue.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  <TableCell align="center">
                  <TextField onChange={props.handleInput}
                            id={n.user +  "_Wed_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Wed.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Wed_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Wed.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  <TableCell align="center">
                  <TextField onChange={props.handleInput}
                            id={n.user +  "_Thu_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Thu.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Thu_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Thu.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  <TableCell align="center">
                  <TextField onChange={props.handleInput}
                            id={n.user +  "_Fri_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Fri.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Fri_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Fri.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  <TableCell align="center">
                  <TextField onChange={props.handleInput}
                            id={n.user +  "_Sat_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Sat.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Sat_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Sat.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  <TableCell align="center">
                  <TextField onChange={props.handleInput}
                            id={n.user +  "_Sun_timeStart"}
                            label="Start Shift"
                            type="time"
                            defaultValue={n.Sun.split("\n")[0]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    <TextField onChange={props.handleInput}
                            id={n.user +  "_Sun_timeEnd"}
                            label="End Shift"
                            type="time"
                            defaultValue={n.Sun.split("\n")[1]}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                  </TableCell>
                  
                </TableRow>
              
              ))
            }
          </TableBody>
        </Table>
            <br />
        <Button variant="contained" color="primary"
                  onClick={() => props.handleAddScheduleClick()} >
                    New Schedule
        </Button>
      </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
    
  );
}



ScheduleInputTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleInputTable);