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
import InformationForm from '../../components/Reservation/infoForm'
import Review from "../../components/Reservation/Review";
import { RESERVATION_FORM } from '../../utils/constant';
import { store } from '../../App';
import { validate,addReservation,updateReservation } from '../../actions/reservation';
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
    txtPhone: "phone",
    txtEmail: "email",
    txtDate: "datetime",
    txtTime: "txtTime",
    txtNotes: "note",
    txtQtyPeople: "quantity"
  };

const steps = ['Personal Information', 'Review Your Reservation'];

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

class Reservation extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount(){
        if(typeof this.props.reservation.reservationList.current !== 'undefined'){
            var currentReservation = this.props.reservation.reservationList.reservations[this.props.reservation.reservationList.current];
            for (var c in currentReservation) {
                if(c === fieldsId.txtDate){
                    this.setState({[fieldsId.txtDate] : currentReservation[c].substring(0,10)});
                    this.setState({[fieldsId.txtTime] : currentReservation[c].substring(11,16)});
                } else {
                    this.setState({[c] : currentReservation[c]},
                        () => {
                            store.dispatch({
                                type: RESERVATION_FORM,
                                payload: this.state
                            });
                        })
                }
            }
        }
    }

    handleNext = () => {
        if(this.props.reservation.reservationList.step === 0){
            this.props.validate(
                this.state[fieldsId.txtName],
                this.state[fieldsId.txtPhone],
                this.state[fieldsId.txtEmail],
                this.state[fieldsId.txtDate]+"T"+this.state[fieldsId.txtTime],
                this.state[fieldsId.txtQtyPeople],                
                this.state[fieldsId.txtNotes]
            );
        } else if(this.props.reservation.reservationList.step === 1){
            if(typeof this.props.reservation.reservationList.current === 'undefined'){
                this.props.addReservation(
                    this.state[fieldsId.txtName],
                    this.state[fieldsId.txtPhone],
                    this.state[fieldsId.txtEmail],
                    this.state[fieldsId.txtDate]+"T"+this.state[fieldsId.txtTime],
                    this.state[fieldsId.txtQtyPeople],                
                    this.state[fieldsId.txtNotes]
            );
            } else {
                this.props.updateReservation(
                    this.props.reservation.reservationList.reservations[this.props.reservation.reservationList.current].id,
                    this.state[fieldsId.txtName],
                    this.state[fieldsId.txtPhone],
                    this.state[fieldsId.txtEmail],
                    this.state[fieldsId.txtDate]+"T"+this.state[fieldsId.txtTime],
                    this.state[fieldsId.txtQtyPeople],                
                    this.state[fieldsId.txtNotes]
                )
            }
        }
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
        return (
            <div><Menu />
            
            <main className={classes.layout}>
                    <Typography component="h1" variant="h4" align="center">
                        Reservation
                    </Typography>
                    <Stepper activeStep={this.props.reservation.reservationList.step} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {this.props.reservation.reservationList.step === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your reservation.
                                </Typography>
                                <Typography variant="subtitle1">
                                    We have emailed your order confirmation, see you soon.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(this.props.reservation.reservationList.step,this)}
                                <div className={classes.buttons}>
                                    {this.props.reservation.reservationList.step !== 0 && (
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
                                        {this.props.reservation.reservationList.step === steps.length - 1 ? 'Place reservation' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
            </main>
            <Footer/></div>
        );
    }
}

Reservation.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps=(state)=>{
    return {reservation: state.reservation};
};

export default connect(mapStateToProps,{validate,addReservation,updateReservation})(withStyles(styles)(Reservation));