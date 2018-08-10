import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  withStyles,
  Menu,
  MenuItem,
  Button,
  Typography,
  Toolbar,
  AppBar,
  Hidden,
  Drawer,
  List,
  ListItem,
  IconButton,
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
      open: false,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };

  render() {
    const { anchorEl, open } = this.state;
    const { classes, location } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: 'white', color: '#666' }}>
          <Toolbar>
            <img src={snuLogo} width="48" height="48" alt="snu" />
            <Typography variant="title" color="inherit" className={classes.flex}>
              &nbsp;Islab
            </Typography>
            <Hidden mdDown>
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
            </Hidden>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={() => this.setState({ open: !open })}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: 'drawerPaper',
          }}
        >
          <List component="nav">
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
                    <ListItem key={index}>
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
                    </ListItem>
                  ) : (
                    <ListItem key={index}>
                      <Link to={h.url} className={classes.navLink}>
                        <Button
                          style={{
                            color: w ? '#9ca2ad' : 'inherit'
                          }}
                          onClick={() => this.setState({ open: !open })}
                        >
                          {h.title}
                        </Button>
                      </Link>
                    </ListItem>
                  )
                )
              })
            }
          </List>
        </Drawer>
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
