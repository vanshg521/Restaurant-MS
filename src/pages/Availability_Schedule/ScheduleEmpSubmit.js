import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import AvailableTimes from 'react-available-times';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {getToken, getUser} from '../../utils/jwtToken'
import { getList, getCurrent, updateAvailability,addAvailability,deleteAvailability, clearAvailability, closeNotification } from '../../actions/availability';
import Footer from '../../components/Footer/Footer';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class ScheduleEmpSubmit extends Component {

    
    constructor(props){
        super(props);
        console.log("Constructor");
        this.props.getCurrent();
        this.state = {
           list: [ 
            {date: "", initTime: "", endTime: ""},
            {date: "", initTime: "", endTime: ""},
            {date: "", initTime: "", endTime: ""},
            {date: "", initTime: "", endTime: ""},
            {date: "", initTime: "", endTime: ""},
            {date: "", initTime: "", endTime: ""},
            {date: "", initTime: "", endTime: ""}
          ],
          current: null
        }; 

        var token = getUser();
        console.log("User_Obj", token);
        //this.props.getUser(token);
    }

    componentDidMount() {
    //this.setState({current : this.props.availabilitys.availabilityListCurrent.availabilityCurrent});
    console.log("MountP",this.props);
    console.log("MountS",this.state);
    }

    handleCalendarChange = (id, value) => {
        //const {id, value} = event.target;
        this.setState({ [id]: value });
        console.log(id + "|" + value);
      };
    
    handleAddAvailabilityClick = async (list, props) => {
        await this.props.clearAvailability();
        list.forEach(function(item){
            console.log("AddClick:",item);
            if(item.initTime !== ""){
                console.log("AddClickOK:",item);
                props.addAvailability(item.date ,item.initTime, item.endTime);
            }
            
        })
        
    }

    componentDidUpdate(){
        let av = this.props.availabilitys.availabilityList;
        console.log("Update-AV", av);
        console.log("Update-Current", this.state.current);
        if(av.availabilitysCurrent !== undefined && this.state.current == null ){
            console.log("Updated-If");
            this.setState({current : av.availabilitysCurrent});
        }
        
        console.log("Updated-State", this.state);
        console.log("Updated-Props", this.props);
    }

    getSimpleDate(date){
        var dat = new Date(date);
        return (dat.getFullYear() + "-" + (dat.getMonth()+1) + "-" + dat.getDate());
    }

    getDay(date){
        var dat = new Date(date);
        return (dat.getDay());
    }

    getFullData(date){
        var dat = new Date(date);
        return (dat.getFullYear() + "-" + (dat.getMonth()+1) + "-" + dat.getDate() + " " + dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds());
    }

    updateState(start, end){
        var day = this.getDay(start);
        this.setState(this.state.list[day] = {date: this.getSimpleDate(start) ,initTime: this.getFullData(start), endTime: this.getFullData(end)});
    }

    getStartEnd(dates){
        if(dates != null){
            var arr = [];
            console.log("StartEnd",dates);
            console.log("StartEnd-Props",this.props);
            console.log("StartEnd-State",this.state);
            //let dates2 = dates.availabilitys.availabilityList;
            //console.log("StartEnd-Date2", dates2)
            
            dates.forEach(function(item){
                var dat = new Date(item.start);
                var dat2 = new Date(item.end);
                var obj = {start: dat, end: dat2};
                arr.push(obj);
            });
            
            console.log(arr);
            return arr;
        }else{
            return null;
        }
    }

  render() {
    return (
        
        <div>
            <Menu />
            <main>
            <center>
                <Button variant="outlined" color="secondary" className={styles.button}
                    onClick={() => this.handleAddAvailabilityClick(this.state.list, this.props)} >
                    Submit
                </Button>
                
            </center>
            {console.log("StateState", this.state)}
            { this.state.current ? 
                <AvailableTimes
                weekStartsOn="monday"
                calendars={[
                    {
                    id: 'work',
                    title: 'Work',
                    foregroundColor: '#ff00ff',
                    backgroundColor: '#f0f0f0',
                    selected: true,
                    },
                ]}
                onChange={(selections) => {
                    //console.log(selections);
                    //this.state = {display:'false'};
                    selections.forEach(({ start, end }) => {
                        //this.handleCalendarChange({id:start, value:start});
                        //this.handleCalendarChange({id:end, value:end});
                        //this.setState({ [fieldsId.initTime]: this.getFullData(start) });
                        //this.setState({ [fieldsId.endTime]: this.getFullData(end) });
                        console.log('Start:', this.getFullData(start), 'End:', this.getFullData(end));
                        this.updateState(start, end);
                        //console.log(this.state);
                    })
                    console.log(this.state);
                }}
                onEventsRequested={({ calendarId, start, end, callback }) => {
                    //  loadMoreEvents(calendarId, start, end).then(callback);
                }}
                initialSelections={
                     this.getStartEnd(this.state.current)
                }
                recurring={false}
                availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
                />
            : null }
            
            </main>
            <Footer/>
            </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        availabilitys: state.availabilitys,
        availabilitysCurrent: state.availabilitysCurrent
      };
  };
  
  
  export default connect(mapStateToProps,{getList, getCurrent, getUser, updateAvailability,addAvailability,closeNotification, clearAvailability, deleteAvailability})(ScheduleEmpSubmit);