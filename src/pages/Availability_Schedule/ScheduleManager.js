import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import ManagerViewTable from '../../components/Schedule/ManagerRecieveTable'
import Footer from '../../components/Footer/Footer';
// import ManagerEditTable from '../components/Schedule/ManagerEditTable'

class ScheduleManager extends Component {
    render(){
    return (
        <div>
            <Menu />
            <main>
                <center><ManagerViewTable/></center>
                {/* <center><ManagerEditTable/></center> */}

            </main>
            <Footer/>
        </div>
        );
    }
}

export default ScheduleManager;