import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ContactSec from '../components/Site/Contact'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Locations from '../components/Site/Locations'
import bannerDataURL from '../utilities/bannerDataURL'

export default function Contact() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, []);

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
                <MiniBanner simpleHeading={"Contact"} strokeHeading={'Us'} banPic={false} marginLeft={true} />
            </Stack>
            <ContactSec />
            <Locations />
        </>
    )
};