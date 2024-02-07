import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Six from '../../../assets/images/news/6.png'

export default function ArticleBanner() {
    return (
        <Stack
            py={{ base: 5, lg: 12 }}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack
                    bgImage={Six}
                    bgSize={'cover'}
                    bgPosition={{ base: 'left', lg: 'center' }}
                    bgRepeat={'no-repeat'}
                    height={{ base: '600px', lg: '700px' }}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                    textAlign={{base: 'center', lg: 'left'}}
                >
                    <Box
                        px={8}
                        maxW={{ base: '100%', lg: '40%' }}
                        color={"white.100"}
                    >
                        <Heading
                            fontSize={{ base: '80px', lg: '140px' }}
                            lineHeight={'0.8'}
                        >NFT</Heading>
                        <Heading
                            pb={5}
                            fontWeight={500}
                        >News of the Week</Heading>
                        <Text
                            pb={12}
                            fontSize={'17px'}
                            color={'white.100'}
                        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </Text>
                        <Button
                            bgColor={'transparent'}
                            border={'1px solid #fff'}
                            w={'200px'}
                            py={6}
                            borderRadius={12}
                            _hover={{
                                bgColor: 'primaryOrange.100',

                            }}

                        >Read More</Button>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    )
}
