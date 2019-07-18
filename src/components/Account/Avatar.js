import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      {/* <Avatar alt="User Avatar" src="https://banner2.kisspng.com/20180421/lyw/kisspng-computer-icons-avatar-clip-art-5adb009b938864.3066118615243019796043.jpg" className={classes.avatar} /> */}
      <Avatar alt="User Avatar" src="https://banner2.kisspng.com/20180421/lyw/kisspng-computer-icons-avatar-clip-art-5adb009b938864.3066118615243019796043.jpg" className={classes.bigAvatar} />
      
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);