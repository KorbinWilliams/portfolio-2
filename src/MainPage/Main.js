import React from 'react';
import { Grid } from '@mui/material';
import MainCSS from './Main.module.css'

  function Main() {

    return (
      <Grid container className={MainCSS.background}>
        HELLO
        {/* <div style={styles.background}></div> */}
        {/* <img src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" /> */}
      </Grid>
    )
  }

export default Main