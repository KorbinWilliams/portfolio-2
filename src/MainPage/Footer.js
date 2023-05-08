import React from 'react'
import { Grid, Button } from '@mui/material'
import FooterCSS from './Footer.module.css'

// TODO // possible bar with two buttons. One that links to my linkedIn profile, and one that shows email address on hover and copies it to clipboard on click (with message stating "copied to clipboard")
const Footer = (props) => {

  return (
    <Grid container justifyContent="center" alignContent="center" className={FooterCSS.footerContainer}>
      <Grid container item className={FooterCSS.footerTop}></Grid>
      <Grid container item justifyContent="center" alignContent="center" className={FooterCSS.footerBottom}>
        <Grid container justifyContent="center" alignContent="center" item xs={2} className={FooterCSS.buttonContainer}>
          {/* TODO // links to my linkedIn profile */}
          <a href="https://www.linkedin.com/in/korbin-williams-7b433a199/" style={{height: '75%'}}>
            <Button className={FooterCSS.linkedInBtn}></Button>
          </a>
        </Grid>
        <Grid container justifyContent="center" alignContent="center" item xs={2} className={FooterCSS.buttonContainer}>
          {/* TODO // copies email address to clipboard on click (with message stating "copied to clipboard") */}
          <Button className={FooterCSS.emailBtn} onClick={() => {navigator.clipboard.writeText('1korbin.williams@gmail.com')}}></Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer