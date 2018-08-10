import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  withStyles,
  Menu,
  MenuItem,
  Button,
  Typography,
  Toolbar,
  AppBar,
} from '@material-ui/core';
import { fetchTitle } from '../../reducers/App/app';
import headerStyle from '../../assets/jss/components/headerStyle';
import headers from '../../data/headers';
import snuLogo from '../../images/snu_logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, location } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: 'white', color: '#666' }}>
          <Toolbar>
            <img src={snuLogo} width="48" height="48" alt="snu" />
            <Typography variant="title" color="inherit" className={classes.flex}>
              &nbsp;Islab
            </Typography>
            {
              headers.map((h, index) => {
                let w = location.pathname.indexOf(h.title.toLowerCase()) > -1;
                if (location.pathname === '/' && h.title === 'Home') w = true;
                if (h.title === 'People') {
                  if (location.pathname === '/members') w = true;
                  if (location.pathname === '/alumni') w = true;
                }
                return (
                  h.dropDown ? (
                    <div key={index}>
                      <Button
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        style={{
                          color: w ? '#9ca2ad' : 'inherit'
                        }}
                        onClick={this.handleClick}
                      >
                        {h.title}
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                      >
                        {
                          h.pages.map((p, index2) => (
                            <Link key={index2} to={p.url} className={classes.navLink}>
                              <MenuItem onClick={this.handleClose}>
                                {p.title}
                              </MenuItem>
                            </Link>
                          ))
                        }
                      </Menu>
                    </div>
                  ) : (
                    <Link key={index} to={h.url} className={classes.navLink}>
                      <Button
                        style={{
                          color: w ? '#9ca2ad' : 'inherit'
                        }}
                      >
                        {h.title}
                      </Button>
                    </Link>
                  )
                )
              })
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  app: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTitle,
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(headerStyle)(Header)));
