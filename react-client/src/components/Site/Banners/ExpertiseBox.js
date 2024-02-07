import { Box, Icon, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom';
export default function ExpertiseBox({ icon, lable }) {



    return (
        <Link as={ReactLink} to='/industries'>
            <Box
                className='notA'
                role={'group'}
                display={'flex'}
                alignItems={'center'}
                bg={'#1d6bb34a'}
                py={'11px'}
                px={{ md: '10px', '2xl': '25px' }}
                borderRadius={'6px'}
                border={'2px dashed #1D6BB3'}
                position={'relative'}
                zIndex={'10'}
                overflow={'hidden'}
                transition={'all ease .3s'}
                cursor={'pointer'}
                _before={{
                    content: '""',
                    position: 'absolute',
                    bgGradient: 'linear(to-r, #1E6DB5, #3485D1)',
                    h: '100%',
                    w: '100%',
                    bottom: '0',
                    left: '0',
                    transition: 'transform 0.3s ease-in-out',
                    zIndex: '-1',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                }}
                _hover={{
                    _before: {
                        transform: 'scaleX(1)',
                        transformOrigin: 'bottom left',
                    }
                }}

            >

                <Icon _groupHover={{ color: '#fff' }} color={'#50a5f3'} fontSize={'20px'} mr={'2'} as={icon}></Icon>
                <Text color={'#fff'} fontSize={{ md: '12px', '2xl': '15px' }}>{lable}</Text>

            </Box>
        </Link>
    )
}
