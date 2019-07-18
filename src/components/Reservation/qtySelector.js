import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SelectField from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {
    state = {
        labelWidth: 0
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        }); 
    }

    render() {
        const { classes } = this.props;
        const fieldName  = this.props.fieldName;
        const errors = this.props.reservation.reservationList.error;
        return (
                <FormControl 
                    variant="outlined" 
                    className={classes.formControl}
                    error={errors[fieldName].length > 0}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor={fieldName}
                    > # of People </InputLabel>
                    <SelectField
                        value={this.props.reservation[fieldName] || ""}
                        onChange={this.props.handleSelectChange}
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                                name={fieldName}
                                id={fieldName}
                            />
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </SelectField>

                    {
                        errors[fieldName] === '' ?
                            <FormHelperText id="component-error-text">{errors[fieldName]}</FormHelperText>
                            : ''
                    }
                </FormControl>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps=(state)=>{
    return {reservation: state.reservation};
};

export default connect(mapStateToProps)(withStyles(styles)(SimpleSelect));
