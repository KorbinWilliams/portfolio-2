import React, { useState } from 'react'
import { Grid, Button } from '@mui/material'
import MainText from './MainText'
import MainCSS from './Main.module.css'
import Footer from './Footer'

  const Main = () => {
    const [page, setPage] = useState('')

    return (
      <Grid container justifyContent="center" alignContent="center" className={MainCSS.background}>
        {/* TODO // SEPARATE INTO OTHER COMPONENTS*/}
        <Grid container alignContent="center" justifyContent="center" className={MainCSS.buttonRow} id="Button-Row">
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="About-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton} onClick={() => {setPage('about')}}>About</Button>
          </Grid>
          <Grid container justifyContent="center" alignContent="center" item xs={3} className={MainCSS.mainButtonContainer} id="Projects-Button">
            <Button type="button" disableRipple={true} className={MainCSS.pageButton} onClick={() => {setPage('projects')}}>Projects</Button>
          </Grid>
        </Grid>
        {/* TODO // ADD TEXT BASED ON "PAGE", ON CHANGE FADE OUT OLD TEXT AND THEN FADE IN NEW TEXT */}
        <Grid container justifyContent="center" alignContent="center" item xs={10} className={MainCSS.textContainer}>
          <MainText page={page} id="Main-Text" />
        </Grid>
        <Grid container justifyContent="center" alignContent="center" className={MainCSS.footer}>
          <Footer />
        </Grid>
      </Grid>
    )
  }

export default Main