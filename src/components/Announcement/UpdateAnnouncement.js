import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';        
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Menu from '../Menu/Menu';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
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
});

function UpdateAnnouncement(props) {
  const { classes } = props;

  return (
      <div>
      <Menu/>
      
    <main className={classes.main}>
     
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Edit announcement
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input id="title" name="title" autoComplete="title" autoFocus />
          </FormControl>
          
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Category">Category</InputLabel>
            <Input name="category" type="text" id="category"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Message">Message</InputLabel>
            <Input name="message" type="text" id="message"  />
          </FormControl>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </Paper>
    </main>
    </div>
  );
}

UpdateAnnouncement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateAnnouncement);
