import { Box, Container, Heading, Img, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import D1 from '../../../../assets/images/service/d1.png'
import D2 from '../../../../assets/images/service/d2.jpg'
import D3 from '../../../../assets/images/service/d3.png'
import D4 from '../../../../assets/images/service/process.jpg'
import Story from '../../../../assets/images/service/story.png'
import Post from '../../../../assets/images/service/post1.jpg'

export default function ThreeDeeModeling() {


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
      image: D1,
      smallHeading: 'Craft & Revamp',
      mainHeading: 'Design & Prototyping',
      content: "From the initial stages of ideation to the intricate details of prototyping, we work closely with you to ensure your vision is acquired with precision and creativity. With our expertise in various design disciplines and access to cutting-edge tools, we accelerate your product development process, transforming ideas into tangible prototypes. Embracing a collaborative approach, we value your input and iterate tirelessly to refine the design, ensuring it aligns seamlessly with your vision and exceeds your expectations. Our skilled designers serve as invaluable partners, helping you breathe life into your ideas and propel your product development process forward",
    },
    {
      image: D2,
      smallHeading: 'Unleash Your Imagination',
      mainHeading: 'Custom 3D Printing',
      content: "Our dedicated team specializes in delivering tailor-made solutions, ensuring that every product we create aligns perfectly with your unique specifications. With a deep understanding of the complexities of 3D printing, we bring your visions to life with precision and attention to detail. From personalized prototypes to customized and intricate designs, our state-of-the-art technology and expertise enable us to materialize your concepts into tangible reality. We work closely with you throughout the process, offering expert guidance and collaboration to ensure your complete satisfaction. Whether you're an individual, a small business, or a large corporation, our Custom 3D Printing services cater to your specific needs, delivering exceptional quality and unmatched versatility. Experience the limitless possibilities as we transform your ideas into remarkable, customized creations that surpass expectations. ",
      bgColor: '#F6F6F6'
    },
    {
      image: D3,
      smallHeading: 'Transforming Ideas Into Tangible Realities',
      mainHeading: '3D Printing Consulting',
      content: "We always go above and beyond to provide strategic guidance on integrating 3D printing seamlessly into your workflow, unlocking unparalleled efficiency and innovation. With deep industry knowledge and a profound understanding of the latest advancements in additive manufacturing, we offer tailored solutions to suit your specific needs. From assessing your current processes to identifying areas for optimization, we help you leverage the full potential of 3D printing technology. Take the first step towards unlocking your business's full potential. Give us a call today, and let our team of experts guide you towards unmatched efficiency, innovation, and success. Whether you have questions, require more information, or are eager to discuss your specific needs, we're here to assist you every step of the way.",
    },
    {
      image: D4,
      smallHeading: 'Analysis & Visualization',
      mainHeading: 'Our Process',
      content: "At Innovative Network, we follow a comprehensive, client-focused process. It initiates with a detailed consultation to understand your unique needs. Leveraging these insights, our designers create meticulous designs that serve as blueprints for your project. These designs are brought to life using our state-of-the-art 3D printers during the production stage. The final step is the prompt and safe delivery of your high-quality 3D printed products. Our process is meticulously designed to ensure your project's success from start to finish, with your satisfaction as our ultimate goal.",
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
          <HeadingContent heading={'3D Modeling'} behindHeading={'3D'} />
        </Stack>
      </Container>
      {
        GraphicsDetailsList.map(
          (v, i) => {
            return (
              <Stack
                key={i}
                bgColor={'#fff'}
                py={8}
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
{/* 
      <Stack pt={'12'}>
        <Container
          maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}

        >
          <Box mb={'6'} textAlign={'center'}>
            <Heading as='h5' fontSize={'16px'} pb={2} fontWeight={500} color={'primaryOrange.100'} >Optimize and manage your IT estate</Heading>
            <Heading pb={8} as='h3' size='lg' fontWeight={500}>How Storyboard 3D Model Concepts<br />Are <Text as={'span'} fontWeight={'bold'}>Design Initially.</Text></Heading>
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
      </Stack> */}

    </>
  )
}