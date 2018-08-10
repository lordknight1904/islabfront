import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHelmet } from '../../reducers/App/app';
import {
  withStyles,
  Paper,
  Grid,
  Typography,
  Table,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';
import teachingStyle from "../../assets/jss/components/teachingStyle";
import { withRouter } from "react-router-dom";
import { fetchCourseByAlias } from '../../reducers/App/app';
import professor from '../../data/professor';

class Detail extends Component {
  state = {
    detail: {},
  };

  componentDidMount() {
    const { app, location } = this.props;
    const pathname = location.pathname;
    this.props.setHelmet(app.appName, app.appName);
    this.props.fetchCourseByAlias(pathname.slice(pathname.lastIndexOf('/') + 1)).then(res => {
      const detail = {
        active: res.active,
        code: res.code,
        alias: res.alias,
        name: res.name,
        time: res.time,
        teachingAssistants: res.teachingAssistants,
        teachingTime: res.teachingTime,
        preference: res.preference,
        textbook: res.textbook,
        materials: res.materials,
      };
      this.setState({ detail });
    });
  }

  render() {
    const { classes } = this.props;
    const { detail } = this.state;
    if (!detail.hasOwnProperty('name')) return null;
    return (
      <div className={classes.pageContainer}>
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Paper className={classes.paperPadding} elevation={8}>
              <Typography variant='headline' align="center" gutterBottom paragraph>
                {`${detail.code}: ${detail.name}`}
              </Typography>
              <Typography variant='headline' align="center" gutterBottom paragraph>
                {`Seoul National University, ${detail.time}`}
              </Typography>
              <Typography variant='title' gutterBottom>
                Lectures:
              </Typography>
              <Typography variant='subheading' gutterBottom paragraph>
                {detail.teachingTime}
              </Typography>
              <Typography variant='title' gutterBottom>
                Lecturer:
              </Typography>
              <Typography variant='subheading' gutterBottom paragraph>
                <a href={`mailto:${professor.email}`}>{professor.name}</a>
                {` (${professor.office}, Tel: ${professor.phone}, Email: `}
                <a href={`mailto:${professor.email}`}>{professor.email}</a>
              </Typography>
              <Typography variant='title' gutterBottom>
                Teaching Assistants:
              </Typography>
              {
                detail.teachingAssistants.map((ta, index) => (
                  <Typography key={index} variant='subheading' gutterBottom paragraph>
                    <a href={`mailto:${ta.email}`}>{ta.name}</a>
                    {` (${ta.address}, Email: `}
                    <a href={`mailto:${ta.email}`}>{ta.email}</a>)
                  </Typography>
                ))
              }
              {
                detail.textbook.map((tb, index) => (
                  <Typography key={index} variant='subheading' gutterBottom>
                    {tb}
                  </Typography>
                ))
              }
              {
                detail.textbook.length > 0 ? (
                  <Typography variant='title' gutterBottom>
                    Textbook: {detail.textbook.length === 0 ? 'NO main textbook' : ''}
                  </Typography>
                ) : null
              }
              {
                detail.preference.length > 0 ? (
                  <Typography variant='title' gutterBottom>
                    Reference
                  </Typography>
                ) : null
              }
              {
                detail.preference.map((rf, index) => (
                  <Typography key={index} variant='subheading' gutterBottom
                              paragraph={index === detail.preference.length - 1}>
                    {rf}
                  </Typography>
                ))
              }
              <Typography variant='title' gutterBottom>
                Course Materials (Syllabus, Exam, Homework, and Solution):
              </Typography>

              <Table className={classes.table}>
                <TableBody>
                  {
                    detail.materials.map((ma, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <a href={ma.filePath} target="_blank">{ma.name}</a>
                        </TableCell>
                        <TableCell>
                          {
                            (ma.hasOwnProperty('solutionPath') && ma.solutionPath !== '') ? (
                              <a href={ma.solutionPath} target="_blank">Solution</a>
                            ) : ''
                          }
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Detail.propTypes = {
  app: PropTypes.object.isRequired,
  setHelmet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setHelmet,
      fetchCourseByAlias,
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(teachingStyle)(Detail)));
