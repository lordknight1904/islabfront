import React from 'react';
import PropTypes from "prop-types";
import {
  TableRow,
  TableCell,
} from '@material-ui/core';

function Row({ ...props }) {
  const { detail, index } = props;
  return (
    <TableRow>
      <TableCell style={{ width: '10%' }}>{index + 1}</TableCell>
      <TableCell style={{ width: '30%' }}>{detail.authors.slice(0, -1).join(', ') + ' and ' + detail.authors.slice(-1)}</TableCell>
      <TableCell style={{ width: '30%' }}>
        {
          detail.pdfPath !== '' ? (
            <a href={detail.pdfPath} target="_blank">
              {detail.name}
            </a>
          ) : (
            detail.name
          )
        }
      </TableCell>
      <TableCell style={{ width: '30%' }}>{detail.submittedTo}</TableCell>
    </TableRow>
  )
}
Row.propTypes = {
  detail: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default Row;
