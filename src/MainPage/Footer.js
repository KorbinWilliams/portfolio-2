import React, {useState} from 'react'
import { Grid, Button } from '@mui/material'
import FooterCSS from './Footer.module.css'

// NOTE // copies email address to clipboard, enables message stating so to appear, and then hides message after 2 seconds
const copyEmail = (setClipMsg) => {
  navigator.clipboard.writeText('1korbin.williams@gmail.com')
  setClipMsg(true)
  setTimeout(() => {setClipMsg(false)}, 1500)
}

// NOTE // Footer with two buttons; one to go to linkedIn profile, and one to copy email address to clipboard
const Footer = (props) => {
  const [clipMsg, setClipMsg] = useState(false)

  return (
    <Grid container justifyContent="center" alignContent="center" className={FooterCSS.footerContainer}>
      <Grid container justifyContent="center" alignContent="center" item className={FooterCSS.footerTop}>
        <Grid item xs={2}></Grid>
        <Grid container justifyContent="center" item xs={2}>
          <div className={clipMsg ? FooterCSS.clipMsgActive : FooterCSS.clipMsgInactive}>
            Email copied to clipboard!
          </div>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" alignContent="center" className={FooterCSS.footerBottom}>
        <Grid container justifyContent="center" alignContent="center" item xs={2} className={FooterCSS.buttonContainer}>
          {/* TODO // links to my linkedIn profile */}
          <a href="https://www.linkedin.com/in/korbin-williams-7b433a199/" style={{height: '75%'}}>
            <Button className={FooterCSS.linkedInBtn}></Button>
          </a>
        </Grid>
        <Grid container justifyContent="center" alignContent="center" item xs={2} className={FooterCSS.buttonContainer}>
          {/* TODO // copies email address to clipboard on click (with message stating "copied to clipboard") */}
          <Button className={FooterCSS.emailBtn} onClick={() => {copyEmail(setClipMsg)}}></Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer