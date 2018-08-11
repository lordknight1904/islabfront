// ##############################
// // // Header styles
// #############################

import {
  pageContainer,
  container,
  paperPadding,
} from "../theme";

const headerStyle = theme => ({
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
      width: '100%',
      height: 'auto',
      // minHeight: '100%',
      // minWidth: '100%',
    }
  },

});

export default headerStyle;
