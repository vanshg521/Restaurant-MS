import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import ReStockTable from '../../components/Stock/ReStockTable';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import NotificationSnackbar from '../../components/Util/NotificationSnackbar';

import { getList,updateProduct,closeNotification } from '../../actions/product';
import Footer from '../../components/Footer/Footer';


class Stock extends Component {

  constructor(props){
    super(props);

    this.state = {display:'false'};
  }


  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeNotification();
  };




  componentDidMount() {
    this.props.getList();
  }

  handleTextChange = (event) => {
    const {id, value} = event.target;
    this.setState({ [id]: value });

  };

  handleRestockClick = (id, stateId) => {
    this.props.updateProduct(id, this.state[stateId]);
  };

  render() {
    return (
        <React.Fragment>
            <Menu />
            <main>
                  <Typography variant="h4" color="inherit"> Re-stock </Typography>
                  
                  <ReStockTable 
                    data={this.props.products} 
                    handleTextChange={this.handleTextChange} 
                    handleRestockClick={this.handleRestockClick}
                    state = {this.state}
                  />
                  
                  <NotificationSnackbar
                    displaying={this.props.products.productList.success.display}
                    onClose={this.handleClose}
                    variant="success"
                    message={this.props.products.productList.success.message}
                  />
            </main>
            <Footer/>
        </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      products: state.products
    };
};


export default connect(mapStateToProps,{getList,updateProduct,closeNotification})(Stock);
