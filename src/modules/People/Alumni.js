import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import { fetchTitle, setHelmet } from '../../reducers/App/app';
import homeStyle from "../../assets/jss/components/homeStyle";
import { withRouter } from "react-router-dom";

class Alumni extends Component {
  componentDidMount() {
    const { app } = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }
  render() {
    const { classes, app } = this.props;
    return (
      <div className={classes.pageContainer} style={{ minHeight: 'calc(100vh - 184px)' }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={8} xs={10}>
            <Paper className={classes.paperPadding} style={{ overflowX: 'auto' }} elevation={8}>
              <Typography variant='headline' gutterBottom paragraph>
                Alumni
              </Typography>
              <Table className={classes.table}>
                <TableBody>
                  {
                    app.alumni.map((al, index) => (
                      <TableRow key={index} hover>
                        <TableCell style={{ width: '20%', textAlign: 'left' }}>{al.name}</TableCell>
                        <TableCell style={{ width: '20%', textAlign: 'center' }}>{`${al.title} (${al.year})`}</TableCell>
                        <TableCell style={{ width: '60%', textAlign: 'left' }}>{al.occupation}</TableCell>
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

Alumni.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(homeStyle)(Alumni)));
