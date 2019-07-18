import React from 'react'
import PropTypes from 'prop-types';

import './ProductItem.css';


import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
});

class ProductItem extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className="stock-item">
            <span>{this.props.productName}</span>
            <div className="spacer"/>
            <Button
                  variant="contained"
                  color="primary"
                  className={classNames(classes.margin, classes.cssRoot)}
              >Re-Stock</Button>
        </div>
    )
  }
}

ProductItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductItem);
