import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

function Footer({ ...props }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        background: `#222`,
      }}
    >
      <Grid item md={10} sm={10} xs={10} lg={10} xl={10} style={{ paddingTop: '15px', paddingBottom: '15px' }}>
        <Typography variant='body1' align='center' style={{ color: '#636363'}}>
          Copyright 2018, Islab, Dept. of Electrical and Computer Engineering, Seoul National University.
        </Typography>
        <Typography variant='body1' align='center' style={{ color: '#636363'}}>
          08826 | #1117 Bldg. 301, 1 Gwanak-ro, Gwanak-gu, Seoul, Republic of Korea. | +82-2-880-8407
        </Typography>
        <Typography variant='body1' align='right' style={{ color: '#636363'}}>
          Powered by React
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
