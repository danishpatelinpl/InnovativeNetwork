import { Container, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import DigitalMobile from './DigitalMobile'
import SocialPic from '../../../../assets/images/digital/social.png'
import MobileImage from '../../../../assets/images/digital/mobile.svg'
import World from '../../../../assets/images/digital/world.png'

export default function DigitalMarketing() {

  const [MarketingDetailsList] = useState([
    {
      image: SocialPic,
      smallHeading: 'Define, Protect and Defend',
      mainHeading: 'Creating Awareness',
      content: "A strong, distinct brand is an essential component of any successful organization, regardless of size or industry. Innovative Network works to ensure that your company's voice is represented through a powerful brand identity. We strive to go above and beyond our customers' expectations and show them the way to success. Our team of friendly specialists will work with you to improve your web presence, drive traffic, and develop long-term customer relationships.",
     
    },
    {
      image: World,
      mainHeading: 'Role & Responsibilities',
      content: "Your business deserves better than a strategy that has been used multiple times and does not produce results. Therefore, the roadmap we create for you is based on unique information about your starting point, your goals, and any possible opportunities - all of which are influenced by the confidential evaluation we conduct prior to any contract being signed.",
      
    },
  ]);

  const [MoreContent] = useState({
    image: MobileImage,
    heading: 'Digital Analytics',
    label: 'Innovative Network is a house of digital mastery. We are constantly learning about the current trends and enhancing our services, including design and development, in order to maintain our high standards. It not only improves the skills of our employees, but it also increases client satisfaction. We have a dedicated and creative team of strategists, developers, designers, and writers who deliver nothing less than excellent work.'
  });

  return (
    <Stack
      bgColor={'#fff'}
    >
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
      >
        <Stack>
          <HeadingContent heading={'Digital Marketing'} behindHeading={'DM'} />
        </Stack>
        <Stack>
          <DigitalMobile {...MoreContent} />
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
