import { Box, Container, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import One from '../../../assets/images/news/1.png'
import Two from '../../../assets/images/news/2.png'
import Three from '../../../assets/images/news/3.png'
import Four from '../../../assets/images/news/4.png'
import Five from '../../../assets/images/news/5.png'
import { IoIosTimer } from 'react-icons/io'

export default function Articles() {
    return (
        <Stack py={{base: 4, lg: 20}}>
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack>
                    <Heading
                        textAlign={'center'}
                        pb={12}
                        fontSize={{ base: '32px', md: '48px' }}
                        color={'bgGrays.100'}
                    >
                        <Text as={'span'} color={'primaryOrange.100'}>Recent</Text> Articles
                    </Heading>
                </Stack>
                <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'} spacing={0} alignItems={'center'}>
                    <Box
                        position={'relative'}
                        pb={'15px'}
                        w={{ base: '100%', lg: '67%' }}
                    >
                        <Image
                            src={One}
                            w={'100%'}
                            alt={'one'}
                        />
                        <Stack
                            position={'absolute'}
                            left={'10px'}
                            bottom={{ base: '15px', lg: '30px' }}
                            color={'white.100'}
                            w={'96%'}
                        >
                            <Heading
                                pb={{ base: '5px', lg: '10px' }}
                                fontSize={{ base: '14px', lg: '24px' }}
                                fontWeight={500}
                            >How A Pentagon Deal Became indentity Crisis For Google</Heading>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                color={'primaryOrange.100'}
                                fontSize={{ base: '12px', lg: '16px' }}
                            >
                                <Text>Charlie Bell</Text>
                                <Text><Icon as={IoIosTimer} /> 12- 02 - 2022</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box
                        position={'relative'}
                        pb={'15px'}
                        w={{ base: '100%', lg: '31%' }}
                    >
                        <Image
                            src={Two}
                            alt={'one'}
                            w={'100%'}
                        />
                        <Stack
                            position={'absolute'}
                            left={'10px'}
                            bottom={{base: '15px', lg: '30px'}}
                            color={'white.100'}
                            w={'96%'}
                        >
                            <Heading
                                pb={{base: '5px', lg: '10px'}}
                                fontSize={{ base: '14px', lg: '20px' }}
                                fontWeight={500}
                            >How A Pentagon Deal Became indentity Crisis For Google</Heading>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                color={'primaryOrange.100'}
                                fontSize={{ base: '12px', lg: '16px' }}
                            >
                                <Text>Charlie Bell</Text>
                                <Text><Icon as={IoIosTimer} /> 12- 02 - 2022</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box
                        position={'relative'}
                        pb={'15px'}
                        w={{ base: '100%', lg: '31%' }}
                    >
                        <Image
                            src={Three}
                            alt={'one'}
                            w={'100%'}
                        />
                        <Stack
                            position={'absolute'}
                            left={'10px'}
                            bottom={{base: '15px', lg: '30px'}}
                            color={'white.100'}
                            w={'96%'}
                        >
                            <Heading
                                pb={{base: '5px', lg: '10px'}}
                                fontSize={{ base: '14px', lg: '20px' }}
                                fontWeight={500}
                            >How A Pentagon Deal Became indentity Crisis For Google</Heading>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                fontSize={{ base: '12px', lg: '16px' }}
                                color={'primaryOrange.100'}
                            >
                                <Text>Charlie Bell</Text>
                                <Text><Icon as={IoIosTimer} /> 12- 02 - 2022</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box
                        position={'relative'}
                        pb={'15px'}
                        w={{ base: '100%', lg: '31%' }}
                    >
                        <Image
                            src={Four}
                            alt={'one'}
                            w={'100%'}
                        />
                        <Stack
                            position={'absolute'}
                            left={'10px'}
                            bottom={{base: '15px', lg: '30px'}}
                            color={'white.100'}
                            w={'96%'}
                        >
                            <Heading
                                pb={{base: '5px', lg: '10px'}}
                                fontSize={{ base: '14px', lg: '20px' }}
                                fontWeight={500}
                            >How A Pentagon Deal Became indentity Crisis For Google</Heading>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                fontSize={{ base: '12px', lg: '16px' }}
                                color={'primaryOrange.100'}
                            >
                                <Text>Charlie Bell</Text>
                                <Text><Icon as={IoIosTimer} /> 12- 02 - 2022</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box
                        position={'relative'}
                        pb={'15px'}
                        w={{ base: '100%', lg: '31%' }}
                    >
                        <Image
                            src={Five}
                            alt={'one'}
                            w={'100%'}
                        />
                        <Stack
                            position={'absolute'}
                            left={'10px'}
                            bottom={{base: '15px', lg: '30px'}}
                            color={'white.100'}
                            w={'96%'}
                        >
                            <Heading
                                pb={{base: '5px', lg: '10px'}}
                                fontSize={{ base: '14px', lg: '20px' }}
                                fontWeight={500}
                            >How A Pentagon Deal Became indentity Crisis For Google</Heading>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                fontSize={{ base: '12px', lg: '16px' }}
                                color={'primaryOrange.100'}
                            >
                                <Text>Charlie Bell</Text>
                                <Text><Icon as={IoIosTimer} /> 12- 02 - 2022</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    )
}
