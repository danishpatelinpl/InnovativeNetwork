import {
    Box,
    Container,
    Flex,
    Heading,
    Img,
    Stack,
    // List,
    ListItem,
    // ListIcon,
    // OrderedList,
    UnorderedList,
    Link,
    TagLabel,
    TagLeftIcon,
    Tag,
    Icon,
    Text,
    Button,
} from "@chakra-ui/react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
// import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import React, { useEffect } from "react";
import Logo from "../../../assets/images/logo.png";
import Khi from "../../../assets/images/khi.png";
import Usas from "../../../assets/images/usas.png";
import Londons from "../../../assets/images/londons.png";
import Canadas from "../../../assets/images/canadas.png";
import Riyadh from "../../../assets/images/burgetRiyadh.png";
import Jeddah from "../../../assets/images/burgerJeddah.png";
import gsap from 'gsap';
import { useState } from "react";
import { TiTimes } from 'react-icons/ti'
// import useScrollBlock from "../../../hooks/useScrollBlock";

export default function Sidemenu({ menustatus, setopenmenu, allowScroll }) {

    const [tempMenuStatus, settempMenuStatus] = useState(menustatus);
    const navigate = useNavigate();

    const openingFunction = () => {
        allowScroll()
        setopenmenu(false);
    }

    useEffect(() => {

        if (menustatus) {
            settempMenuStatus(true);
            gsap.to('#sidemenulogo', 1, {
                delay: .8,
                opacity: '1'
            });
            gsap.to('#sidemenulist', 1, {
                delay: 1.2,
                opacity: '1'
            });
            gsap.to('#sidecontactd', 1, {
                delay: 1.6,
                opacity: '1'
            });
        } else {
            gsap.to('#sidemenulogo', {
                delay: .8,
                opacity: '0'
            });
            gsap.to('#sidemenulist', {
                delay: .5,
                opacity: '0'
            });
            gsap.to('#sidecontactd', {
                delay: .2,
                opacity: '0'
            });
            setTimeout(() => {
                settempMenuStatus(false);
            }, 800);
        }



    }, [menustatus])

    const changePage = (url) => {
        openingFunction();
        navigate(url)
    }

    const Smenulist = [
        {
            name: "who we are",
            url: "/about",
        },
        {
            name: "careers",
            url: "/careers",
        },
        {
            name: "industries",
            url: "/Industries",
        },
        {
            name: "meet the team",
            url: "/teams",
        },
        {
            name: "technologies",
            url: "/Technology",
        },
    ];

    const Smenustyle = {
        color: "#fff",
        fontSize: { base: "36px", md: "48px", lg: "40px", '2xl': "60px" },
        textTransform: "Uppercase",
        fontWeight: "600",
    };
    const infocss = {
        color: "#fff",
        fontSize: "20px",
        fontWeight: "500",
    };
    const sideicn = {
        mr: '6',
        w: { base: '40px', '2xl': '60px' }
    };
    const info = {
        color: "#fff",
        fontSize: "20px",
        fontWeight: "500",
    }

    return (
        <Stack
            position={"fixed"}
            left={tempMenuStatus ? "0%" : "-100%"}
            opacity={tempMenuStatus ? "1" : "0.8"}
            top={'-8px'}
            bottom={'0'}
            w={'100%'}
            h={"100vh"}
            bg={"#1a1a1a"}
            zIndex={"14"}
            transition={"all ease 1s"}
            pt={{ base: "6", md: "12" }}
            pb={"12"}
            overflow={"auto"}
            className={'sidenavtab'}
        >
            <Container maxW={{ lg: "6xl", "2xl": "80%" }}>
                <Box opacity={'0'} mb={"12"} id={'sidemenulogo'} display={'flex'} justifyContent={"space-between"}>
                    <Box>
                        <Link onClick={() => changePage('/')}>
                            <Img w={{ base: '80px', md: '134px' }} src={Logo} alt="Logo" />
                        </Link>
                    </Box>
                    <Box>
                        <Button
                            background={'transparent'}
                            onClick={() => { openingFunction() }}
                            _active={{ bgColor: 'transparent' }}
                            _hover={{ bgColor: 'transparent' }}
                            _focus={{ bgColor: 'transparent' }}
                        >
                            <Icon
                                color={'white.100'}
                                fontSize={{ base: 28, md: 56 }}
                                as={TiTimes} />
                        </Button>
                    </Box>
                </Box>
                <Flex pt={{ base: '24', md: '0' }} mb={"7"} justifyContent={"space-between"} opacity={'0'} id={'sidemenulist'}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack w={{ base: "100%", md: "60%" }}>
                        <Box>
                            <UnorderedList spacing={"2"}>
                                {Smenulist.map((v, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <Link sx={Smenustyle} onClick={() => changePage(v.url)}>
                                                {v.name}
                                            </Link>
                                        </ListItem>
                                    );
                                })}
                            </UnorderedList>
                        </Box>
                        <Flex id={'sidecontactd'} opacity={'0'}
                            pt={'60px'}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            <Stack>
                                <Heading
                                    as="h4"
                                    size="md"
                                    color={"#fff"}
                                    fontWeight={"medium"}
                                    mb={"3"}
                                >
                                    Connect With Us
                                </Heading>
                                <Tag
                                    size={"lg"}
                                    variant="subtle"
                                    bg={"transparent"}
                                    color={"white"}
                                >
                                    <Box
                                        bg={"#fff"}
                                        mr={"4"}
                                        alignItems={"center"}
                                        textAlign={"center"}
                                        display={"flex"}
                                        borderRadius={"50%"}
                                        w={"60px"}
                                        h={"60px"}
                                    >
                                        <TagLeftIcon
                                            as={RiLinkedinFill}
                                            fontSize={"35px"}
                                            color={"#f79e22"}
                                            m={"auto"}
                                        />
                                    </Box>
                                    <TagLabel>
                                        <Link sx={infocss} href="https://www.linkedin.com/company/innovative-network-pvt-ltd/mycompany/" target={'_blank'}>
                                            Innovative Network
                                        </Link>
                                    </TagLabel>
                                </Tag>
                            </Stack>

                            <Stack>
                                <Heading
                                    as="h4"
                                    size="md"
                                    color={"#fff"}
                                    fontWeight={"medium"}
                                    mb={"3"}
                                >
                                    Call Us
                                </Heading>
                                <Tag
                                    size={"lg"}
                                    variant="subtle"
                                    bg={"transparent"}
                                    color={"white"}
                                >
                                    <Box
                                        bg={"#fff"}
                                        mr={"4"}
                                        alignItems={"center"}
                                        textAlign={"center"}
                                        display={"flex"}
                                        borderRadius={"50%"}
                                        w={"60px"}
                                        h={"60px"}
                                    >
                                        <TagLeftIcon
                                            as={FiPhoneCall}
                                            fontSize={"30px"}
                                            color={"#f79e22"}
                                            m={"auto"}
                                        />
                                    </Box>
                                    <TagLabel>
                                        <Link sx={infocss} href={"tel:021 34303051"}>
                                            + (021) 34303051-55
                                        </Link>
                                    </TagLabel>
                                </Tag>
                            </Stack>
                        </Flex>
                    </Stack>
                    <Stack gap={{ base: '2', md: '3', lg: '3', '2xl': '6' }} pl={'8'} w={"38%"} borderLeft={"1px solid #fff"}
                        visibility={{ base: 'hidden', md: 'visible' }}
                        display={{ base: 'none', lg: 'flex' }}
                    >
                        <Heading
                            as="h4"
                            size="md"
                            color={"#fff"}
                            fontWeight={"medium"}

                        >
                            Address :
                        </Heading>
                        <Flex alignItems={'center'}>
                            <Box sx={sideicn}><Img alt="icn" src={Khi} /></Box>
                            <Box>
                                <Text
                                    color={'#fff'}
                                    fontSize={{ base: '15px', '2xl': '19px' }}
                                > 41-J, Street-3, Block-6, PECHS,<br /> Karachi City, Sindh 75400</Text>

                            </Box>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Box sx={sideicn}><Img alt="icn" src={Usas} /></Box>
                            <Box>
                                <Text
                                    color={'#fff'}
                                    fontSize={{ base: '15px', '2xl': '19px' }}
                                > 410685-B Hazelhurst Dr. # 29406 <br />Houston, TX 77043</Text>

                            </Box>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Box sx={sideicn}><Img alt="icn" src={Londons} /></Box>
                            <Box>
                                <Text
                                    color={'#fff'}
                                    fontSize={{ base: '15px', '2xl': '19px' }}
                                > Unit 2, Office 5 131 Queens Road <br />Peckham City
                                    Postal code
                                    SE15 2ND</Text>

                            </Box>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Box sx={sideicn} ><Img alt="icn" src={Canadas} /></Box>
                            <Box>
                                <Text
                                    color={'#fff'}
                                    fontSize={{ base: '15px', '2xl': '19px' }}
                                > 212 Coral Sands Place NE<br /> Calgary AB T3J 3J2</Text>

                            </Box>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Box sx={sideicn} ><Img alt="icn" src={Riyadh} w={'35px'} marginX={'auto'} /></Box>
                            <Box>
                                <Text
                                    color={'#fff'}
                                    fontSize={{ base: '15px', '2xl': '19px' }}
                                >Olaya View Tower (العليا ڤيو)<br /> Opposite to Kingdom Tower</Text>

                            </Box>
                        </Flex>
                        <Flex alignItems={'center'}>
                            <Box sx={sideicn} ><Img alt="icn" src={Jeddah} /></Box>
                            <Box>
                                <Text
                                    color={'#fff'}
                                    fontSize={{ base: '15px', '2xl': '19px' }}
                                > Abbad Bin Beshr St.<br /> Front of Tazaj Resturant</Text>

                            </Box>
                        </Flex>
                        <Heading
                            as="h4"
                            size="md"
                            color={"#fff"}
                            fontWeight={"medium"}

                        >
                            Say Hi!
                        </Heading>
                        <UnorderedList>
                            <ListItem><Link sx={info} href="mailto:info@innovative-net.com">info@innovative-net.com</Link></ListItem>
                            <ListItem><Link sx={info} href="mailto:contact@innovative-net.com">contact@innovative-net.com</Link></ListItem>

                        </UnorderedList>

                    </Stack>
                </Flex>

            </Container>
        </Stack>
    );
}
