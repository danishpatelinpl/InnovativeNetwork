import React, { useEffect, useState } from 'react';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Splash from './components/Site/Splash'
import { TweenMax } from 'gsap'

function App() {

  const theme = extendTheme({
    colors: {
      white: {
        100: '#fff',
      },
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryGreen: {
        100: '#0bd46e',
      },
      bgGrays: {
        100: '#393939',
        200: '#2B2B2B',
        300: '#262626',
      },
      primaryOrange: {
        100: '#EF5A2A',
        200: '#EF5A2A33',
        300: '#a05d48d1'
      },
      primaryBlue: {
        100: '#1D6BB3'
      }
    },
    fonts: {
      body: "Montserrat', sans-serif",
      heading: "Montserrat', sans-serif",

    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('user') !== null) {
        let user = JSON.parse(localStorage.getItem('user') ?? '{}')
        dispatch(loadUser(user))
      } else if (Cookies.get('user') !== undefined) {
        let user = JSON.parse(Cookies.get('user') ?? '{}')
        dispatch(loadUser(user))
      }
    })();
  }, [])

  AOS.init();




  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;