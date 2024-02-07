import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Brands from '../components/Site/Brands'
import Locations from '../components/Site/Locations'
import bannerDataURL from '../utilities/bannerDataURL'

export default function OurBrands() {
    
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
                height={{ base: '70vh', md: '60vh' }}
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
                <MiniBanner  simpleHeading={'Our'} strokeHeading={'Brands'}  marginLeft={true}/>
            </Stack>
            <Brands />
        </>
    )
}
