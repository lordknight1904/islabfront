// ##############################
// // // Header styles
// #############################

import {} from "../theme";

const headerStyle = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
    border: '0',
    outline: '0 !important'
  }
});

export default headerStyle;
