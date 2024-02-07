import { Box, Container, Heading, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Postbox from './Postbox'

export default function Freaturedpost({smallHeading, largeHeading, news}) {

    return (
        <>
            <Stack py={{base: '4', lg: '12'}}>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Box mb={'6'}>
                        <Heading as='h5' size='sm' fontWeight={500} pb={2} fontSize={18} color={'primaryOrange.100'} >{smallHeading}</Heading>
                        <Heading as='h3' w={{base: '90%', lg: '40%'}} fontSize={{base: '30px', lg: '42px'}}>{largeHeading}.</Heading>
                    </Box>
                    <Postbox {...news} />
                </Container>
            </Stack>
        </>
    )
}
