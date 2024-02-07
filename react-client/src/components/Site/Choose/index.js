import { Box, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import Dev from '../../../assets/images/aboutPg/dev.png'
import Web from '../../../assets/images/aboutPg/web.jpg'
import Digital from '../../../assets/images/aboutPg/digital.jpg'


export default function Choose() {

    const bheading = {
        base: {
            textTransform: 'uppercase',
            fontSize: '24px',
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
            fontSize: '54px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '5px'
        }
    }

    const [ChoosePercentage] = useState([
        {
            bgImage: Dev,
            BorderColor: '#1A5DA0',
            title: 'Development',
            percentage: '82%'
        },
        {
            bgImage: Digital,
            BorderColor: '#E65729',
            title: 'Digital Marketing',
            percentage: '91%'
        },
        {
            bgImage: Web,
            BorderColor: '#2365A6',
            title: 'Web Design',
            percentage: '85%'
        }
    ])

    return (
        <Stack
            bg={'#ebe9e9'}
            py={{ base: 12, lg: 32 }}
            marginTop={'0 !important'}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack
                    textAlign={'center'}
                    justifyContent={'center'}
                    direction={'row'}
                    pb={4}
                >
                    <Heading
                        className='stok2' sx={useBreakpointValue(bheading)}>
                        Why Choose
                    </Heading>
                    <Heading marginLeft={'20px'} sx={useBreakpointValue(bheading)} color={'primaryOrange.100'}>Us</Heading>
                    <Heading
                        className='stok2' sx={useBreakpointValue(bheading)}>
                        ?
                    </Heading>
                </Stack>
                <Text
                    textAlign={'center'}
                    textTransform={'capitalize'}
                    fontSize={{ base: '15', lg: '24' }}
                    pb={16}
                >We Actually take time to understand your <br /> business needs and objectives!</Text>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                >
                    {
                        ChoosePercentage.map((v, i) => <CircularBox {...v} key={i} />)
                    }
                </Stack>
            </Container>
        </Stack>
    )
}


const CircularBox = ({ bgImage, BorderColor, title, percentage }) =>
    <Stack
        w={{ base: '100%', md: '45%', lg: '33%', 'xl': '28%', '2xl': '22%' }}
    >
        <Stack
            borderRadius={'100%'}
            overflow={'hidden'}
            border={'8px solid #fff'}
            boxShadow={'0px 0px 35px -10px #adadad'}
        >
            <Stack
                borderRadius={'100%'}
                border={`8px solid ${BorderColor}`}
            >
                <Stack
                    bgImage={bgImage}
                    bgPos={'center'}
                    bgRepeat={'no-repeat'}
                    bgSize={'cover'}
                    borderRadius={'100%'}
                    direction={'column'}
                    alignItems={'center'}
                    h={'280px'}
                    color={'white.100'}
                    justifyContent={'center'}
                    fontWeight={300}
                    position={'relative'}
                >
                    <Box
                        position={'absolute'}
                        width={'110%'}
                        height={'110%'}
                        bgColor={'#00000070'}
                        zIndex={0}
                    >
                    </Box>
                    <Heading
                        zIndex={2}
                        fontSize={22}
                        transform={'translateY(15px)'}
                        fontWeight={500}
                    >{title}</Heading>
                    <Heading
                        fontSize={64} zIndex={2}>{String(percentage)[0]}{String(percentage)[1]}<Text as={'span'} color={'primaryOrange.100'} fontSize={'42px'}>{String(percentage)[2]}</Text></Heading>
                </Stack>
            </Stack>
        </Stack>
    </Stack>