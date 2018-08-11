import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTitle, setHelmet} from '../../reducers/App/app';
import {withStyles, Paper, Grid, Typography } from '@material-ui/core';
import homeStyle from "../../assets/jss/components/homeStyle";
import {withRouter} from "react-router-dom";
import homeBshim from '../../../src/assets/images/homeBshim.jpg';
import professor from '../../data/professor';

class Home extends Component {
  componentDidMount() {
    const {app} = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.pageContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={8} xs={10}>
            <Paper className={classes.paperPadding}>
              <Grid container>
                <Grid item md={4} className={classes.imgWrap}>
                  <img src={homeBshim} alt='loading' width="300" height="400"/>
                </Grid>
                <Grid item md={8} style={{ paddingLeft: '20px' }}>
                  <Typography variant='headline' gutterBottom paragraph>
                    {professor.name}
                  </Typography>
                  <Typography variant='title' gutterBottom>
                    {professor.title}
                  </Typography>
                  <Typography variant='subheading' gutterBottom>
                    {professor.university.department}
                  </Typography>
                  <Typography variant='subheading' gutterBottom paragraph>
                    <a href={professor.university.URL} target="_blank">
                      {professor.university.name}
                    </a>
                  </Typography>
                  <Typography variant='title' gutterBottom>
                    {professor.lab.title}
                  </Typography>
                  <Typography variant='subheading' gutterBottom paragraph>
                    {professor.lab.name}
                  </Typography>
                  <Typography variant='subheading' gutterBottom paragraph>
                    {professor.workAddress}
                  </Typography>
                  <Typography variant='subheading' gutterBottom paragraph>
                    Tel: {professor.phone}
                  </Typography>
                  <Typography variant='subheading' gutterBottom paragraph>
                    Email: {professor.email}
                  </Typography>
                </Grid>
                <Grid item md={12} style={{marginTop: '20px'}}>
                  <Typography variant='subheading' gutterBottom paragraph align='justify'>
                    {professor.description}
                  </Typography>
                  <Typography variant='subheading' gutterBottom paragraph>
                    <a href={professor.recruit} target="_blank">
                      Postdoc and graduate student positions available
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
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
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(homeStyle)(Home)));
