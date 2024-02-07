import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react';
import AboutNumberBox from './AboutNumberBox';
import abtFullBg from '../../../assets/images/abtFullBg.png'

export default function AboutComp({ extraPurposeContent, extraContent, noAbout }) {

    const [TotalContent] = useState({
        aboutHeading: 'About Us',
        aboutContent: "Founded in 2016, INPL is a full-service, technology-driven IT market leader that highly promotes ideas, entrepreneurship, and invention. Through expertise in AI, INPL enable national and international organizations and innovative scale-ups to create and execute their business strategies on a global scale.",
        purposeHeading: 'Our Purpose',
        purposeContent: 'We aspire to be a leader in technology-based business solutions capable of eliciting an, unconditional response from the target market.',
        boxData: [
            {
                numbers: '3000',
                label: 'Successful projects',
            },
            {
                numbers: '470',
                label: 'Active Clients',
            },
            {
                numbers: '500',
                label: 'Employees we have',
            }
        ]
    });
  

    return (
        <Stack
            pt={'30px'}
            textAlign={'center'}
            bgPosition={'right'}
            marginTop={'0 !important'}
            bgColor={'white.100'}
        >
            <Stack>
                <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                    <Stack
                        mb={{ base: '20px', md: '60px' }}
                    // borderTop={'2px dashed #5353535c'}
                    >
                        <Box
                            display={noAbout ? 'none' : 'initial'}
                            overflow={'hidden'}
                        >
                            <Heading
                                className='blueStroke'
                                fontFamily={'Gilmer'}
                                fontSize={{ base: '75', md: '140' }}
                                transform={{ base: 'translateY(33px)', md: 'translateY(50px)' }}
                            >
                                {TotalContent.aboutHeading}
                            </Heading>
                        </Box>
                        <Text
                            py={4}
                            color={'#535353'}
                            fontSize={{ base: '12px', md: '20px' }}
                            fontWeight={400}
                            lineHeight={'1.6'}
                            data-aos={'fade-in'}
                            data-aos-delay={300}
                        >
                            {TotalContent.aboutContent}
                        </Text>
                        {
                            extraContent && 
                            <Text
                                py={4}
                                color={'#535353'}
                                fontSize={{ base: '12px', md: '20px' }}
                                fontWeight={400}
                                lineHeight={'1.6'}
                                data-aos={'fade-in'}
                                data-aos-delay={300}
                            >
                                {extraContent}
                            </Text>
                        }
                    </Stack>
                    <Stack
                        direction={'row'}
                        alignItems={'flex-start'}
                        justifyContent={'space-between'}
                        spacing={0}
                        flexWrap={{ base: 'wrap', md: 'nowrap' }}
                    >
                        {
                            TotalContent.boxData.map((v, i) => <AboutNumberBox key={i} {...v} />)
                        }
                    </Stack>
                    <Stack
                        mb={{ base: '20px', md: '60px' }}
                    >
                        <Box
                            overflow={'hidden'}
                        >
                            <Heading
                                className='blueStroke'
                                fontFamily={'Gilmer'}
                                fontSize={{ base: '55', md: '80', lg: '140' }}
                                transform={{ base: 'translateY(25px)', md: 'translateY(30px)' }}
                            >
                                {TotalContent.purposeHeading}
                            </Heading>
                        </Box>
                        {
                            extraPurposeContent &&
                            <Text
                                pt={4}
                                color={'#535353'}
                                fontSize={{ base: '12px', md: '18px', lg: '20px' }}
                                fontWeight={400}
                                lineHeight={'1.6'}
                                data-aos={'fade-in'}
                                data-aos-delay={300}
                            >
                                {extraPurposeContent?.split(',')[0]}
                                ,<br />
                                {extraPurposeContent?.split(',')[1]}
                            </Text>
                        }
                        <Text
                            py={4}
                            color={'#535353'}
                            fontSize={{ base: '12px', md: '18px', lg: '20px' }}
                            fontWeight={400}
                            lineHeight={'1.6'}
                            data-aos={'fade-in'}
                            data-aos-delay={300}
                        >
                            {TotalContent.purposeContent.split(',')[0]}
                            ,<br />
                            {TotalContent.purposeContent.split(',')[1]}
                        </Text>
                    </Stack>
                   
                </Container>
            </Stack>
        </Stack>
    )
}
