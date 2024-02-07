import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ChainBg from '../../../assets/images/chainBg.jpg'
import { useNavigate } from 'react-router-dom'
export default function BlockChainBan() {

    const navigate = useNavigate();

    return (
        <Stack
            py={36}
            backgroundImage={ChainBg}
            backgroundSize={'cover'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            textAlign={'center'}
            alignItems={'center'}
            position={'relative'}
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                background: '#1a1a1a8c',
                w: '100%',
                h: '100%',
                zIndex: 0
            }}
        >
            <Heading
                color={'white.100'}
                textTransform={'capitalize'}
                pb={8}
                fontWeight={400}
                zIndex={1}
            >
                Do you wanna Switch your business to
                <Text
                    color={'primaryOrange.100'}
                    fontWeight={'bold'}
                >
                    Block Chain System?</Text>
            </Heading>
            <Button
                bgColor={'primaryOrange.300'}
                py={'30px'}
                px={{ base: '0px', md: '120px' }}
                w={{ base: '100%', md: '420px' }}
                marginX={'auto'}
                textAlign={'center'}
                color={'white.100'}
                fontSize={'20px'}
                borderRadius={6}
                fontWeight={400}
                transition={'all ease 0.4s'}
                border={'2px solid'}
                borderColor={'primaryOrange.100'}
                _hover={{
                    bgColor: 'primaryBlue.100',
                    borderColor: 'primaryBlue.100',
                    color: 'white.100'
                }}
                onClick={()=>navigate('/contact')}
            >
                Schedule a call
            </Button>
        </Stack>
    )
}
