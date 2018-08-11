import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTitle, setHelmet} from '../../reducers/App/app';
import {withStyles, Paper, Grid, Typography, Divider} from '@material-ui/core';
import biographyStyle from "../../assets/jss/components/biographyStyle";
import {withRouter} from "react-router-dom";
import bioBshim from '../../../src/assets/images/bioBshim.png';
import professor from '../../data/professor';

class Biography extends Component {
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
            <Paper className={classes.paperPadding} elevation={8}>
              <Grid container>
                <Grid item md={4} className={classes.imgWrap}>
                  <img src={bioBshim} alt='loading'/>
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
                </Grid>
                <Grid item md={12} style={{marginTop: '20px'}}>
                  <Typography variant='body1' align='justify'>
                    {professor.bio}
                  </Typography>
                </Grid>
              </Grid>
              <Divider style={{marginTop: '20px', marginBottom: '20px'}}/>
              <Grid container>
                <Grid item md={12}>
                  <a href={professor.curriculumVitae} target="_blank">
                    Curriculum Vitae
                  </a> (pdf)
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Biography.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(biographyStyle)(Biography)));
