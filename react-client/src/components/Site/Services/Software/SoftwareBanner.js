import { Box, Container, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { RiShareBoxLine } from 'react-icons/ri'
import { Link as ReactLink } from 'react-router-dom';
import SoftwareBg from '../../../../assets/images/activityBg.jpg'
import React from 'react'

export default function SoftwareBanner() {
    return (
        <Stack
            transform={'translateY(-135px)'}
            pt={'280px'}
            pb={'80px'}
            bgImage={SoftwareBg}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            bgPos={'top'}
            color={'white.100'}
        >

            <Container
                maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
            >
                <Box>
                    <Heading
                        color={'white.100'}
                        fontSize={{base:30,lg:'86px'}}
                        fontWeight={600}
                        position={'relative'}
                    >
                        Software
                        <Text
                            color={'primaryOrange.100'}
                        >
                            Dev
                        </Text>
                        <Text
                            className='orangeStroke'
                            position={'absolute'}
                            top={'-50%'}
                            left={'10%'}
                            marginX={'auto'}
                            fontSize={300}
                            zIndex={-1}
                            opacity={'0.5'}
                        >
                            SD
                        </Text>
                    </Heading>
                    <Text py={8} maxW={{base:'100%',lg:'50%'}} fontSize={{base:16,lg:22}}>We've been providing cutting-edge Custom Software Solutions to midsize and large businesses since our inception. We regard ourselves as partners, not just programmers while designing unique applications. We understand that solutions succeed not just because of technical factors, but also because end-users and internal IT personnel feel invested in them.</Text>
                    
                </Box>
            </Container>
        </Stack>
    )
}
