import React from 'react';
import { Grid, Button } from '@mui/material';

  // TODO // Put components into components folder with singular components css module?
  const About = (props) => {

    return (
      <Grid container justifyContent="center">
        <Grid container item xs={6}>
          {/* TODO // personal picture */}
        </Grid>
        <Grid container item xs={6}>
          {/* TODO // about "pages", i.e. general, career, personal-interests */}
        </Grid>
        <Grid container item xs={11}>
          {/* TODO // displayed info. To scroll or not to scroll? */}
        </Grid>
      </Grid>
    )
  }

export default About