// ##############################
// // // Header styles
// #############################

import {
  pageContainer,
  container,
  paperPadding,
} from "../theme";

const publicationStyle = theme => ({
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
  table: {
    marginBottom: '20px',
  }
});

export default publicationStyle;
