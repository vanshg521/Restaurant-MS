import React, { Component } from 'react';
import ScheduleTable from '../../components/Schedule/ScheduleTable';
import { connect } from 'react-redux';
import '../../App.css';
import { Button } from '@material-ui/core';

import { getList, updateSchedule,addSchedule,deleteSchedule, closeNotification } from '../../actions/schedule';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

class Schedule extends Component {
  
  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {display:'false'};
  }

  componentDidMount() {
    this.props.getList();
    console.log("Mount");
  }

  

  exportToPNG(){
    var FileSaver = require('file-saver');
    domtoimage.toBlob(document.getElementById('table_schedule'))
    .then(function (blob) {
        FileSaver.saveAs(blob, 'schedule.png');
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  }

  render() {

    console.log(this.props)
    return (
        <React.Fragment>
            <Menu />
            <main>
                  <ScheduleTable
                    data={this.props.schedules} 
                    state = {this.state}
                  />

                  <Button variant="contained" color="primary"
                            onClick={() => this.exportToPNG()} >
                              Export
                  </Button>

                  
            </main>
            <Footer/>
        </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
      schedules: state.schedules
    };
};


export default connect(mapStateToProps,{getList,updateSchedule,addSchedule,closeNotification,deleteSchedule})(Schedule);
