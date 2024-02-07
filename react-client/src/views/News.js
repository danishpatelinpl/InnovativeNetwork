import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Articles from '../components/Site/Articles'
import ArticleBanner from '../components/Site/Articles/ArticleBanner'
import { useState } from 'react'
import Seven from '../assets/images/news/7.png'
import Eight from '../assets/images/news/8.png'
import Nine from '../assets/images/news/9.png'
import SingleArticle from '../components/Site/Articles/SingleArticle'
import Freaturedpost from '../components/Site/Freatured'
import Post from '../assets/images/service/post1.jpg'
import bannerDataURL from '../utilities/bannerDataURL'


export default function News() {

    const [SingleNewsList] = useState([
        {
            image: Seven,
            heading: '25 Inspirational Examples of Minimal Logo Design',
            content: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem',
        },
        {
            image: Eight,
            heading: '25 Inspirational Examples of Minimal Logo Design',
            content: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem',
        },
        {
            image: Nine,
            heading: '25 Inspirational Examples of Minimal Logo Design',
            content: 'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem',
        },
    ]);

    const [MainNewsList] = useState(
        {
            smallHeading: 'Featured Content',
            largeHeading: 'Read up on what have we been upto',
            news: [
                {
                    image: Post,
                    title: 'The Emerging Star: Innovative Game Studio',
                    label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
                    link: '#'
                },
                {
                    image: Post,
                    title: 'Acceletrating your Digital transformation',
                    label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
                    link: '#'
                },
                {
                    image: Post,
                    title: 'Entrusted to deliver the best for our customers, everyday',
                    label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
                    link: '#'
                }
            ]
        }
    );


    useEffect(() => {
        window.scrollTo({
            top: 0,
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
                height={{ base: '40vh', md: '70vh' }}
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
                <MiniBanner simpleHeading={"New's"} strokeHeading={'Feed'} banPic={false} marginLeft={true} />
            </Stack>
            <Articles />
            <ArticleBanner />
            <SingleArticle {...SingleNewsList} />
            <Freaturedpost {...MainNewsList} />
        </>
    )
}
