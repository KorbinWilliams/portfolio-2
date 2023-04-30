import React from 'react';
import { Grid, Button } from '@mui/material';
import MainCSS from './Main.module.css'

  function Main(props) {

    if (props.page === 'about') {
      return (
        <div></div>
      )
    }
    else if (props.page === 'projects') {
      return (
        <div></div>
      )
    }
    else if (props.page === 'contacts') {
      return (
        <div></div>
      )
    }
  }

export default Main