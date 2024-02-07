import { Container, Stack } from '@chakra-ui/react'
import MileStoneBg from '../../../assets/images/milestoneBg.jpg'
import MileStoneHeading from './MileStoneHeading'
import Bms from '../../../assets/images/bms.png'
import Doctor from '../../../assets/images/doctor.png'
import Digi from '../../../assets/images/digi.png'
import Igs from '../../../assets/images/igs.png'
import Soci from '../../../assets/images/soci.png'
import MileStoneFlag from './MileStoneFlag'
import { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MileStoneFlagSlider from './MileStoneFlagSlider'

export default function MileStone() {

    const [MileStoneList] = useState([
        {
            color: '#4C6AC6',
            year: 2016,
            image: Bms,
            label: 'Banquet Management System',
            content: 'Owners of banquets may easily manage their halls and rooms with the help of our Banquet Management System (BMS). It is a feature-rich program that makes event management, meal plan assortment, and accounting amongst other things easier. It also enables banquet hall management to update clients on the progress of an event for which the hall has been reserved.'
        },
        {
            color: '#EF5A2A',
            year: 2018,
            image: Doctor,
            label: 'ERP, Doctor Solution, CMS',
            content: 'Making sure you obtain the best returns on your technological investments in CRM and ERP development is our goal. Our ERP and CRM systems enhance the accessibility and availability of crucial unstructured information by centralizing all of your data'
        },
        {
            color: '#1D66AF',
            year: 2020,
            image: Digi,
            label: 'Digiliate Inc',
            content: 'Digiliate seeks to offer the best of services to their clients and provide a professional platform to resolve all your digital concerns with an innovative approach. Our knowledge and expert assistance will facilitate you to successfully grow your business. '
        },
        {
            color: '#6DC8CA',
            year: 2021,
            image: Igs,
            label: 'Innovative Game Studios',
            content: 'IGS specializes in creating unique, thrilling, and mesmerizing games that offer users a one-of-a-kind experience. By responding to the latest trends and consistently taking on new challenges, we have been able to provide clients with a diverse range of game design and development services.'
        },
        {
            color: '#BB4650',
            year: 2022,
            image: Soci,
            label: 'Sociaaty',
            content: 'Sociaaty enables businesses to establish meaningful connections with their customers through customized and action-oriented text messages'
        },
    ]);

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Stack
            py={{ base: 4, md: 12 }}
            bgImage={MileStoneBg}
            bgSize={'cover'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgAttachment={'fixed'}
        >
            <Container
                maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
            >
                <Stack>
                    <Stack
                        pb={'12'}
                    >
                        <MileStoneHeading />
                    </Stack>
                    <Stack
                        display={{ base: 'none', md: 'flex' }}
                        direction={'row'}
                        alignItems={'flex-start'}
                        spacing={{ 'xl': '8%', '2xl': '12.5%' }}
                        flexWrap={'wrap'}
                        gap={'3%'}
                        position={'relative'}
                        _after={{
                            content: '""',
                            position: 'absolute',
                            left: '0px',
                            top: '50%',
                            width: '100%',
                            borderBottom: '4px dashed #adadad82',
                            zIndex: 0
                        }}
                    >
                        {
                            MileStoneList.map((v, i) => <MileStoneFlag {...v} key={i} />)
                        }
                        {
                            MileStoneList.map((v, i) => (i > 4 && i < 10) && <MileStoneFlag {...v} key={i} />)
                        }
                    </Stack>
                    <Stack
                        display={{ base: 'block', md: 'none' }}
                        className={'mileStoneSlider'}
                    >
                        <Slider {...settings}>
                            {
                                MileStoneList.map((v, i) => {
                                    return (
                                        <Stack
                                            key={i}
                                            as={'section'}
                                            display={'flex !important'}
                                            direction={'row'}
                                            alignItems={'flex-start'}
                                            spacing={0}
                                            flexWrap={'wrap'}
                                            gap={4}
                                            px={'15px'}
                                            py={'15px'}
                                        >
                                            <MileStoneFlagSlider {...v} />
                                        </Stack>
                                    )
                                })
                            }
                        </Slider>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}