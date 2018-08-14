import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTitle, setHelmet, setPublicationCurrentPage} from '../../reducers/App/app';
import {
  withStyles,
  Paper,
  Grid,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import Table from '../../components/Table/Table';
import publicationStyle from "../../assets/jss/components/publicationStyle";
import {withRouter} from "react-router-dom";

// import Row from './Row';

class Publication extends Component {
  state = {
    rowsPerPage: 5,
    type: 0,
  };
  handleChange = (event, value) => {
    console.log(value);
    this.setState({type: value});
  };
  handleChangePublicationPage = (event, page) => {
    this.props.setPublicationCurrentPage(page);
  };
  handleChangePublicationRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
  handleFirstPublicationPageButtonClick = event => {
    this.handleChangePublicationPage(event, 0);
  };
  handleLastPublicationPageButtonClick = event => {
    const {app} = this.props;
    const {rowsPerPage, type} = this.state;
    this.handleChangePublicationPage(
      event,
      Math.max(0, Math.ceil(type === 0 ? app.journal.length / rowsPerPage : app.conference.length / rowsPerPage) - 1),
    );
  };
  handlePublicationBackButtonClick = event => {
    this.handleChangePublicationPage(event, this.props.page - 1);
  };
  handlePublicationNextButtonClick = event => {
    this.handleChangePublicationPage(event, this.props.page + 1);
  };
  decodePublished = (paper) => {
    switch (paper.published) {
      case '0': {
        return 'Submitted to ';
      }
      case '1': {
        return 'Accepted to ';
      }
      default:
        return '';
    }
  };

  componentDidMount() {
    const {app} = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }

  render() {
    const {classes, app} = this.props;
    const {type} = this.state;
    const data = type === 0 ?
      app.journal.map((paper, index) => {
        const str1 = this.decodePublished(paper);
        const str2 = paper.submittedTo;
        const str3 = paper.detail ? `, ${paper.detail}` : '';
        return [
          (index + 1).toString(),
          paper.authors.slice(0, -1).join(', ') + ' and ' + paper.authors.slice(-1),
          paper.name,
          str1 + str2 + str3,
        ]
      }) : app.conference.map((paper, index) => {
        const str1 = this.decodePublished(paper);
        const str2 = paper.submittedTo;
        const str3 = paper.detail ? `, ${paper.detail}` : '';
        return [
          (index + 1).toString(),
          paper.authors.slice(0, -1).join(', ') + ' and ' + paper.authors.slice(-1),
          paper.name,
          str1 + str2 + str3,
        ]
      });
    return (
      <div className={classes.pageContainer} style={{ minHeight: 'calc(100vh - 184px)' }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={8} xs={10}>
            <Paper className={classes.paperPadding} style={{overflowX: 'auto'}} elevation={8}>
              <Typography variant='headline' gutterBottom paragraph>
                PUBLICATION
              </Typography>
              <Typography variant='body1' gutterBottom paragraph>
                Personal use of this material is permitted. However, permission to reprint/republish
                this material for
                advertising or promotional purposes or for creating new collective works for resale or
                redistribution to
                servers or lists, or to reuse any copyrighted component of this work in other works,
                must be obtained
                from the copyright holder.
              </Typography>

              <Tabs
                value={type}
                onChange={this.handleChange}
              >
                <Tab
                  label="Journal"
                />
                <Tab
                  label="Conference"
                />
              </Tabs>

              <Table
                tableHeaderColor="primary"
                tableHead={["Id", "Authors", "Title", ""]}
                loading={false}
                tableData={data}
                page={app.publicationCurrentPage}
                rowsPerPage={this.state.rowsPerPage}
                handleChangePage={this.handleChangePublicationPage}
                handleChangeRowsPerPage={this.handleChangePublicationRowsPerPage}
                handleFirstPageButtonClick={this.handleFirstPublicationPageButtonClick}
                handleBackButtonClick={this.handlePublicationBackButtonClick}
                handleNextButtonClick={this.handlePublicationNextButtonClick}
                handleLastPageButtonClick={this.handleLastPublicationPageButtonClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Publication.propTypes = {
  app: PropTypes.object.isRequired,
  setHelmet: PropTypes.func.isRequired,
};

const mapStateToProps = ({app}) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setHelmet,
      fetchTitle,
      setPublicationCurrentPage,
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(publicationStyle)(Publication)));
