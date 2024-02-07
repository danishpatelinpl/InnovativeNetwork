import { Button, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function TransformContent() {

    const navigate = useNavigate();

    return (
        <>
            <Heading
                fontSize={{ base: '42px', md: '52px' }}
                color={'white.100'}
                fontWeight={300}
            >
                Looking for
            </Heading>
            <Heading
                fontSize={{ base: '44px', xl: '68px', '2xl': '84px' }}
                fontWeight={'bold'}
                color={'primaryOrange.100'}
                textTransform={'uppercase'}
            >
                Evolution?
            </Heading>
            <Text
                color={'white.100'}
                fontWeight={400}
                pb={6}
                fontSize={{ base: '14px', md: '16px' }}
            >
                Digitally transform your business with a company you can trust.</Text>
            <Button
                onClick={()=>navigate('/contact')}
                bgColor={'primaryOrange.200'}
                py={'30px'}
                px={{base: '0px', md: '120px'}}
                w={{base: '100%', md: 'initial'}}
                textAlign={'center'}
                color={'primaryOrange.100'}
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
            >
                Schedule a call
            </Button>
        </>
    )
}
