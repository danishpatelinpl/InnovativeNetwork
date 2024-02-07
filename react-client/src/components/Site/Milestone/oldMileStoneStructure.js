import { Box, Center, Container, Divider, Flex, Grid, GridItem, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Bms from '../../../assets/images/bms.png'
import Doctor from '../../../assets/images/doctor.png'
import Digi from '../../../assets/images/digi.png'
import Igs from '../../../assets/images/igs.png'
import Soci from '../../../assets/images/soci.png'

export default function oldMileStoneStructure() {


    return (
        <>
            <Stack
                bgColor={'white.100'}
                pt={'70px'}
                pb={{ base: '20px', md: '90px' }}
                marginTop={'0 !important'}
            >
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    <Stack textAlign={"center"} mb={"20"}
                        data-aos={'fade-in'}
                        data-aos-delay={300}
                    >
                        <Heading as="h2" size={{ base: "md", md: "xl" }}>
                            5 Years Milestone
                        </Heading>
                        <Text
                            fontSize={{ base: "12px", md: "16px" }}
                            fontWeight={"400"}
                            color={"#666e82"}
                            lineHeight={{ md: "24px", base: "20px" }}
                        >
                            Founded in 2016, the company has vast expertise in offering a wide variety of services to a portfolio<br />of worldwide clients majority from US/Canada and UK, many of whom are industry leaders.<br />Working with such a wide collection of customers

                        </Text>
                    </Stack>
                    <Stack

                        bgSize={'cover'}
                        bgRepeat={'no-repeat'}
                    >
                        <Grid templateColumns="repeat(12, 1fr)" gap={{ base: '2', lg: '10' }}>
                            <GridItem display={{ base: 'none', lg: 'flex' }} colSpan={{ base: "4", md: "1" }}></GridItem>
                            <GridItem colSpan={{ base: "12", md: "4" }}>
                                <Stack h={"120px"} mb={"12"} display={{ base: 'none', lg: 'flex' }}></Stack>
                                <Stack
                                    py={'7'}
                                    px={'4'}
                                    border={"1px solid #D1D1D1"}
                                    borderRadius={"6"}
                                    position={"relative"}
                                    mb={{ base: '7', lg: '12' }}
                                    bg={'#fff'}
                                    boxShadow='xl'
                                    data-aos={'fade-right'}
                                    data-aos-delay={300}
                                >
                                    <Box position={"absolute"} top={{ base: "-20px", md: "-27px" }} px={"2"} height={'35px'} border={{ base: '1px solid #adadad', md: '1px solid #fff' }} borderRadius={6} py={{ base: '0px', md: '2' }} bg={{ base: "#fff", md: "#fff" }}>
                                        <Text color={"#f79e22"} fontSize={{ base: "22px", md: "29px" }} fontWeight={"600"}>
                                            2018
                                        </Text>
                                    </Box>
                                    <Flex alignItems={'center'}>
                                        <Box mr={'4'} w={'25%'}><Img src={Doctor} alt={'BMS'} /></Box>
                                        <Box w={'80%'}>
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: "14px", md: "15px" }}
                                                mb={{ base: "0", md: "1.5" }}
                                                textTransform={"uppercase"}
                                            >
                                                Doctor Solutionz
                                            </Heading>
                                            <Text
                                                fontSize={{ base: "12px", md: "14px" }}
                                                fontWeight={"400"}
                                                color={"#666e82"}
                                                lineHeight={{ md: "24px", base: "20px" }}
                                            >
                                                Introduced Doctor's solution (App) <br /> , ERPs, CMS.
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Stack>
                                <Stack h={"100px"} mb={"10"} display={{ base: 'none', lg: 'flex' }}></Stack>
                                <Stack
                                    py={'7'}
                                    px={'4'}
                                    border={"1px solid #D1D1D1"}
                                    borderRadius={"6"}
                                    position={"relative"}
                                    mb={{ base: '7', lg: '16' }}
                                    bg={'#fff'}
                                    boxShadow='xl'
                                    data-aos={'fade-right'}
                                    data-aos-delay={300}
                                >
                                    <Box position={"absolute"} top={{ base: "-20px", md: "-27px" }} px={"2"} height={'35px'} border={{ base: '1px solid #adadad', md: '1px solid #fff' }} borderRadius={6} py={{ base: '0px', md: '2' }} bg={{ base: "#fff", md: "#fff" }}>
                                        <Text color={"#f79e22"} fontSize={{ base: "22px", md: "29px" }} fontWeight={"600"}>
                                            2022
                                        </Text>
                                    </Box>
                                    <Flex alignItems={'center'}>
                                        <Box mr={'4'} w={'25%'}><Img src={Igs} alt={'BMS'} /></Box>
                                        <Box w={'80%'}>
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: "14px", md: "15px" }}
                                                mb={{ base: "0", md: "1.5" }}
                                                textTransform={"uppercase"}
                                            >
                                                Innovative Game Studio
                                            </Heading>
                                            <Text
                                                fontSize={{ base: "12px", md: "14px" }}
                                                fontWeight={"400"}
                                                color={"#666e82"}
                                                lineHeight={{ md: "24px", base: "20px" }}
                                            >
                                                Emergence to Retail industry, manufacturing industry, gaming industry
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Stack>
                            </GridItem>
                            <GridItem display={{ base: 'none', lg: 'block' }} colSpan={{ base: "4", md: "2" }}>
                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"80px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />
                                </Center>
                                <Center
                                    boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                                    borderRadius={"50%"}
                                    bg={'#fff'}
                                    h={"30px"}
                                    w={"30px"}
                                    margin={"auto"}
                                    position={'relative'}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '120px',
                                        height: '2px',
                                        border: '2px dashed #F15F30',
                                        left: '20px'
                                    }}

                                >
                                    <Box
                                        borderRadius={"50%"}
                                        bg={"#f79e22"}
                                        h={"10px"}
                                        w={"10px"}

                                    ></Box>
                                </Center>
                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"115px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />
                                </Center>
                                <Center
                                    boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                                    borderRadius={"50%"}
                                    h={"30px"}
                                    w={"30px"}
                                    margin={"auto"}
                                    position={'relative'}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '120px',
                                        height: '2px',
                                        border: '2px dashed #F15F30',
                                        right: '20px'
                                    }}
                                >
                                    <Box
                                        borderRadius={"50%"}
                                        bg={"#f79e22"}
                                        h={"10px"}
                                        w={"10px"}
                                    ></Box>
                                </Center>
                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"150px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />
                                </Center>
                                <Center
                                    boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                                    borderRadius={"50%"}
                                    h={"30px"}
                                    w={"30px"}
                                    margin={"auto"}
                                    position={'relative'}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '120px',
                                        height: '2px',
                                        border: '2px dashed #F15F30',
                                        left: '20px'
                                    }}
                                >
                                    <Box
                                        borderRadius={"50%"}
                                        bg={"#f79e22"}
                                        h={"10px"}
                                        w={"10px"}
                                    ></Box>
                                </Center>
                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"130px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />
                                </Center>
                                <Center
                                    boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                                    borderRadius={"50%"}
                                    h={"30px"}
                                    w={"30px"}
                                    margin={"auto"}
                                    position={'relative'}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '120px',
                                        height: '2px',
                                        border: '2px dashed #F15F30',
                                        right: '20px'
                                    }}
                                >
                                    <Box
                                        borderRadius={"50%"}
                                        bg={"#f79e22"}
                                        h={"10px"}
                                        w={"10px"}
                                    ></Box>
                                </Center>

                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"80px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />
                                </Center>
                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"70px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />
                                </Center>

                                <Center
                                    boxShadow={"inset 0px 0px 10px rgb(0 0 0 / 19%)"}
                                    borderRadius={"50%"}
                                    h={"30px"}
                                    w={"30px"}
                                    margin={"auto"}
                                    position={'relative'}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        width: '120px',
                                        height: '2px',
                                        border: '2px dashed #F15F30',
                                        left: '20px'
                                    }}
                                >
                                    <Box
                                        borderRadius={"50%"}
                                        bg={"#f79e22"}
                                        h={"10px"}
                                        w={"10px"}
                                    ></Box>

                                </Center>

                                <Center>
                                    <Divider
                                        orientation="vertical"
                                        borderWidth={"2px"}
                                        h={"90px"}
                                        borderColor={"#F15F30"}
                                        borderStyle={'dashed'}
                                    />

                                </Center>
                            </GridItem>
                            <GridItem colSpan={{ base: "12", md: "4" }}>
                                <Stack
                                    py={'7'}
                                    px={'4'}
                                    border={"1px solid #D1D1D1"}
                                    borderRadius={"6"}
                                    position={"relative"}
                                    mb={{ base: '7', lg: '9' }}
                                    bg={'#fff'}
                                    boxShadow='xl'
                                    data-aos={'fade-left'}
                                    data-aos-delay={300}
                                >
                                    <Box position={"absolute"} top={{ base: "-20px", md: "-27px" }} px={"2"} height={'35px'} border={{ base: '1px solid #adadad', md: '1px solid #fff' }} borderRadius={6} py={{ base: '0px', md: '2' }} bg={{ base: "#fff", md: "#fff" }}>
                                        <Text color={"#f79e22"} fontSize={{ base: "22px", md: "29px" }} fontWeight={"600"}>
                                            2016
                                        </Text>
                                    </Box>
                                    <Flex alignItems={'center'}>
                                        <Box mr={'4'} w={'25%'}><Img src={Bms} alt={'BMS'} /></Box>
                                        <Box w={'80%'}>
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: "14px", md: "15px" }}
                                                mb={{ base: "0", md: "1.5" }}
                                                textTransform={"uppercase"}
                                            >
                                                Banquet Management System
                                            </Heading>
                                            <Text
                                                fontSize={{ base: "12px", md: "14px" }}
                                                fontWeight={"400"}
                                                color={"#666e82"}
                                                lineHeight={{ md: "24px", base: "20px" }}
                                            >
                                                Started on 2016, created first BMS (Banquet Management System)
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Stack>
                                <Stack h={"110px"} mb={"12"} display={{ base: 'none', lg: 'flex' }}></Stack>
                                <Stack
                                    py={'7'}
                                    px={'4'}
                                    border={"1px solid #D1D1D1"}
                                    borderRadius={"6"}
                                    position={"relative"}
                                    mb={{ base: '7', lg: '10' }}
                                    bg={'#fff'}
                                    boxShadow='xl'
                                    data-aos={'fade-left'}
                                    data-aos-delay={300}
                                >
                                    <Box position={"absolute"} top={{ base: "-20px", md: "-27px" }} px={"2"} height={'35px'} border={{ base: '1px solid #adadad', md: '1px solid #fff' }} borderRadius={6} py={{ base: '0px', md: '2' }} bg={{ base: "#fff", md: "#fff" }}>
                                        <Text color={"#f79e22"} fontSize={{ base: "22px", md: "29px" }} fontWeight={"600"}>
                                            2020
                                        </Text>
                                    </Box>
                                    <Flex alignItems={'center'}>
                                        <Box mr={'4'} w={'25%'}><Img src={Digi} alt={'BMS'} /></Box>
                                        <Box w={'80%'}>
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: "14px", md: "15px" }}
                                                mb={{ base: "0", md: "1.5" }}
                                                textTransform={"uppercase"}
                                            >
                                                Digiliate
                                            </Heading>
                                            <Text
                                                fontSize={{ base: "12px", md: "14px" }}
                                                fontWeight={"400"}
                                                color={"#666e82"}
                                                lineHeight={{ md: "24px", base: "20px" }}
                                            >
                                                Introduced International products + services, International Mobile App.
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Stack>
                                <Stack h={"100px"} mb={"10"} display={{ base: 'none', lg: 'flex' }}></Stack>
                                <Stack
                                    py={'7'}
                                    px={'4'}
                                    border={"1px solid #D1D1D1"}
                                    borderRadius={"6"}
                                    position={"relative"}
                                    mb={{ base: '7', lg: '10' }}
                                    bg={'#fff'}
                                    boxShadow='xl'
                                    data-aos={'fade-left'}
                                    data-aos-delay={300}
                                >
                                    <Box position={"absolute"} top={{ base: "-20px", md: "-27px" }} px={"2"} height={'35px'} border={{ base: '1px solid #adadad', md: '1px solid #fff' }} borderRadius={6} py={{ base: '0px', md: '2' }} bg={{ base: "#fff", md: "#fff" }}>
                                        <Text color={"#f79e22"} fontSize={{ base: "22px", md: "29px" }} fontWeight={"600"}>
                                            2022
                                        </Text>
                                    </Box>
                                    <Flex alignItems={'center'}>
                                        <Box mr={'4'} w={'25%'}><Img src={Soci} alt={'BMS'} /></Box>
                                        <Box w={'80%'}>
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: "14px", md: "15px" }}
                                                mb={{ base: "0", md: "1.5" }}
                                                textTransform={"uppercase"}
                                            >
                                                sociaaty
                                            </Heading>
                                            <Text
                                                fontSize={{ base: "12px", md: "14px" }}
                                                fontWeight={"400"}
                                                color={"#666e82"}
                                                lineHeight={{ md: "24px", base: "20px" }}
                                            >
                                                Evolve to Whatsapp marketing for a 98% open rate in real time!
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Stack>
                            </GridItem>
                            <GridItem display={{ base: 'none', lg: 'flex' }} colSpan={{ base: "4", md: "1" }}></GridItem>
                        </Grid>
                    </Stack>

                </Container>
            </Stack>
        </>
    )
}
