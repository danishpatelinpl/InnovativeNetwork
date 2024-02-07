import { Container, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CyberSecurity from './CyberSecurity/CyberSecurity';
import Games from './Games/Games';
import Graphics from './Graphics/Graphics';
import BlockChain from './BlockChain/BlockChain';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import DevOps from './DevOps/DevOps';
import Web from './Web/Web';
import Software from './Software/Software'
import ThreeDeeModeling from './ThreeDeeModeling/ThreeDeeModeling';

export default function SingleService() {

    const service = useSelector(state => state.service);

    return (
        <Stack
            marginTop={'0px !important'}
        >
            <Container
                maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
            >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={4}
                    justifyContent={'center'}
                    flexWrap={'wrap'}
                    spacing={0}
                >

                </Stack>
            </Container>
            <Stack>
                {
                    service === 'Cyber Security' ?
                        <CyberSecurity />
                        : service === 'Graphics/Animation' ?
                            <Graphics />
                            : service === 'Games' ?
                                <Games />
                                : service === 'Block Chain' ?
                                    <BlockChain />
                                    : service === 'Digital Marketing' ?
                                        <DigitalMarketing />
                                        : service === 'Dev Ops' ?
                                            <DevOps />
                                            : service === 'Web 3.0' ?
                                                <Web />
                                                :
                                                service === '3D Modeling' ?
                                                    <ThreeDeeModeling />
                                                    :
                                                    <Software />


                }
            </Stack>
        </Stack>
    )
}
