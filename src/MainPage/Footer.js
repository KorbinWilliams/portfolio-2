import React from 'react'
import { Grid, Button } from '@mui/material'
import FooterCSS from './Footer.module.css'

// TODO // possible bar with two buttons. One that links to my linkedIn profile, and one that shows email address on hover and copies it to clipboard on click (with message stating "copied to clipboard")
const Footer = (props) => {

  return (
    <Grid container justifyContent="center" alignContent="center" className={FooterCSS.footerContainer}>
      <Grid container item className={FooterCSS.footerTop}></Grid>
      <Grid container item justifyContent="center" alignContent="center" className={FooterCSS.footerBottom}>
        <Button>LinkedIn</Button>
        <Button>Email</Button>
      </Grid>
    </Grid>
  )
}

export default Footer