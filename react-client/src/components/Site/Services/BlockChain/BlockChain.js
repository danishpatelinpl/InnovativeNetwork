import { Container, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import BC1 from '../../../../assets/images/service/bc1.png'
import BC2 from '../../../../assets/images/service/bc2.png'
import BlockChainBan from '../../UpperFooterBanner/BlockChainBan'

export default function BlockChain() {

  const [ServiceDetailsList] = useState([
    {
      image: BC1,
      smallHeading: 'Block Chain Core Element',
      mainHeading: 'Crypto Currency Financial',
      coloredMainHeading: 'Services',
      content: "Blockchain is revolutionizing how people live and conduct business, yet it merely serves as a tool to achieve a goal. We can assist you in using this technology to propel your future transformation. We begin by comprehending your unique goals before using blockchain innovation in a real-world setting. As opportunities emerge along the road, we move to the next step.",
     
    },
    {
      image: BC2,
      smallHeading: 'Define, Protect and Defend',
      mainHeading: 'How It',
      coloredMainHeading: 'Works',
      content: "To assist you to identify and prioritize your transformation, we'll analyze your goals and the applicability and commercial impact of blockchain technology. Each solution must integrate with existing systems in order to satisfy future demand, which is ensured by complex implementation management, third-party integration, and bespoke coding.",
    
    },
  ]);

  return (
    <Stack
      bgColor={'#fff'}
    >
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
      >
        <Stack>
          <HeadingContent heading={'Block Chain'} behindHeading={'BC'} />
        </Stack>
        {
          ServiceDetailsList.map(
            (v, i) =>
              <ServiceSubContentOne
                {...v}
                key={i}
                direction={(i % 2 !== 0) ? 'row-reverse' : 'row'}
              />
          )
        }
      </Container>
      <BlockChainBan />
    </Stack>
  )
}
