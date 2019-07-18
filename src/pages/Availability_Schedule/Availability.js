import React, { Component } from 'react';
import AvailabilityTable from '../../components/Availability/AvailabilityTable';
import ScheduleInputTable from '../../components/Availability/ScheduleInputTable';
import { connect } from 'react-redux';
import '../../App.css';
import { Typography } from '@material-ui/core';


import { getList, updateAvailability,addAvailability,deleteAvailability, closeNotification } from '../../actions/availability';
import { addSchedule, getList as getSchedule, clearSchedule } from '../../actions/schedule';
//import { getList as getUser } from '../actions/user';


import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

class Availability extends Component {
  
  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {display:'false'};
    //this.updateStatus.bind(this);
    
  }

  componentDidMount() {
    this.props.getList();
    //this.props.getUser();
    this.props.getSchedule();
    console.log("Mount");
    console.log(this.props);
    console.log("state", this.state)
    

  }

  updateStatus() {
    console.log("UpdateStatus Called", this.props);
    console.log("statusINIT", this.state);
    this.props.schedules.scheduleList.schedules.forEach(schedule => {
      console.log("Schedule# ", schedule);
      if(schedule.Mon !== ""){
        console.log("Enter Mon");
        this.setState({[schedule.user+"_Mon_timeStart"]:schedule.Mon.split("\n")[0]})
        this.setState({[schedule.user+"_Mon_timeEnd"]:schedule.Mon.split("\n")[1]})
      }
      if(schedule.Tue !== ""){
        console.log("Enter Tue");
        this.setState({[schedule.user+"_Tue_timeStart"]:schedule.Tue.split("\n")[0]})
        this.setState({[schedule.user+"_Tue_timeEnd"]:schedule.Tue.split("\n")[1]})
      }
      if(schedule.Wed !== ""){
        console.log("Enter Wed");
        this.setState({[schedule.user+"_Wed_timeStart"]:schedule.Wed.split("\n")[0]})
        this.setState({[schedule.user+"_Wed_timeEnd"]:schedule.Wed.split("\n")[1]})
      }
      if(schedule.Thu !== ""){
        console.log("Enter Thu");
        var full = schedule.Thu.split("\n");
        console.log("Full", full);
        //this.setState({ [id]: value });
        this.setState({[schedule.user+"_Thu_timeStart"]:full[0]});
        this.setState({[schedule.user+"_Thu_timeEnd"]:full[1]});
      }
      if(schedule.Fri !== ""){
        console.log("Enter Fri");
        var full = schedule.Fri.split("\n");
        console.log("Full", full);
        this.setState({[schedule.user+"_Fri_timeStart"]:full[0]});
        this.setState({[schedule.user+"_Fri_timeEnd"]:full[1]});
      }
      if(schedule.Sat !== ""){
        console.log("Enter Sat");
        this.setState({[schedule.user+"_Sat_timeStart"]:schedule.Sat.split("\n")[0]})
        this.setState({[schedule.user+"_Sat_timeEnd"]:schedule.Sat.split("\n")[1]})
      }
      if(schedule.Sun !== ""){
        console.log("Enter Sun");
        this.setState({[schedule.user+"_Sun_timeStart"]:schedule.Sun.split("\n")[0]})
        this.setState({[schedule.user+"_Sun_timeEnd"]:schedule.Sun.split("\n")[1]})

      }
      return;
    }, this);
    console.log("statusEND", this.state);
  }

  handleChange = (event) => {
    const {id, value} = event.target;
    this.setState({ [id]: value });
    console.log(id + "|" + value);
    console.log(this.state);
  };

  handleInput = (event) => {
    const {id, value} = event.target;
    this.setState({ [id]: value });
    console.log(id + "|" + value);
    console.log(this.state);
  };


  

  callAPIAdd(n) {
    
    console.log("callAPIAdd", this.state);
    if(this.state[n.user+"_Mon_timeStart"] != null){
      this.props.addSchedule(n.user, "Mon", this.state[n.user+"_Mon_timeStart"], this.state[n.user+"_Mon_timeEnd"])
      console.log("Mon Updated", n.user)
    } 
    if(this.state[n.user+"_Tue_timeStart"] != null){
      this.props.addSchedule(n.user, "Tue", this.state[n.user+"_Tue_timeStart"], this.state[n.user+"_Tue_timeEnd"])
      console.log("Tue Updated", n.user)
    }
    if(this.state[n.user+"_Wed_timeStart"] != null){
      this.props.addSchedule(n.user, "Wed", this.state[n.user+"_Wed_timeStart"], this.state[n.user+"_Wed_timeEnd"])
      console.log("Wed Updated", n.user)
    }
    if(this.state[n.user+"_Thu_timeStart"] != null){
      this.props.addSchedule(n.user, "Thu", this.state[n.user+"_Thu_timeStart"], this.state[n.user+"_Thu_timeEnd"])
      console.log("Thu Updated", n.user)
    }
    if(this.state[n.user+"_Fri_timeStart"] != null){
      this.props.addSchedule(n.user, "Fri", this.state[n.user+"_Fri_timeStart"], this.state[n.user+"_Fri_timeEnd"])
      console.log("Fri Updated", n.user)
    }
    if(this.state[n.user+"_Sat_timeStart"] != null){
      this.props.addSchedule(n.user, "Sat", this.state[n.user+"_Sat_timeStart"], this.state[n.user+"_Sat_timeEnd"])
      console.log("Sat Updated", n.user)
    }
    if(this.state[n.user+"_Sun_timeStart"] != null){
      this.props.addSchedule(n.user, "Sun", this.state[n.user+"_Sun_timeStart"], this.state[n.user+"_Sun_timeEnd"])
      console.log("Sun Updated", n.user)
    }
  }

  handleAddScheduleClick = async () => {
    console.log("handleAdd");
    
    this.props.clearSchedule();

    /*
    this.props.users.map((users) => 
                users.map(n => (
                  this.callAPIAdd(n)
                  )))
                  */
    //this.updateStatus();
    await this.updateStatus();
    this.props.schedules.scheduleList.schedules.map(n => (
      this.callAPIAdd(n)
    ));
  
    console.log("add clicked");
    //this.props.getSchedule();
    console.log("state",this.state);
    
  }

  render() {

    console.log("props",this.props);
    console.log("state",this.state);
    return (
        <React.Fragment>
            <Menu />
            <main>
                  <Typography variant="h4" color="inherit"> Availability - Week at Glance </Typography>
                  
                  <AvailabilityTable
                    data = {this.props.availabilitys} 
                    state = {this.state}
                  />


                  <ScheduleInputTable
                    data = {this.props.availabilitys} 
                    //users = {this.props.users} 
                    schedules = {this.props.schedules}
                    handleAddScheduleClick={this.handleAddScheduleClick}
                    updateStatus = {this.updateStatus}
                    handleChange={this.handleChange}
                    handleInput={this.handleInput}
                    state = {this.state}
                  />
                  
            </main>
            <Footer/>
        </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      availabilitys: state.availabilitys,
      users: state.users,
      schedules: state.schedules
    };
};


export default connect(mapStateToProps,{getList, getSchedule, addSchedule, clearSchedule, updateAvailability,addAvailability,closeNotification,deleteAvailability})(Availability);
