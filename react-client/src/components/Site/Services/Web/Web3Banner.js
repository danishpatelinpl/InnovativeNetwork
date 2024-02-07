import { Box, Container, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { RiShareBoxLine } from 'react-icons/ri'
import { Link as ReactLink } from 'react-router-dom';
import WebBg from '../../../../assets/images/web/web3.jpg'
import React from 'react'

export default function Web3Banner() {
    return (
        <Stack
            transform={'translateY(-135px)'}
            pt={'280px'}
            pb={'80px'}
            bgImage={WebBg}
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
                        color={'primaryOrange.100'}
                        fontSize={{base:40,lg:'68px'}}
                        fontWeight={500}
                    >
                        Web
                        <Text
                            as={'span'}
                            color={'white.100'}
                        >
                            site
                        </Text>
                    </Heading>
                    <Heading
                        display={'flex'}
                        alignItems={'flex-end'}
                        gap={4}
                        fontSize={{base:70,lg:'320px'}}
                        className='numberStroke'
                        lineHeight={'0.8'}
                    >
                        3
                        <Text
                            as={'span'}
                            w={'40px'}
                            h={'40px'}
                            border={'2px solid'}
                            bgColor={'rgba(255, 255, 255, 0.108)'}
                            borderColor={'primaryOrange.100'}
                            transform={{base:'translateY(-12px)',lg:'translateY(-25px)'}}
                        ></Text>
                        0
                    </Heading>
                    <Text py={8} maxW={{base:'100%',lg:'50%'}} fontSize={{base:16,lg:22}} color={{base:'#000',lg:'#fff'}}>Web 3.0 will make it possible for websites to efficiently adapt to consumers' demands by incorporating artificial intelligence. Additionally, by utilizing accessible criteria like location, budget, device, and urgency, customized advertising will make it possible for customers to find the things they need quickly. Therefore, browsing will be more convenient. </Text>
                    
                </Box>
            </Container>
        </Stack>
    )
}
