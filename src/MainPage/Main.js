import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import MainText from "./MainText";
import MainCSS from './Main.module.css'

  const Main = () => {
    const [page, setPage] = useState('about')

    return (
      <Grid container className={MainCSS.background}>
        {/* TODO SEPARATE INTO OTHER COMPONENTS*/}
        <Grid container alignContent="center" justifyContent="center" className={MainCSS.buttonRow} id="Button-Row">
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="About-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton} onClick={() => {setPage('about')}}>About</Button>
          </Grid>
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="Projects-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton} onClick={() => {setPage('projects')}}>Projects</Button>
          </Grid>
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="Contacts-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton} onClick={() => {setPage('contacts')}}>Contacts</Button>
          </Grid>
        </Grid>
        {/* TODO ADD TEXT BASED ON "PAGE", ON CHANGE FADE OUT OLD TEXT AND THEN FADE IN NEW TEXT */}
        <MainText page={page} id="Main-Text" />
      </Grid>
    )
  }

export default Main