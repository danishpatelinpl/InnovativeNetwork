import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import SingleService from '../components/Site/Services/SingleService'
import SingleServiceButton from '../components/Site/Services/SingleServiceButton'
import Locations from '../components/Site/Locations'
import bannerDataURL from '../utilities/bannerDataURL'

export default function Services() {
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])

    const [ServiceButtons] = useState(['Cyber Security', 'Graphics/Animation', 'Games', 'Block Chain', 'Digital Marketing', 'Dev Ops', 'Web 3.0', 'Software Dev', '3D Modeling'])

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
                <MiniBanner  simpleHeading={'Service'} strokeHeading={'s'}  />
            </Stack>
            <SingleServiceButton {...ServiceButtons} />
            <SingleService />
            <Locations />
        </>
    )
}
