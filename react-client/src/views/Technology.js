import { Container, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import ServiceSubContentOne from '../components/Site/Services/ServicesSubContent/ServiceSubContentOne'
import GirlCoder from '../assets/images/servicesIcon/girl.png'
import Nopath from '../assets/images/tech/nopath.png'
// import Techsupport from '../assets/images/tech/tech.png'
import Pic1 from '../assets/images/web/pic1.png'
import Seclock from '../assets/images/service/ss2.png'
import Pic2 from '../assets/images/web/pic2.png'
import bannerDataURL from '../utilities/bannerDataURL'

export default function Technology() {

    const [MarketingDetailsList] = useState([
        {
            image: GirlCoder,
            
            mainHeading: 'Artificial Intelligence ',
            content: "With Artificial Intelligence, business processes can be reinvented, better user experiences can be created, and human decision-making can be augmented and enhanced. As a result, it is often regarded as one of the most promising areas of potential for many firms today – and a key component of most digital transformation initiatives. Our team can help you create useful applications that actually benefit your business by applying the most recent AI tools and techniques.",
           
        },
        {
            image: Pic1,
            
            mainHeading: 'DevOps  ',
            content: "In the modern digital era, the majority of firms are considering DevOps approaches to move more quickly and adaptably in application development, testing, and QA. With comprehensive value addition, INPL's DevOps services enable enterprises to succeed in their digital transformation. To deliver on the DevOps and transformation investment, our DevOps team combines professional knowledge and tech skills.",
           
        },
        {
            image: Nopath,
            mainHeading: 'Cloud Computing',
            content: "The core foundation of innovation is being established by cloud computing, which is quickly progressing. Enterprises that develop the best cloud-leverage strategies will dominate the digital market by supplying personalized products and services rapidly and by developing adaptable and creative business models.",
           
        },
        {
            image: Seclock,
           
            mainHeading: 'Cybersecurity',
            content: "With as little disturbance to work as possible, we assist firms in putting security tools and procedures into use. This is accomplished by utilizing tested technical resources, enhancing current and upcoming technologies, and fusing these elements with the appropriate processes to reduce risk and provide safe environments.",
          
        },
        {
            image: Pic2,
          
            mainHeading: 'Web 3.0',
            content: "Web 3.0 is built on the essential principles of decentralization, flexibility, and enhanced user functionality. The business landscape of the present day will undergo a transformation with Web 3.0, revolutionizing how things are done. By making use of some of this cutting-edge technology's capabilities right away, you can decide to give your company an early glimpse of it.",
           
        },
    ]);

    useEffect(() => {
      window.scrollTo({
        top: 0
      })
    }, [])
    

    return (
        <>
            <Stack
                marginTop={'0 !important'}
                bgImage={bannerDataURL}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                bgAttachment={{ base: 'inherit', md: 'fixed' }}
                height={{ base: '40vh', md: '60vh' }}
                display={'flex'}
                justifyContent={'center'}
                position={'relative'}
                zIndex={'1'}
                _after={
                    {
                        content: '""',
                        position: 'absolute',
                        bg: '#ffffffd9',
                        w: '100%',
                        h: '100%',
                        zIndex: '-1'
                    }
                }
            >
                <MiniBanner simpleHeading={'Tech'} strokeHeading={'nology'} />

            </Stack>
            <Stack bg={'#fff'}>
                <Container
                    maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
                >
                    {
                        MarketingDetailsList.map(
                            (v, i) =>
                                <ServiceSubContentOne
                                    {...v}
                                    key={i}
                                    direction={(i % 2 !== 0) ? 'row-reverse' : 'row'}
                                />
                        )
                    }
                </Container>

            </Stack>
        </>
    )
}
