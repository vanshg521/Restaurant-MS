import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import ReservationTable from '../../components/Reservation/ReservationTable';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import NotificationSnackbar from '../../components/Util/NotificationSnackbar';

import { getList,updateReservation,addReservation,editReservation,deleteReservation,closeNotification } from '../../actions/reservation';
import Footer from '../../components/Footer/Footer';

const fieldsId = {
  txtDateSearch: "txtDateSearch",
};

class ReservationAdmin extends Component {

  state = {[fieldsId.txtDateSearch]: ''};
  
  constructor(){
    var today = new Date();

    var dd = ('0' + today.getDate()).slice(-2);
    var mm = ('0' + (today.getMonth()+1)).slice(-2); //As January is 0.
    var yyyy = today.getFullYear();

    super();
    this.state = {[fieldsId.txtDateSearch]: yyyy + '-' + mm + '-' + dd};
    //this.setState({[fieldsId.txtDateSearch]: yyyy + '-' + mm + '-' + dd}, () => {console.log(this.state)})
  }

  componentDidMount() {
    this.props.getList(this.state[fieldsId.txtDateSearch]);
  }

  handleTextChange = event => {
    const {id, value} = event.target;
    this.setState({ [id]: value });
  };

  handleEditClick = (index) => {
    this.props.editReservation(index);
    this.props.history.push('/reservation');
  };

  handleDeleteClick = (id, index) => {
    this.props.deleteReservation(id, index);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeNotification();
  };

  render() {
    return (
        <React.Fragment>
            <Menu />
            <main>
                  <Typography variant="h4" color="inherit" > 
                    Reservations 
                  </Typography>
                  <TextField 
                      id="txtDateSearch"
                      type="date"
                      onChange={(event) => {this.handleTextChange(event); this.componentDidMount();}}
                      value={this.state[fieldsId.txtDateSearch]}
                      style = {{width: 150}}
                  />
                  <ReservationTable 
                    data={this.props.reservation.reservationList.reservations}
                    handleEditClick={this.handleEditClick}
                    handleDeleteClick={this.handleDeleteClick}
                  />

                  <NotificationSnackbar
                    displaying={this.props.reservation.reservationList.success.display}
                    onClose={this.handleClose}
                    variant="success"
                    message={this.props.reservation.reservationList.success.message}
                  />
                  
            </main>
            <Footer/>
        </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      reservation: state.reservation,
      auth: state.auth,
    };
};


export default connect(mapStateToProps,{getList,updateReservation,addReservation,editReservation,deleteReservation,closeNotification})(ReservationAdmin);
