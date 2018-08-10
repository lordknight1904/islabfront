import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTitle, setHelmet } from '../../reducers/App/app';
import {
  withStyles,
  Paper,
  Grid,
  Typography,
  Table,
  TableBody,
} from '@material-ui/core';
import publicationStyle from "../../assets/jss/components/publicationStyle";
import { withRouter } from "react-router-dom";
import Row from './Row';

class Publication extends Component {
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
                PUBLICATION
              </Typography>
              <Typography variant='body1' gutterBottom paragraph>
                Personal use of this material is permitted. However, permission to reprint/republish this material for
                advertising or promotional purposes or for creating new collective works for resale or redistribution to
                servers or lists, or to reuse any copyrighted component of this work in other works, must be obtained
                from the copyright holder.
              </Typography>

              <Typography variant='title' gutterBottom paragraph>
                Journal
              </Typography>
              <Table className={classes.table}>
                <TableBody>
                  {
                    app.journal.map((jr, index) => (
                      <Row detail={jr} index={index} key={index}/>
                    ))
                  }
                </TableBody>
              </Table>

              <Typography variant='title' gutterBottom paragraph>
                Conference
              </Typography>
              <Table className={classes.table}>
                <TableBody>
                  {
                    app.conference.map((jr, index) => (
                      <Row detail={jr} index={index} key={index}/>
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

Publication.propTypes = {
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
      fetchTitle,
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(publicationStyle)(Publication)));
