import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserIcon from '@material-ui/icons/AssignmentInd';
import { Button } from '@material-ui/core'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  return (
      
        props.data.map((users) => 
            users.map(n => (
              <ListItem key={n.id}> 
              <UserIcon />
                
              <ListItemText primary={n.name} secondary={n.email}  />
              <h6>ID: {n.id}&nbsp;</h6>
              <Button
                    href="/EditAccount"
                    variant="contained"
                    color="primary"
                  >Edit</Button>              
              </ListItem>
            )))
      
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);