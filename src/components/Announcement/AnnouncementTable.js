import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Chip } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  expansionPanel:{
    width: '100%',
    overflowX: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  title: {
    width: 50,
  },
  column: {
    flexBasis: '33.33%',
  },
  message: {
    width: 100
  },
  category: {
    width: 100
  },
});

function checkCategory(cat){
  if (cat === "Warning"){
    return <Chip color="secondary" variant="outlined" label={cat}/>
  }else{
    return <Chip color="primary" variant="outlined" label={cat}/>
  }
}

function AnnouncementTable(props) {
  console.log(props)
  const { classes } = props
  console.log(classes)  
  return (
    <Paper className={classes.root}>
    
          { console.log(props)}
          {
            props.data.announcementList.announcements.map((n, index) =>    
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.column}>
              <Typography className={classes.heading}>{n.title}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>{n.created_at}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>{checkCategory(n.category)}</Typography>
              </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {n.message}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            
          )
            
          }
    </Paper>
  );
}

AnnouncementTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnouncementTable);