import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import ProductTable from '../../components/Stock/ProductTable';
import ProductNew from '../../components/Stock/ProductNew';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';


import NotificationSnackbar from '../../components/Util/NotificationSnackbar';

import { getList,updateProduct,addProduct,closeNotification,deleteProduct } from '../../actions/product';
import Footer from '../../components/Footer/Footer';

const fieldsId = {
  txtNewProdName: "name",
};

class StockAdmin extends Component {

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

  handleAddProductClick = (stateId) => {
      this.props.addProduct(this.state[stateId] || '');
  }

  handleDeleteClick = (id, index) => {
    this.props.deleteProduct(id, index);
  };
  

  render() {
    return (
        <React.Fragment>
            <Menu />
            <main>
                  <Typography variant="h4" color="inherit"> Re-stock </Typography>
                  
                  <ProductTable 
                    data={this.props.products} 
                    handleTextChange={this.handleTextChange} 
                    handleRestockClick={this.handleRestockClick}
                    handleDeleteClick={this.handleDeleteClick}
                    state = {this.state}
                  />
                  <div className="spacer" />
                  <ProductNew 
                    handleAddProductClick={this.handleAddProductClick}
                    handleTextChange={this.handleTextChange}  
                    fieldsId={fieldsId}
                    data={this.props.products}
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


export default connect(mapStateToProps,{getList,updateProduct,addProduct,closeNotification,deleteProduct})(StockAdmin);
