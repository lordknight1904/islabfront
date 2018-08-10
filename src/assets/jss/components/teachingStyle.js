// ##############################
// // // Header styles
// #############################

import {
  pageContainer,
  container,
  paperPadding,
} from "../theme";

const teachingStyle = theme => ({
  pageContainer,
  container,
  paperPadding,
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
  imgWrap: {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    margin: '0',
    "& img": {
      display: 'block',
      top: '50%',
      left: '50%',
      minHeight: '100%',
      minWidth: '100%',
      transform: 'translate(-50 %, -50 %)',
    }
  },
  activeIcon: {
    width: '15px',
    height: '15px',
    color: 'green',
  },
  inactiveIcon: {
    width: '15px',
    height: '15px',
    color: '#d60013',
  },
});

export default teachingStyle;
