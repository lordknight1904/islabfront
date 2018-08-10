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
import { Lens } from '@material-ui/icons';

class Teaching extends Component {
  componentDidMount() {
    const { app } = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }

  render() {
    const { classes, app } = this.props;
    return (
      <div className={classes.pageContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={8} xs={10}>
            <Paper className={classes.paperPadding} style={{ overflowX: 'scroll' }} elevation={8}>
              <Typography variant='headline' gutterBottom paragraph>
                TEACHING
              </Typography>
              <Typography variant='title' gutterBottom paragraph>
                Since 2010
              </Typography>

              <Table className={classes.table}>
                <TableBody>
                  {
                    app.course.map((subject, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {
                            subject.active ?
                              <Lens className={classes.activeIcon} /> :
                              <Lens className={classes.inactiveIcon} />
                          }
                        </TableCell>
                        <TableCell>{subject.code}</TableCell>
                        <TableCell>
                          {
                            subject.active ? (
                              <a href={`course/${subject.alias}`}>
                                {subject.name}
                              </a>
                            ) : (
                              subject.name
                            )
                          }
                          </TableCell>
                        <TableCell>{subject.time}</TableCell>
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

Teaching.propTypes = {
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
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(teachingStyle)(Teaching)));
