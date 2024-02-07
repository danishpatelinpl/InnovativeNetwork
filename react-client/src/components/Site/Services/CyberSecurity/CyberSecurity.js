import { Container, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import GirlCoder from '../../../../assets/images/servicesIcon/girl.png'
import Seclock from '../../../../assets/images/service/ss2.png'

export default function CyberSecurity() {

  const [ServiceDetailsList] = useState([
    {
      image: GirlCoder,
      smallHeading: 'Identify and Devise',
      mainHeading: 'Risk Evaluation',
      content: "Our IT security services team locates all of your potential attack targets, comprehends the dangers involved with each aspect, works with you to determine which assets require the greatest security, and then creates a tailored road map with short- and long-term objectives. The exchange of personal data across various platforms necessitates increased vigilance and protective measures, which is why public-sector organizations and government agencies that provide numerous services across multiple channels to diverse groups of users will find this to be particularly helpful.",
    },
    {
      image: Seclock,
      smallHeading: 'Define, Protect, and Defend',
      mainHeading: 'Security Threat Management',
      content: "A cyber threat management system that has been automated and informed by AI can assist prevent the malicious activities that hackers are launching today. It provides the visibility security teams need to be successful. Through cyber risk management frameworks and proactive identification of known and undiscovered threats, our services may assist you in managing risks and predicting, detecting, and proactively eliminating them.",
    },
    {
      image: GirlCoder,
      smallHeading: 'Identity and Access Management',
      mainHeading: 'Application Security',
      content: "The most efficient way to guarantee that applications can survive a variety of cyber-attacks is to incorporate security implications throughout the software development life cycle. In order to undertake application security evaluations, our professionals in application security use specific tools. We employ dynamic analysis, manual tests, and other application security solutions as appropriate and necessary. ",
    }
  ]);

  const spara =
  {
    fontSize: '17px'
  }

  return (
    <Stack
      bgColor={'#fff'}
    >
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
      >
        <Stack>
          <HeadingContent heading={'Cyber Security'} behindHeading={'CS'} />
        </Stack>
        <Stack textAlign={'center'} mb={'5'} px={{base:0,lg:28}}>
          <Text fontSize={{base:14,lg:17}}>
          With the upheaval in the adoption of digital transformation, 
          automation, modernization, and cloud, businesses require Identity 
          and Access Management (IAM) more than ever. INPL functions 
          as an accelerator for your business transformation by
           providing a safe means to manage your identity landscape
           , privileges, and interaction
           across different organizations through the IAM model.
          </Text>
          <Text fontSize={{base:14,lg:17}}>
          We value your core business requirements hence our security specialists 
          design solutions specifically based on those that further define your 
          future state blueprint, create a transformation roadmap and enhance
           service outcomes. Our industry-centric nature defines your transformation strategy, 
          ensuring its smooth process down the lane and certifying accesses.
          </Text>
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
    </Stack>
  )
}
