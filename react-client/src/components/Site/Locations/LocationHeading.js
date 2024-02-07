import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'

export default function LocationHeading() {

    const navigate = useNavigate();

    return (
        <>
            <Box
                mb={{ base: '25px', lg: '60px' }}
            >
                <Image
                    src={Logo}
                    alt={'logo'}
                    w={'190px'}
                    h={'118px'}
                    marginX={{ base: 'auto', lg: 'initial' }}
                />
            </Box>
            <Heading
                color={'white.100'}
                fontWeight={500}
                fontSize={{ base: '24px', lg: '32px', '2xl': '36px' }}
                pb={{ base: '25px', lg: '60px' }}
            >
                Want to talk about y
                <Text
                    as={'span'}
                    display={'inline-block'}
                    borderRadius={'50%'}
                    border={'3px solid #fff'}
                    p={{ base: '4px', lg: '6px', '2xl': '7px' }}
                    backgroundColor={'primaryOrange.100'}
                ></Text>ur
                <Text
                    color={'primaryOrange.100'}
                >pr
                    <Text
                        as={'span'}
                        display={'inline-block'}
                        borderRadius={'50%'}
                        border={'3px solid'}
                        borderColor={'primaryOrange.100'}
                        p={{ base: '4px', lg: '6px', '2xl': '7px' }}
                        w={'10px'}
                        h={'10px'}
                        backgroundColor={'white.100'}
                    ></Text>ject?</Text>
            </Heading>
            <Button
                onClick={()=>navigate('/contact')}
                bgColor={'primaryBlue.100'}
                w={{ base: '100%', lg: 'initial' }}
                py={'30px'}
                px={{ lg: '90px', '2xl': '120px' }}
                textAlign={'center'}
                color={'white.100'}
                fontSize={'20px'}
                borderRadius={6}
                fontWeight={400}
                transition={'all ease 0.4s'}
                border={'2px solid'}
                borderColor={'primaryBlue.100'}
                _hover={{
                    bgColor: 'primaryOrange.200',
                    borderColor: 'primaryOrange.100',
                    color: 'primaryOrange.100'
                }}
            >
                Schedule a call
            </Button>
        </>
    )
}
