import { Container, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export default function MiniBanner({ simpleHeading, strokeHeading, banPic, marginLeft }) {

    const bheading = {
        base: {
            color: '#000',
            fontSize: '49px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '2px',
        },
        'md': {
            color: '#000',
            fontSize: '80px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '5px',
            lineHeight: '1.4'
        },
        '2xl': {
            color: '#000',
            fontSize: '140px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '5px'
        }
    }

    return (
        <>
            <Stack marginTop={'0 !important'}>
                <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                    <Stack
                        textAlign={'center'}
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'flex-end'}
                    >
                        <Heading sx={useBreakpointValue(bheading)}>
                            {simpleHeading}
                            <Heading marginLeft={marginLeft ? {base:'10px' ,lg: '40px'} : '0px'}  className='orangeStroke' sx={useBreakpointValue(bheading)}>{strokeHeading}</Heading>
                        </Heading>
                        {
                            banPic &&
                            <Image
                                display={{base: 'none', md: 'block'}}
                                w={{base: '50%', '2xl': '80%'}}
                                src={banPic}
                                alt={'About People'}
                                transform={"translateY(2px)"}
                            />
                        }
                    </Stack>
                </Container>
            </Stack>
        </>
    )
}
