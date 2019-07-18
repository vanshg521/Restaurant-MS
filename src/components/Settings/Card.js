import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Switch } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

const styles = {
  card: {
    maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Settings
        </Typography>

        <TableRow> 
            <TableCell align="left">
            <Typography component="p">General </Typography></TableCell>
            <TableCell align="right">
                <Switch></Switch>
            </TableCell>
        </TableRow>

        <TableRow> 
            <TableCell align="left">
            <Typography component="p">Sounds </Typography></TableCell>
            <TableCell align="right">
                <Switch></Switch>
            </TableCell>
        </TableRow>
        
        <TableRow> 
            <TableCell align="left">
            <Typography component="p">Preference </Typography></TableCell>
            <TableCell align="right">
                <Switch></Switch>
            </TableCell>
        </TableRow>

      </CardContent>
      <CardActions>
        <Button size="small">Advanced Settings</Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
