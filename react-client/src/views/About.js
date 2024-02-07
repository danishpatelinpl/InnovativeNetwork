import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import AboutComp from '../components/Site/About'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Choose from '../components/Site/Choose'
import Leaders from '../components/Site/Leaders'
import Stories from '../components/Site/Stories'
import AbtPeople from '../assets/images/aboutPg/aboutPeople.png'
import Locations from '../components/Site/Locations/index'
import bannerDataURL from '../utilities/bannerDataURL'

export default function About() {

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
                height={{ base: '40vh', md: '100vh' }}
                display={'flex'}
                justifyContent={{ base: 'center', md: 'flex-end'}}
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
                <MiniBanner simpleHeading={'About'} strokeHeading={'Us'} banPic={AbtPeople} marginLeft={true} />
            </Stack>
            <AboutComp extraPurposeContent={'We strive to cultivate professional relationships with our clients to provide effective and reliable, information technology solutions for their specific needs. '} extraContent={"With a strong local presence in Pakistan, Innovative Network has positioned itself as a well-established and sound company led by the industry's most professional and trained individuals, and is on its way to becoming a leading organization that facilitates, enhances, and provides measurable business value to organizations globally through the most effective use of technology and resources."} noAbout={true} />
            <Leaders />
            <Choose />
            <Stories />
            <Locations />
        </>
    )
}
