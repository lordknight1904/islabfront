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
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';
import homeStyle from "../../assets/jss/components/homeStyle";
import { withRouter } from "react-router-dom";

class Member extends Component {
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
                Members
              </Typography>
              <Typography variant='subheading' gutterBottom paragraph>
                Members of Information System Laboratory
              </Typography>
              <Table className={classes.table}>
                <TableBody>
                  {
                    app.member.map((mem, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ width: '20%', textAlign: 'center', padding: '4px 10px' }}>
                          <img
                            src={mem.imagePath}
                            style={{
                              height: '125px',
                              width: '100px',
                            }}
                            alt="member"
                          />
                        </TableCell>
                        <TableCell style={{ width: '80%', textAlign: 'left', padding: '4px 10px' }}>
                          <div>
                            <a href={`mailto:${mem.email}`}>
                              {mem.name}
                            </a>
                            {
                              mem.profilePage !== '' ? (
                                <a href={mem.profilePage} target="_blank">
                                  &nbsp;&nbsp;[homepage]
                                </a>
                              ) : null
                            }
                          </div>
                          <div>
                            {`[${mem.field}]`}
                          </div>
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

Member.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(homeStyle)(Member)));
