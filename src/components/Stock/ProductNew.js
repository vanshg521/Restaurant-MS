import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
  root: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: '100%',
  },
});

function ProductNew(props) {
  const { classes } = props;

    var errors = props.data.productList.error;
    if(!errors[props.fieldsId.txtNewProdName])
      errors = {[props.fieldsId.txtNewProdName] : []};
      
    return (
          <div className={classes.root}>
            <FormControl className={classes.root} error={errors[props.fieldsId.txtNewProdName].length > 0}>
              <InputLabel htmlFor={props.fieldsId.txtNewProdName}>Product Name</InputLabel>
              <Input
                id={props.fieldsId.txtNewProdName}
                onChange={props.handleTextChange}
                aria-describedby="component-error-text"
              />
              
              {
                 errors[props.fieldsId.txtNewProdName].map((e, index) => 
                  <FormHelperText key={index} id="component-error-text">{e}</FormHelperText>
                 )
              }

            </FormControl>
              
            <Button variant="contained" color="primary" className={[classes.root, classes.dense].join(' ')}
                onClick={() => props.handleAddProductClick(props.fieldsId.txtNewProdName)} >
                  Add New Product
            </Button>
          </div>
    );
}

ProductNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductNew);
