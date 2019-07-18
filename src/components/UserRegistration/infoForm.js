import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import InputAdorment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import NoteIcon from '@material-ui/icons/Note';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class RegistrationForm extends React.Component {

    render() {
    const { classes } = this.props;
    const fieldsId  = this.props.fieldsId;
 
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required
                            id={fieldsId.txtName}
                            name="name"
                            label="Full Name"
                            fullWidth
                            value={this.props.reservation[fieldsId.txtName] || ''}
                            onChange={this.props.handleTextChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdorment position="start">
                                        <PersonIcon />
                                    </InputAdorment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id={fieldsId.txtPhone}
                            name="phone"
                            label="Phone Number"
                            fullWidth
                            value={this.props.reservation[fieldsId.txtPhone] || ''}
                            onChange={this.props.handleTextChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdorment position="start">
                                        <PhoneIcon />
                                    </InputAdorment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id={fieldsId.txtEmail}
                            name="email"
                            label="Email"
                            fullWidth
                            value={this.props.reservation[fieldsId.txtEmail] || ''}
                            onChange={this.props.handleTextChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdorment position="start">
                                        <EmailIcon />
                                    </InputAdorment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id={fieldsId.txtDate}
                            label="Registration Date"
                            required
                            type="date"
                            className={classes.textField}
                            value={this.props.reservation[fieldsId.txtDate]}
                            onChange={this.props.handleTextChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            id={fieldsId.txtNotes}
                            name="notes"
                            label="Notes"
                            fullWidth
                            value={this.props.reservation[fieldsId.txtNotes] || ''}
                            onChange={this.props.handleTextChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdorment position="start">
                                        <NoteIcon />
                                    </InputAdorment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps=(state)=>{
    return {reservation: state.reservation};
};

export default connect(mapStateToProps)(withStyles(styles)(RegistrationForm));