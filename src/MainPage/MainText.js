import React from 'react';
import { Grid, Button } from '@mui/material';
import About from './About'
import Contacts from './Contacts'
import Projects from './Projects'
import MainTextCSS from './MainText.module.css'

  // TODO // Put components into components folder with singular components css module?
  const MainText = (props) => {
    const { page } = { ...props }

    if (page === 'about') {
      return (
        <About />
      )
    }
    else if (page === 'contacts') {
      return (
        <Contacts />
      )
    }
  }

export default MainText