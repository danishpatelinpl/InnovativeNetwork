import { Container, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
// import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
// import DigitalMobile from '../DigitalMarketing/DigitalMobile'
// import DevPic from '../../../../assets/images/devops/devPic.png'
import Pic1 from '../../../../assets/images/web/pic1.png'
import Pic2 from '../../../../assets/images/web/pic2.png'

import Web3Banner from './Web3Banner'

export default function Web() {

  const [MarketingDetailsList] = useState([
    {
      image: Pic1,
      smallHeading: 'Streamline the Operations',
      mainHeading: 'Unlock the Full Potential Of Web 3.0',
      content: "We provide a variety of Web 3.0 development services that are tailored to give your company an avant-garde experience. The professionals at Innovative Network develop unique applications based on your requirements utilizing advanced languages like Node, Python, etc. while guaranteeing full integration with your current environment, whether it be for a large-scale corporation, a startup idea, or a domain-specific web application.",
      
    },
    {
      image: Pic2,
      mainHeading: 'Evolution of Web Technologies',
      content: "Leverage the chance to move from Web 2.0 to Web 3.0 as an entrepreneur to offer cutting-edge solutions to your customers. Our team uses cutting-edge technologies to create distinctive and useful solutions. As a leading web 3.0 development firm, we make every effort to create progressive services that produce excellent outcomes.",
     
    },
  ]);

  return (
    <Stack
      bgColor={'#fff'}
      direction={'column-reverse'}
    >
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
        marginX={'auto'}
        transform={'translateY(-10%)'}
        zIndex={2}
      >
        {
          MarketingDetailsList.map(
            (v, i) =>
              <ServiceSubContentOne
                {...v}
                key={i}
                direction={(i % 2 === 0) ? 'row-reverse' : 'row'}
              />
          )
        }
      </Container>
      <Web3Banner />

    </Stack>
  )
}
