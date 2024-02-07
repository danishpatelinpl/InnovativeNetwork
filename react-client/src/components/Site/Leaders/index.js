import { Container, Heading, Stack, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import LeadersBox from './LeadersBox';
import { RiLinkedinFill, RiFacebookFill } from 'react-icons/ri'
import { AiOutlineInstagram } from 'react-icons/ai'
import SmRehan from '../../../assets/images/smrehan2.jpg'
import SmOvais from '../../../assets/images/smovais2.jpg'
import AhsanIqbal from '../../../assets/images/ahsaniqbal.jpg'

export default function Leaders() {

    const bheading = {
        base: {
            textTransform: 'uppercase',
            fontSize: '24px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '5px',
        },
        'md': {
            textTransform: 'uppercase',
            fontSize: '32px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '5px',
            lineHeight: '1.4'
        },
        '2xl': {
            textTransform: 'Capitalize',
            fontSize: '54px',
            display: 'flex',
            fontFamily: 'Gilmer',
            letterSpacing: '5px'
        }
    }

    const [LeadersList] = useState([
        {
            image: AhsanIqbal,
            name: 'Ahsan Iqbal',
            designation: 'CEO',
            socialLinks: [
                {
                    icon: RiLinkedinFill,
                    link: '#'
                },
                {
                    icon: AiOutlineInstagram,
                    link: '#'
                },
                {
                    icon: RiFacebookFill,
                    link: '#'
                }
            ]
        },
        {
            image: SmRehan,
            name: 'SM Rehan',
            designation: 'Director',
            socialLinks: [
                {
                    icon: RiLinkedinFill,
                    link: '#'
                },
                {
                    icon: AiOutlineInstagram,
                    link: '#'
                },
                {
                    icon: RiFacebookFill,
                    link: '#'
                }
            ]
        },
        {
            image: SmOvais,
            name: 'Ovais Rehan',
            designation: 'Head of Marketing',
            socialLinks: [
                {
                    icon: RiLinkedinFill,
                    link: '#'
                },
                {
                    icon: AiOutlineInstagram,
                    link: '#'
                },
                {
                    icon: RiFacebookFill,
                    link: '#'
                }
            ]
        }
    ]);

    return (
        <Stack
            borderTop={'4px solid #adadad'}
            bg={'white.100'}
            py={8}
            pb={24}
            marginTop={'0 !important'}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack
                    textAlign={'center'}
                    justifyContent={'center'}
                    direction={'row'}
                    pb={12}
                >
                    <Heading
                        className='stok2' sx={useBreakpointValue(bheading)}>
                        Meet INPL
                    </Heading>
                    <Heading marginLeft={'20px'} sx={useBreakpointValue(bheading)} color={'primaryBlue.100'}>Leaders</Heading>
                </Stack>
                <Stack
                    maxW={{ base: '90%', lg: '80%' }}
                    marginX={'auto'}
                    direction={'row'}
                    alignItems={'flex-start'}
                    justifyContent={'space-between'}
                    spacing={0}
                    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                >
                    {
                        LeadersList.map((v, i) => <LeadersBox {...v} key={i} />)
                    }
                </Stack>
            </Container>
        </Stack>
    )
}
