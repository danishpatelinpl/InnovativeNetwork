import { Box, Container, Heading, Img, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import G1 from '../../../../assets/images/service/g1.png'
import G2 from '../../../../assets/images/service/g2.png'
import G3 from '../../../../assets/images/service/g3.png'
import G4 from '../../../../assets/images/service/g4.png'
import Story from '../../../../assets/images/service/story.png'
import Freaturedpost from '../../Freatured'
import Post from '../../../../assets/images/service/post1.jpg'

export default function Graphics() {


  const bheading = {
    base: {
      textTransform: 'uppercase',
      fontSize: '32px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '5px',
    },
    'md': {
      textTransform: 'uppercase',
      fontSize: '32px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '5px',
      lineHeight: '1.4'
    },
    '2xl': {
      textTransform: 'Capitalize',
      fontSize: '120px',
      display: 'flex',
      fontFamily: 'Gilmer',
      letterSpacing: '5px'
    }
  }


  const [GraphicsDetailsList] = useState([
    {
      image: G1,
      smallHeading: 'Identity and Access Management',
      mainHeading: 'branding products',
      content: "Our UI UX services move beyond the usual color combinations, graphics, and display to tell the story of each element that blends with the other, providing a rich User Experience. This contributes to extending your brand virtually to speak what business stands for. Our product research and strategy involve picking up ideas that are best in business, while our design strategy is backed by numbers. We commit ourselves to matching global standards and writing a new success story.",
    },
    {
      image: G2,
      smallHeading: 'Secure, scalable and always avaiable',
      mainHeading: 'Digital Strategy Service Design',
      content: "INPL’s team of experienced designers works on core wireframing that promises a smooth user experience. Our expert UX designers create a pattern library to use in building features, offering a quick way to articulate the position of elements and user workflow in building features, pages, and app components. We create quick mock-ups for client’s validation before scaling up. The back-and-forth feedback process is working continuously to improve our offerings and achieve end results efficiently by quick design iteration for high-fidelity prototypes.",
      bgColor: '#F6F6F6'
    },
    {
      image: G3,
      smallHeading: 'Intelligent & Integrated',
      mainHeading: 'Wireframing',
      content: "We can stay one step ahead of the competition thanks to our industry knowledge in the animation video department. Our value-driven animation method is straightforward but powerful. We combine compelling storytelling with the most pertinent images to produce engaging videos that effectively help brands express their stories.",
    },
    {
      image: G4,
      smallHeading: 'Intelligent & Integrated',
      mainHeading: 'Prototypes',
      content: "Our creative team conducts research and develops innovative concepts that push our preconceptions and expand our capacity for imagination. If you need the right kind of assistance in graphics and animations then we are just a call away. ",
      bgColor: '#F6F6F6'
    }
  ]);

  
  const [GraphicsNewsList] = useState(
    {
      smallHeading: 'Featured Content',
      largeHeading: 'Read up on what have we been upto',
      news: [
        {
          image: Post,
          title: 'The Emerging Star: Innovative Game Studio',
          label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
          link: '#'
        },
        {
          image: Post,
          title: 'Acceletrating your Digital transformation',
          label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
          link: '#'
        },
        {
          image: Post,
          title: 'Entrusted to deliver the best for our customers, everyday',
          label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
          link: '#'
        }
      ]
    }
  );


  return (
    <>
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}

      >
        <Stack>
          <HeadingContent heading={'UI & UX Designs'} behindHeading={'UI/UX'} />
        </Stack>
      </Container>
      {
        GraphicsDetailsList.map(
          (v, i) => {
            return (
              <Stack
                key={i}
                bgColor={'#fff'}
                py={12}
                backgroundColor={v?.bgColor ?? 'white.100'}
              >
                <Container
                  maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >

                  <ServiceSubContentOne
                    {...v}
                    direction={(i % 2 !== 0) ? 'row-reverse' : 'row'}
                    bgColor={(i % 2 !== 0) ? '#adadad' : '#fff'}
                  />
                </Container>
              </Stack >
            )
          })
      }

      <Stack pt={'12'}>
        <Container
          maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}

        >
          <Box mb={'6'} textAlign={'center'}>
            <Heading as='h5' fontSize={'16px'} pb={2} fontWeight={500} color={'primaryOrange.100'} >Optimize and manage your IT estate</Heading>
            <Heading pb={8} as='h3' size='lg' fontWeight={500}>How Storyboard Animation Concepts<br />Are <Text as={'span'} fontWeight={'bold'}>Design Initially.</Text></Heading>
            <Stack
              textAlign={'center'}
              justifyContent={'center'}
              direction={'row'}

            >
              <Heading marginLeft={'20px'} sx={useBreakpointValue(bheading)} color={'primaryOrange.100'}>STORY</Heading>
              <Heading
                className='stok2' sx={useBreakpointValue(bheading)}>
                BOARDING
              </Heading>

            </Stack>
          </Box>

        </Container>
        <Box transform={'translateY(-70px)'} borderTop={'8px solid #404040'} borderBottom={'8px solid #404040'}><Img src={Story} alt='' /></Box>
        {/* <Freaturedpost {...GraphicsNewsList} /> */}
      </Stack>

    </>
  )
}