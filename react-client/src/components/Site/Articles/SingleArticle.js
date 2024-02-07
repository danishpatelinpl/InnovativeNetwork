import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function SingleArticle(props) {
    return (
        <Stack
            py={{base: 4, lg: 12}}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                {
                    Object.values(props).map((v, i) => {
                        return (
                            <Stack
                                key={i}
                                direction={{base: 'column', lg: 'row'}}
                                alignItems={'center'}
                                justifyContent={{base: 'space-evenly', lg: 'space-between'}}
                                gap={{base: 6, lg: 12}}
                                spacing={0}
                                mb={'30px'}
                            >
                                <Box>
                                    <Image src={v.image} alt={'pic'} />
                                </Box>
                                <Box>
                                    <Heading
                                        color={'bgGrays.100'}
                                        fontSize={{base: '24', lg: '32'}}
                                        pb={'15px'}
                                    >{v.heading}</Heading>
                                    <Text
                                        fontSize={'15px'}
                                     >{v.content}</Text>
                                </Box>
                            </Stack>
                        )
                    })
                }
            </Container>
        </Stack>
    )
}