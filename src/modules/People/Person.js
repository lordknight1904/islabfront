import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTitle, setHelmet } from '../../reducers/App/app';
import { withStyles } from '@material-ui/core';
import personStyle from "../../assets/jss/components/personStyle";
import { withRouter } from "react-router-dom";
import Member from './Member';
import Alumni from './Alumni';

class Person extends Component {
  componentDidMount() {
    const { app } = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageContainer}>
        <Member />
        <Alumni />
      </div>
    );
  }
}

Person.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(personStyle)(Person)));
