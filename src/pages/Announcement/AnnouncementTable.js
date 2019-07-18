import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import { TableHead } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom'


import Menu from '../../components/Menu/Menu';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div >
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

let counter = 0;
function createData(title, message, category) {
  counter += 1;
  return { id: counter, title, message, category };
}


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
  
});

class AnnouncementTable extends React.Component {
  state = {
    rows: [
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
      createData('Drink menu', 'We gonna change new dirnk menu by next week','Menu'),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
     <div>
       <main>
         <Menu/>
         <div>
         <Button variant="contained" color="primary" className={classes.btnAdd} component={Link} to="/admin/createAnnouncement">
                Create new announcement
             </Button>
         </div>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
        <Typography variant="h6" id="tableTitle">
            Announcement
        </Typography>
          <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell font-size="16px">Title</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell >{row.message}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" className={classes.btnEdit}
                     component={Link} to="/admin/updateAnnouncement">Edit</Button>
                    <Button variant="contained" color="secondary" className={classes.btnDelete}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
      </main>
      </div>
    );
  }
}

AnnouncementTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnouncementTable);