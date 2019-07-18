import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    listItem: {
        padding: `${theme.spacing.unit}px 0`,
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing.unit * 2,
    },
});

function Review(props) {
    const fieldsId  = props.fieldsId;
    const { classes } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Reservation Overview
            </Typography>

            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Time & Number of Guests
                    </Typography>
                    <Typography gutterBottom>{props.reservation[fieldsId.txtDate]} {props.reservation[fieldsId.txtTime]}</Typography>
                    <Typography gutterBottom>{props.reservation[fieldsId.txtQtyPeople]} Guests</Typography>
                    <Typography gutterBottom>Notes {props.reservation[fieldsId.txtNote]}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Customer Detail
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{props.reservation[fieldsId.txtName]}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Phone Number</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{props.reservation[fieldsId.txtPhone]}</Typography>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Typography gutterBottom>Email</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{props.reservation[fieldsId.txtEmail]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps=(state)=>{
    return {reservation: state.reservation};
};

export default connect(mapStateToProps)(withStyles(styles)(Review));