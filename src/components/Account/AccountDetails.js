import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Avatar from './Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;
  return ( 
    props.data.map((account) => (
    <div className={classes.root}>
      <Avatar/>
      <Typography variant="h3" color="inherit">{account.name}</Typography>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>ID</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.id}</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Email</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.email}</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Password</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.password}</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Phone</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.phoneNum}</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Role</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.role}</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Created At</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.created_at}</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>Updated At</Typography>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>{account.updated_at}</Paper>
        </Grid>
      </Grid>
    </div>
  )));
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);