import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MainBanner from '../../components/Site/Banners/MainBanner'
import Locations from '../../components/Site/Locations'
import TransformBall from '../../components/Site/TransformBall'
import Services from '../../components/Site/Services'
import Milestone from '../../components/Site/Milestone/index.js'
import Activity from '../../components/Site/Activities'
import Storiessilder from '../../components/Site/Stories/index.js'
import Clients from '../../components/Site/Clients'
import AboutComp from '../../components/Site/About'
import bannerDataURL from '../../utilities/bannerDataURL'
import Splash from '../../components/Site/Splash'
export default function Index() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  
  return (
    <>
    <Splash />
            <Stack
              marginTop={'0 !important'}
              bgImage={bannerDataURL}
              bgSize={'cover'}
              bgRepeat={'no-repeat'}
              bgPosition={'center'}
              bgAttachment={{ base: 'inherit', md: 'fixed' }}
              pt={{ base: '140px', md: '150px' }}
              pb={{ base: '80px', md: '70px' }}
              display={'flex'}
              justifyContent={{ base: 'center', md: 'flex-end' }}
              position={'relative'}
              zIndex={'1'}
              _after={
                {
                  content: '""',
                  position: 'absolute',
                  bg: '#000000ad',
                  w: '100%',
                  h: '100%',
                  zIndex: '-1',
                  bottom: '0'
                }
              }
            >
              <MainBanner />
            </Stack>
            <Services />
            <AboutComp />
            <Milestone />
            <Activity />
            <Storiessilder />
            <Clients />
            <TransformBall />
            <Locations />

    </>
  )
}
