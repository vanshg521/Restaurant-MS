import React, { Component } from 'react';
import AnnouncementTableAdmin from '../../components/Announcement/AnnouncementTableAdmin';
import { connect } from 'react-redux';
import '../../App.css';
import { getList, updateAnnouncement,addAnnouncement,deleteAnnouncement, closeNotification } from '../../actions/announcement';
import Menu from '../../components/Menu/Menu';
import AnnouncementForm from '../../components/Announcement/AnnouncementForm';
import Popover from '@material-ui/core/Popover';
import Footer from '../../components/Footer/Footer';

/*
const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});
*/


const fieldsId = {
  txtNewAnnouncementTitle: "title",
  txtNewAnnouncementMessage: "message",
  txtNewAnnouncementCategory: "category"
};

class AnnouncementAdmin extends Component {
  
  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {display:'false'};
  }

  componentDidMount() {
    this.props.getList();
    console.log("Mount");
  }

  handleDeleteClick = (id, index) => {
    this.props.deleteAnnouncement(id, index);
  };

  handleTextChange = (event) => {
    const {id, value} = event.target;
    this.setState({ [id]: value });
    console.log(id + "|" + value);
  };

  handleAddAnnouncementClick = (stateId, stateMessage, stateCategory) => {
    console.log("add clicked");
    console.log(stateId);
    console.log(stateMessage);
    console.log(this.state[stateId]);
    console.log(this.state[stateMessage]);
    this.props.addAnnouncement(this.state[stateId], this.state[stateMessage], this.state[stateCategory]);
}
state = {
  anchorEl: null,
};

handleClick = event => {
  this.setState({
    anchorEl: event.currentTarget,
  });
};

handleClose = () => {
  this.setState({
    anchorEl: null,
  });
};


  render() {

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(this.props)
    return (
        <React.Fragment>
            
            <Menu />
            <br/>
            <main>
              <div>
                <div>
                   <h3 className="h3" > Announcement Admin Panel</h3>
                </div> 
                  <br/>
                 <div className="wrapper">
                  <button 
                      className="styledButton"
                      aria-owns={open ? 'simple-popper' : undefined}
                      aria-haspopup="true"
                      variant="contained"
                      onClick={this.handleClick}
                      
                    >
                      Create new Announcement
                    </button>
                  </div>
                    <Popover
                      id="simple-popper"
                      open={open}
                      anchorEl={anchorEl}
                      onClose={this.handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                    
                        <AnnouncementForm
                                    handleAddAnnouncementClick={this.handleAddAnnouncementClick}
                                    handleTextChange={this.handleTextChange}  
                                    fieldsId={fieldsId}
                                    data={this.props.announcements}
                                  />
                      </Popover>
                 
                  
                </div>
               
              <AnnouncementTableAdmin
                    data={this.props.announcements} 
                    handleDeleteClick={this.handleDeleteClick}
                    state = {this.state}
                  />
              </main>
              <Footer />
        </React.Fragment>
        
    );
  }
  

}

const mapStateToProps=(state)=>{
  return {
      announcements: state.announcements
    };
};


export default connect(mapStateToProps,{getList,updateAnnouncement,addAnnouncement,closeNotification,deleteAnnouncement})(AnnouncementAdmin);
