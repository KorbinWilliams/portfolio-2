import React from 'react';
import { Grid, Button } from '@mui/material';
import MainCSS from './Main.module.css'

  function Main() {

    return (
      <Grid container className={MainCSS.background}>
        {/* TODO SEPARATE INTO OTHER COMPONENTS*/}
        <Grid container alignContent="center" justifyContent="center" className={MainCSS.buttonRow} id="Button-Row">
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="About-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton}>About</Button>
          </Grid>
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="Projects-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton}>Projects</Button>
          </Grid>
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="Contacts-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton}>Contacts</Button>
          </Grid>
        </Grid>
        {/* TODO ADD TEXT BASED ON "PAGE", ON CHANGE FADE OUT OLD TEXT AND THEN FADE IN NEW TEXT */}
        <Grid container alignContent="center" justifyContent="center" className={MainCSS.textDisplay} id="Text-Display">

        </Grid>
      </Grid>
    )
  }

export default Main