import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Header/Footer';
import CustomHelmet from './CustomHelmet/CustomHelmet';
import paths from './paths';
import { fetchConference, fetchJournal, fetchGraduated, fetchMember, fetchSubject } from '../reducers/App/app';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchMember();
    this.props.fetchGraduated();
    this.props.fetchConference();
    this.props.fetchJournal();
    this.props.fetchSubject();
  }

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(109,58,0,0.08)', minHeight: '100vh' }}>
        <CustomHelmet />
        <Header key="header" />
        <Switch key="switch">
          {
            paths.map((prop, key) => (
              <Route path={prop.url} exact={prop.exact} component={prop.component} key={key} />
            ))
          }
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  fetchConference: PropTypes.func.isRequired,
  fetchJournal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchGraduated,
      fetchMember,
      fetchConference,
      fetchJournal,
      fetchSubject,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);
