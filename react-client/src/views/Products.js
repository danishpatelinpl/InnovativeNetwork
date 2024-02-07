import { Box, Container, Img, Stack, Text, Link, Icon, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Hrms from '../assets/images/products/hrms.png'
import Hrmsmobile from '../assets/images/products/hrmsmobile.png'
import Sociaty from '../assets/images/products/sociaty.png'
import S1 from '../assets/images/products/s1.png'
import S2 from '../assets/images/products/s2.png'
import S3 from '../assets/images/products/s3.png'
import ERP from '../assets/images/products/erp.png'
import ERP1 from '../assets/images/products/erp1.png'
import ERP2 from '../assets/images/products/erp2.png'
import ERPmobile from '../assets/images/products/erpmobile.png'
import Bms from '../assets/images/products/bms.png'
import Bms1 from '../assets/images/products/bms1.png'
import Bms2 from '../assets/images/products/bms2.png'
import Bms3 from '../assets/images/products/bms3.png'
import { Link as ReactLink } from 'react-router-dom'
import { RiShareBoxLine } from 'react-icons/ri'
import bannerDataURL from '../utilities/bannerDataURL'


export default function Products() {

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <Stack
                marginTop={'0 !important'}
                bgImage={bannerDataURL}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                bgAttachment={{ base: 'inherit', md: 'fixed' }}
                height={{ base: '40vh', md: '60vh' }}
                display={'flex'}
                justifyContent={'center'}
                position={'relative'}
                zIndex={'1'}
                _after={
                    {
                        content: '""',
                        position: 'absolute',
                        bg: '#ffffffd9',
                        w: '100%',
                        h: '100%',
                        zIndex: '-1'
                    }
                }
            >
                <MiniBanner simpleHeading={'Our'} strokeHeading={'Products'} marginLeft={true} />
            </Stack>
            <Stack bg={'#fff'}>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Stack gap={'8'} py={{ base: '6', lg: '28' }} alignItems={'center'} direction={{ base: 'column', lg: 'row' }}>
                        <Stack maxW={{ base: '100%', lg: '40%' }} gap={{ base: '4', lg: '8' }} textAlign={{ base: 'center', lg: 'left' }}>
                            <Img maxWidth={{ base: '150px', lg: '300px' }} marginX={{ base: 'auto', lg: 'unset' }} src={Hrms} alt={'hrms'} />
                            <Text
                                fontSize={{ base: '14px', lg: '17px' }}
                                lineHeight={{ base: '20px', lg: '50px' }}
                                textAlign={{ base: 'justify', lg: 'unset' }}
                            >
                                As a company's workforce grows, managing its human resources likewise becomes more challenging… and that is where Human Resource Management System comes in. HRMS has evolved into a crucial digital tool for organizing, administering, and carrying out the many tasks that human resources must perform. Our end-to-end Human Resources Management System (HRMS) software is developed with robust features for workflow automation, data analytics, and simplified employee management.
                            </Text>
                            
                        </Stack>
                        <Stack maxW={{ base: '90%', lg: '50%' }} >
                            <Img src={Hrmsmobile} alt={'hrms'} />
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Stack pb={{ base: '12', lg: '36' }}>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Stack direction={{ base: 'column', lg: 'row' }} mb={'16'} alignItems={'center'} gap={'8'}>
                        <Stack minW={{ base: '100%', lg: '50%' }}>
                            <Img maxWidth={{ base: '150px', lg: '400px' }} marginX={{ base: 'auto', lg: 'unset' }} src={Sociaty} alt={'hrms'} />
                        </Stack>
                        <Stack  minW={{ base: '100%', lg: '50%' }} borderLeft={{ base: '0px', lg: '1px solid #000' }} pl={{ base: '0', lg: '6' }}>
                            <Text
                                fontSize={{ base: '14px', lg: '16px' }}
                                lineHeight={{ base: '20px', lg: '40px' }}
                                textAlign={{ base: 'justify', lg: 'unset' }}
                            >
                                It is no secret that text message marketing can take your customers’ experience to the next level, then why are you missing out? Utilize the power of consumer data to design personalized experiences and provide 1:1 communications that go above and beyond what your customers anticipate… with Sociaaty
                            </Text>
                            <Link
                                href={'https://sociaaty.io/'}
                                target='_blank'
                                bg={'#BD2735'}
                                color={'#fff'}
                                fontSize={{ base: '14px', lg: '17px' }}
                                letterSpacing={'2px'}
                                py={{ base: '8px', lg: '15px' }}
                                px={'25px'}
                                borderRadius={'26'}
                                w={'fit-content'}
                            >Visit Site</Link>
                        </Stack>
                    </Stack>
                </Container>
                <Stack
                    direction={'row'}

                >
                    <Box
                        boxShadow='xl'
                        w={{ base: '100%', lg: 'unset' }}

                    >
                        <Img src={S1} alt={'sociaaty'} />
                    </Box>
                    <Box
                        display={{ base: 'none', lg: 'initial' }}
                        position={'relative'}
                        ml={'-30px'}
                        zIndex={'-1'}
                        boxShadow='2xl'
                    ><Img src={S2} alt={'sociaaty'} /></Box>
                    <Box
                        display={{ base: 'none', lg: 'initial' }}
                        position={'relative'}
                        ml={'-30px !important'}
                        zIndex={'-2'}
                        boxShadow='lg'
                    ><Img src={S3} alt={'sociaaty'} /></Box>
                </Stack>

            </Stack>
            <Stack bg={'#fff'} pb={{ base: '12', lg: '28' }}>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Stack direction={{ base: 'column', lg: 'row' }} mb={'16'} alignItems={'center'} gap={'8'}>
                        <Stack minW={{ base: '100%', lg: '50%' }}>
                            <Img maxWidth={{ base: '150px', lg: '400px' }} marginX={{ base: 'auto', lg: 'unset' }} src={ERP} alt={'hrms'} />
                        </Stack>
                        <Stack  minW={{ base: '100%', lg: '50%' }} borderLeft={{ base: '0px', lg: '1px solid #000' }} pl={{ base: '0', lg: '6' }}>
                            <Text
                                fontSize={{ base: '14px', lg: '16px' }}
                                lineHeight={{ base: '20px', lg: '40px' }}
                                textAlign={{ base: 'justify', lg: 'unset' }}
                            >
                                When developing and delivering highly functional, high-performance ERP systems that cover the majority of your organization's key business processes and operations, Innovative Network takes into account all best practices and contemporary principles. Our extremely efficient ERP software reduces manual tasks and increases automation to boost productivity.

                            </Text>
                            <Link
                                href={'https://testlink.erpcode.live/'}
                                target='_blank'
                                bg={'#BD2735'}
                                color={'#fff'}
                                fontSize={{ base: '14px', lg: '17px' }}
                                letterSpacing={'2px'}
                                py={{ base: '8px', lg: '15px' }}
                                px={'25px'}
                                borderRadius={'26'}
                                w={'fit-content'}
                            >Visit Site</Link>
                        </Stack>
                    </Stack>
                </Container>
                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                >
                    <Box
                        boxShadow='xl'
                        display={{ base: 'none', lg: 'initial' }}

                    ><Img src={ERP1} alt={'erp'} /></Box>
                    <Box
                        position={'relative'}
                        ml={'-12px !important'}
                        w={{ base: '100%', lg: 'unset' }}

                        boxShadow='2xl'

                    ><Img src={ERP2} alt={'erp'} /></Box>

                </Stack>

            </Stack>
            <Stack>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Stack direction={{ base: 'column', lg: 'row' }} mb={'16'} alignItems={'center'} gap={'8'}>
                        <Stack maxW={{ base: '100%', lg: '45%' }} textAlign={{ base: 'center', lg: 'left' }}>
                            <Heading textAlign={{ base: 'center', lg: 'left' }} fontSize={{ base: '26', lg: '42' }}><Text color={'primaryOrange.100'}>ERP</Text>Management System<br /> Mobile Application</Heading>
                            <Stack  minW={{ base: '100%', lg: '50%' }} borderLeft={{ base: '0px', lg: '1px solid #000' }} pl={{ base: '0', lg: '6' }}>

                                <Text
                                    fontSize={{ base: '14px', lg: '16px' }}
                                    lineHeight={{ base: '20px', lg: '40px' }}
                                    textAlign={{ base: 'justify', lg: 'unset' }}
                                >
                                    You might have been getting by with simple tools, but if your present software is restricting your potential to grow internationally and expand your market reach, it could be time for a more advanced ERP system. Have complete control over every aspect of your business with our ERP services.
                                </Text>
                                <Link as={ReactLink} to={'/'} fontWeight={'600'} color={'primaryOrange.100'}>Read More <Icon verticalAlign={'middle'} as={RiShareBoxLine}></Icon></Link>
                            </Stack>
                        </Stack>
                        <Stack maxW={{ base: '100%', lg: '55%' }} >
                            <Img src={ERPmobile} alt={'hrms'} />
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
            <Stack pb={'28'}>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Stack direction={{ base: 'column', lg: 'row' }} mb={'16'} alignItems={'center'} gap={'8'}>
                        <Stack minW={{ base: '100%', lg: '50%' }} textAlign={{ base: 'center', lg: 'left' }}>
                            <Img maxWidth={{ base: '150px', lg: '300px' }} marginX={{ base: 'auto', lg: 'unset' }} src={Bms} alt={'hrms'} />
                        </Stack>
                        <Stack textAlign={{ base: 'center', lg: 'left' }} maxW={{ base: '100%', lg: '50%' }} borderLeft={{ base: '0px', lg: '1px solid #000' }} pl={{ base: 0, lg: '6' }}>

                            <Text
                                fontSize={{ base: '14px', lg: '16px' }}
                                lineHeight={{ base: '20px', lg: '40px' }}
                                textAlign={{ base: 'justify', lg: 'unset' }}
                            >
                                Manage the record of your clients and event finances with our Banquet Management System (BMS). It enables banquet owners to have complete control over every facet of an event.
                            </Text>
                            <Link
                                href={'http://officenewbanquet.thebanquetsol.com/'}
                                target={'_blank'}
                                bg={'#0C205B'}
                                color={'#fff'}
                                fontSize={{ base: '12px', lg: '17px' }}
                                letterSpacing={'2px'}
                                py={{ base: '8px', lg: '15px' }}
                                px={'25px'}
                                borderRadius={'26'}
                                w={'fit-content'}
                            >Visit Site</Link>
                        </Stack>
                    </Stack>
                </Container>
                <Stack
                    direction={'row'}

                >
                    <Box
                        display={{ base: 'none', lg: 'initial' }}
                        boxShadow='xl'
                    ><Img src={Bms1} alt={'sociaaty'} /></Box>
                    <Box
                        position={'relative'}
                        ml={'-30px'}
                        w={{ base: '100%', lg: 'unset' }}
                        zIndex={'-1'}
                        boxShadow='2xl'
                    ><Img src={Bms3} alt={'sociaaty'} /></Box>
                    <Box
                        position={'relative'}
                        display={{ base: 'none', lg: 'initial' }}
                        ml={'-30px !important'}
                        zIndex={'-2'}
                        boxShadow='lg'
                    ><Img src={Bms2} alt={'sociaaty'} /></Box>
                </Stack>

            </Stack>
        </>
    )
}
