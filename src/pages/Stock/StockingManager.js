import React, { Component } from 'react';
import '../App.css';
import Menu from '../../components/Menu/Menu';
import ReStockTable from '../../components/Stock/ReStockTable'
import ExportRestockList from '../../components/Stock/ExportRestockList'
import { Typography } from '@material-ui/core';
import AddItem from '../components/Stock/AddItem'

class Users extends Component {
  render() {
    return (
        <div>
            <Menu />
            <main>
                  <Typography variant="h4" color="inherit"> 
                    Items to Restock
                  </Typography>
                  <center><ReStockTable/></center>
                  <AddItem></AddItem>
                  <ExportRestockList></ExportRestockList>
            </main>
        </div>
    );
  }
}

export default Users;
