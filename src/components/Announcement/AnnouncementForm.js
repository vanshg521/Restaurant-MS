import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, Input } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: '100%',
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit,
    
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  select: {
    marginTop: theme.spacing.unit * 1,
  }
});

function AnnouncementForm(props) {
  const { classes } = props;

    var errors = props.data.announcementList.error;
    if(!errors[props.fieldsId.txtNewAnnouncementTitle])
      errors = {[props.fieldsId.txtNewAnnouncementTitle] : []};
    
    return (
      
      <React.Fragment>
      <main className={classes.main}>
     
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailIcon />
        </Avatar>
          <div className={classes.root}>
            <FormControl className={classes.root} error={errors[props.fieldsId.txtNewAnnouncementTitle].length > 0}>
              <InputLabel htmlFor={props.fieldsId.txtNewAnnouncementTitle}>Title</InputLabel>
              <Input
                id={props.fieldsId.txtNewAnnouncementTitle}
                onChange={props.handleTextChange}
                aria-describedby="component-error-text"
                
              />
              {
                 errors[props.fieldsId.txtNewAnnouncementTitle].map((e) => 
                  <FormHelperText id="component-error-text">{e}</FormHelperText>
                 )
              }
              </FormControl>

              <FormControl className={classes.select}>
              <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                  native
                  value={props.fieldsId.txtNewAnnouncementCategory}
                  onChange={props.handleTextChange}
                  inputProps={{
                    name: 'category',
                    id: 'category'}}
                >
                  
                  <option value={2}>Warning</option>
                  <option value={1}>Food</option>
                </Select>
                
              </FormControl>

              <FormControl className={classes.root} error={errors[props.fieldsId.txtNewAnnouncementTitle].length > 0}>
              <InputLabel htmlFor={props.fieldsId.txtNewAnnouncementMessage}>Message</InputLabel>
              <Input
                id={props.fieldsId.txtNewAnnouncementMessage}
                onChange={props.handleTextChange}
                aria-describedby="component-error-text"
                multiline={true}
                rows={5}
              />
              

            </FormControl>
              
            <Button variant="contained" color="primary" className={[classes.root, classes.dense].join(' ')}
                onClick={() => props.handleAddAnnouncementClick(props.fieldsId.txtNewAnnouncementTitle, props.fieldsId.txtNewAnnouncementMessage, props.fieldsId.txtNewAnnouncementCategory)} >
                  New Announcement
            </Button>
          </div>
        </Paper>
      </main>
      </React.Fragment>
    );
}

AnnouncementForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnouncementForm);
