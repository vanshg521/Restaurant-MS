import React from 'react';
import PropTypes from 'prop-types';
import AnnouncementTable from '../AnnouncementTable';


class AnnouncementAdmin extends React.Component {
  

  render() {
   return (
     <div>
       <AnnouncementTable/>
      </div>
    );
  }
}

AnnouncementAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AnnouncementAdmin;