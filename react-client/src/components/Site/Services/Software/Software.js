import { Container, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import Pic1 from '../../../../assets/images/software/pic1.png'
import Pic2 from '../../../../assets/images/software/pic2.png'
import Pic3 from '../../../../assets/images/software/pic3.png'
import Pic4 from '../../../../assets/images/software/pic4.png'

import SoftwareBanner from './SoftwareBanner'

export default function Software() {

  const [MarketingDetailsList] = useState([
    {
      image: Pic1,
      smallHeading: 'Secure, Scalable, & Successful',
      mainHeading: 'Game Development',
      content: "Due to our expertise, passion for 3D game modeling, and use of cutting-edge technologies, we create engaging and eye-catching game models that amaze players and submerge them in virtual worlds beyond their wildest dreams. If you have an exceptional game idea and are in search of the right team to work on it then you’ve found the best one.",
   
    },
    {
      image: Pic2,
      smallHeading: 'Seamless Process & Execution',
      mainHeading: 'Mobile App Development',
      content: "We no longer say the future is digital because digitalization is already here and here to stay. At INPL, we strive to make the most of cutting-edge technology to build user-friendly and engaging mobile applications for a variety of platforms, including iOS and Android that will stay relevant in the years to come.",
      
    },
    {
      image: Pic3,
      smallHeading: 'Intelligent and Integrated',
      mainHeading: 'Web Development',
      content: "We have worked on a wide range of web development projects, from the exponentially expanding eCommerce sector to personal portfolio websites that exhibit talent to the world. Our web portals are enhanced with features like GPS tracking, Cloud Computing, IoT, augmented reality, and virtual reality, among many others.",
    
    },
    {
      image: Pic4,
      smallHeading: 'Addressing Complex Challenges',
      mainHeading: 'AR Application',
      content: "AR technology helps manufacturing businesses, hospitals, finance firms, merchants, and consumer apps thrive by creatively tackling complicated business obstacles. Our experts will identify the most effective solution to satisfy your business demands because they have an extensive understanding of the latest technology and multi-domain experience.",
      
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
        transform={'translateY(-4%)'}
        zIndex={2}
      >
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
      <SoftwareBanner />

    </Stack>
  )
}
