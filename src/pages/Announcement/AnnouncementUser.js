import React, { Component } from 'react';
import AnnouncementTable from '../../components/Announcement/AnnouncementTable';
import { connect } from 'react-redux';
import '../../App.css';
import { Typography } from '@material-ui/core';
import { getList, updateAnnouncement,addAnnouncement,deleteAnnouncement, closeNotification } from '../../actions/announcement';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

// const actionsStyles = theme => ({
//   root: {
//     flexShrink: 0,
//     color: theme.palette.text.secondary,
//     marginLeft: theme.spacing.unit * 2.5,
//   },
// });

class AnnouncementUser extends Component {
  
  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {display:'false'};
  }



  componentDidMount() {
    this.props.getList();
    console.log("Mount");
  }

  render() {
  console.log(this.props)
    return (
        <React.Fragment>
            <Menu />
            
            <main>
             
                  <Typography variant="h4" color="inherit"> Announcement </Typography>
                  <br/>
                  <AnnouncementTable
                    data={this.props.announcements} 
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
      announcements: state.announcements
    };
};


export default connect(mapStateToProps,{getList,updateAnnouncement,addAnnouncement,closeNotification,deleteAnnouncement})(AnnouncementUser);
