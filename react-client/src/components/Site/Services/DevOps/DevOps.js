import { Container, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import DigitalMobile from '../DigitalMarketing/DigitalMobile'
import DevPic from '../../../../assets/images/devops/devPic.png'
import GirlCoder from '../../../../assets/images/servicesIcon/girl.png'

export default function DevOps() {

  const [MarketingDetailsList] = useState([
    {
      image: GirlCoder,
      smallHeading: 'Where Technology Meets',
      mainHeading: 'Dev Ops Works',
      content: "Knowing what digital capabilities your company already possesses is critical to determining where you need to head and where you require assistance. INPL's DevOps services power organizations to achieve success in their digital transformation with holistic value addition. Our DevOps team brings expert know-how and engineering talent to deliver on the investment of DevOps and transformation.",
     
    },
  ]);

  const [MoreContent] = useState({
    image: DevPic,
    heading: 'Modern Application Delivery',
    label: 'Most businesses are exploring DevOps strategies to move faster and more flexibly in application development, testing, and QA in the new digital age. They are attempting to reduce release cycles and get improvements into production more quickly.'
  });

  return (
    <Stack
      bgColor={'#fff'}
    >
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
      >
        <Stack>
          <HeadingContent heading={'Dev Ops'} behindHeading={'DEVOPS'} />
        </Stack>
        <Stack>
          <DigitalMobile size={'80%'} {...MoreContent} />
        </Stack>
        {
          MarketingDetailsList.map(
            (v, i) =>
              <ServiceSubContentOne
                {...v}
                key={i}
                direction={(i % 2 !== 0) ? 'row-reverse' : 'row'}
              />
          )
        }
      </Container>
      
    </Stack>
  )
}
