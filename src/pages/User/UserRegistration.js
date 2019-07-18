import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InformationForm from '../../components/UserRegistration/infoForm'
import Review from "../../components/UserRegistration/Review";
import { RESERVATION_FORM } from '../../utils/constant';
import { store } from '../../App';
import Footer from '../../components/Footer/Footer';


const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

const fieldsId = {
    txtName: "name",
    txtPhone: "txtPhone",
    txtEmail: "txtEmail",
    txtDate: "txtDate",
    txtTime: "txtTime",
    txtNotes: "txtNotes",
    txtQtyPeople: "txtQtyPeople"
  };

const steps = ['Personal Information', 'Review Your Registration'];

function getStepContent(step, props) {
    switch (step) {
        case 0:
            return <InformationForm 
                handleTextChange={props.handleTextChange} 
                handleSelectChange={props.handleSelectChange}
                fieldsId={fieldsId} />;
        case 1:
            return <Review fieldsId={fieldsId}/>;
        default:
            throw new Error('Unknown step');
    }
}

class UserRegistration extends React.Component {
    /*
    componentDidMount(){
        Object.keys(fieldsId).forEach((key) => {
            const field = fieldsId[key];
            this.state[field] = '';
        });

        store.dispatch({
            type: RESERVATION_FORM,
            payload: this.state
        });

        console.log(this.state);
    }
    */

    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleTextChange = event => {
        const {id, value} = event.target;
        this.setState(
            { [id]: value },
            () => {
                store.dispatch({
                    type: RESERVATION_FORM,
                    payload: this.state
                });
            }
        );
    };

    
    handleSelectChange = event => {
        const {name, value} = event.target;
        this.setState(
            { [name]: value },
            () => {
                store.dispatch({
                    type: RESERVATION_FORM,
                    payload: this.state
                });
            }
        );
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;
        
        return (
            <div><Menu />
            
            <main className={classes.layout}>
            <Paper Paper className={classes.paper} elevation={1}>
                    <Typography component="h1" variant="h4" align="center">
                        Registration
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your reservation.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your registration number is #2001539. We have emailed your order confirmation,
                                    hope see you soon.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep,this)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={this.handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place reservation' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
            <Footer/></div>
        );
    }
}

UserRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps=(state)=>{
    return {reservation: state.reservation};
};

export default connect(mapStateToProps)(withStyles(styles)(UserRegistration));