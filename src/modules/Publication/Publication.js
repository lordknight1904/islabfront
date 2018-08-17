import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTitle, setHelmet, setPublicationCurrentPage} from '../../reducers/App/app';
import {
  withStyles,
  Paper,
  Grid,
  Typography,
  Tabs,
  Tab,
  Table,
  TableRow,
  TableCell, TableBody, TableHead,
} from '@material-ui/core';
// import Table from '../../components/Table/Table';
import publicationStyle from "../../assets/jss/components/publicationStyle";
import {withRouter} from "react-router-dom";
// import {FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage} from "@material-ui/icons";

// import Row from './Row';

class Publication extends Component {
  state = {
    rowsPerPage: 5,
    type: 0,
  };
  handleChange = (event, value) => {
    console.log(value);
    this.setState({type: value});
  };
  decodePublished = (paper) => {
    switch (paper.published) {
      case '0': {
        return 'Submitted to ';
      }
      case '1': {
        return 'To appear in ';
      }
      default:
        return '';
    }
  };

  componentDidMount() {
    const {app} = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }

  render() {
    const {classes, app} = this.props;
    const {type} = this.state;
    const data = type === 0 ?
      app.journal.map((paper, index) => {
        const str1 = this.decodePublished(paper);
        const str2 = paper.submittedTo;
        const str3 = paper.detail ? `, ${paper.detail}` : '';
        return [
          {name: (index + 1).toString()},
          {name: paper.authors.slice(0, -1).join(', ') + ' and ' + paper.authors.slice(-1)},
          {name: paper.name, pdfPath: paper.pdfPath,},
          {name: str1 + str2 + str3},
        ]
      }) : app.conference.map((paper, index) => {
        const str1 = this.decodePublished(paper);
        const str2 = paper.submittedTo;
        const str3 = paper.detail ? `, ${paper.detail}` : '';
        return [
          {name: (index + 1).toString()},
          {name: paper.authors.slice(0, -1).join(', ') + ' and ' + paper.authors.slice(-1)},
          {name: paper.name, pdfPath: paper.pdfPath,},
          {name: str1 + str2 + str3},
        ]
      });
    return (
      <div className={classes.pageContainer} style={{minHeight: 'calc(100vh - 184px)'}}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={8} xs={10}>
            <Paper className={classes.paperPadding} style={{overflowX: 'auto'}} elevation={8}>
              <Typography variant='headline' gutterBottom paragraph>
                PUBLICATION
              </Typography>
              <Typography variant='body1' gutterBottom paragraph>
                Personal use of this material is permitted. However, permission to reprint/republish
                this material for
                advertising or promotional purposes or for creating new collective works for resale or
                redistribution to
                servers or lists, or to reuse any copyrighted component of this work in other works,
                must be obtained
                from the copyright holder.
              </Typography>

              <Tabs
                value={type}
                onChange={this.handleChange}
                style={{
                  marginBottom: '10px'
                }}
              >
                <Tab
                  label="Journal"
                />
                <Tab
                  label="Conference"
                />
              </Tabs>

              <Table className={classes.table}>
                <TableHead className={classes["primary" + "TableHeader"]}>
                  <TableRow>
                    {
                      ["Id", "Authors", "Title", ""].map((prop, key) => {
                        return (
                          <TableCell
                            className={classes.tableCell + " " + classes.tableHeadCell}
                            key={key}
                          >
                            {prop}
                          </TableCell>
                        );
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data
                      .map((pr, key) => {
                        return (
                          <TableRow key={key} hover>
                            {pr.map((prop, key2) => {
                              return (
                                <TableCell className={classes.tableCell} key={key2}>
                                  {
                                    prop.pdfPath !== '' ? (
                                      <a href={prop.pdfPath} target="_blank">
                                        {prop.name}
                                      </a>
                                    ) : (
                                      prop.name
                                    )
                                  }
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })
                  }
                </TableBody>
              </Table>

            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Publication.propTypes = {
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
      setPublicationCurrentPage,
    },
    dispatch,
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(publicationStyle)(Publication)));
