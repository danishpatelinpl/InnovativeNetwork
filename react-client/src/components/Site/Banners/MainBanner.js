import { Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import SplitType from 'split-type'
import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Expertise from './Expertise'
import { updateBannerAnimationStatus } from '../../../reducers/useReducers'
import { useDispatch, useSelector } from 'react-redux'

export default function MainBanner() {

  const dispatch = useDispatch();
  const animationStatus = useSelector(state => state.bannerAnimationStatus)

  const transformHeadingRef = useRef(null);
  const businessHeadingRef = useRef(null);
  const digitalHeadingRef = useRef(null);

  const bheading = {
    base: {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: '52px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '2px',
    },
    'md': {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: '80px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '5px',
      lineHeight: '1.2'
    },
    'xl': {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: '100px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '5px',
    },
    '2xl': {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: '140px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '5px',
      lineHeight: '1.2'
    }
  }


  useEffect(() => {
    if (animationStatus) {
      new SplitType(transformHeadingRef.current)
      new SplitType(businessHeadingRef.current)
      new SplitType(digitalHeadingRef.current)

      // To bring all the letter one by one
      gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 1,
        duration: .6
      });

      // To display original circle
      gsap.to('#actualCircle', 1, {
        scale: 1,
        userSelect: 'initial',
        delay: 0.1
      });

      // Enable Mouse Pointer Hover Effect 
      setTimeout(() => {
        gsap.to('#transformId', 4, {
          delay: 1,
          pointerEvents: 'all',
          duration: 4
        });
      }, 4000);

    } else {
      // To break all letters 
      new SplitType(transformHeadingRef.current)
      new SplitType(businessHeadingRef.current)
      new SplitType(digitalHeadingRef.current)

      // To bring all the letter one by one
      gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 4.4,
        duration: .6
      });

      // To display original circle
      gsap.to('#actualCircle', 1, {
        scale: 1,
        userSelect: 'initial',
        delay: 3.4
      });

      // Enable Mouse Pointer Hover Effect 
      setTimeout(() => {
        gsap.to('#transformId', 4, {
          delay: 1,
          pointerEvents: 'all',
          duration: 4
        });
      }, 4000);
      dispatch(updateBannerAnimationStatus(true))
    }

    return;
  }, []);


  return (
    <>
      <Stack marginTop={'0 !important'}>
        <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
          <Stack
            direction={'column'}
            spacing={{ lg: '-50px', '2xl': '-70px' }}
            position={'relative'}
            display={{ base: 'none', md: 'flex' }}
          >
            <Heading pointerEvents={'none'} ref={transformHeadingRef} id='transformId' role='group' sx={useBreakpointValue(bheading)}>inn<Text
              id={'actualCircle'}
              display={'inline-block'}
              w={{ md: '58px', lg: '6.5%', '2xl': '7%' }}
              height={{ md: '58px', lg: '72px', '2xl': '100px' }}
              borderRadius={'50px'}
              border={{ md: '12px solid #fff', lg: '17px solid #fff', '2xl': '20px solid #fff' }}
              transition={'all 0.8s ease'}
              _groupHover={{
                w: '20%',
                borderColor: 'primaryOrange.100'
              }}
              as={'div'}
              position={'relative'}
              top={{ md: '-16px', lg: '-20px', '2xl': '-30px' }}
              transform={'scale(100)'}
              userSelect={'none'}
            >
            </Text>vate </Heading>
            <Heading className='stok' ref={businessHeadingRef} sx={useBreakpointValue(bheading)}>Business</Heading>
            <Heading ref={digitalHeadingRef} sx={useBreakpointValue(bheading)} >solutions</Heading>
          </Stack>
          <Stack
            direction={'column'}
            spacing={{ lg: '-50px', '2xl': '-70px' }}
            display={{ base: 'flex', md: 'none' }}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading pointerEvents={'none'} sx={useBreakpointValue(bheading)}>innovate </Heading>
            <Heading className='stok' sx={useBreakpointValue(bheading)}>Business</Heading>
            <Heading sx={useBreakpointValue(bheading)} >solutions</Heading>
          </Stack>
          <Stack
            pt={{base: 20, 'lg': '4', '2xl': 16}}
            pb={{base: 24, 'lg': '4', '2xl': 24}}
            position={'relative'}
            zIndex={20}
            display={{ base: 'none', md: 'flex' }}
          >
            <Expertise />
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
