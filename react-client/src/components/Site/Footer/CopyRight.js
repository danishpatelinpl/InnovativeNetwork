import {
    Box, Container, Stack, Text, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Icon,
    Link
} from '@chakra-ui/react'
import { useState } from 'react'
import { RiFacebookFill, RiLinkedinFill, RiInstagramLine } from 'react-icons/ri';

export default function CopyRight() {


    const icncolr =
    {
        color: '#fff',
        fontSize: '18px'
    }

    return (
        <Stack
            bgColor={'bgGrays.300'}
            py={4}

        >
            <Container
                maxW={{ 'xl': 'container.xl', '2xl': '8xl' }}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Box>
                        <Text
                            color={'#fff'}
                            fontSize={{ base: '12px', md: '16px' }}
                        >
                            Managed by <Text as={'span'} color={'#ef5a2a'} fontWeight={'semibold'}>Innovative Digital Agency</Text>. All Rights Reserved.</Text>
                    </Box>
                    <Box textAlign={'right'}>
                        <UnorderedList display={'flex'} gap={'6'}>
                            <ListItem><Link href={'https://www.facebook.com/innovativenetworkltd/'} target={'_blank'}><Icon sx={icncolr} as={RiFacebookFill}></Icon></Link></ListItem>
                            <ListItem><Link href={'https://www.linkedin.com/company/innovative-network-pvt-ltd/mycompany/'} target={'_blank'}><Icon sx={icncolr} as={RiLinkedinFill}></Icon></Link></ListItem>
                            <ListItem><Link href={'https://www.instagram.com/innovativepvtltd3/'} target={'_blank'}><Icon sx={icncolr} as={RiInstagramLine}></Icon></Link></ListItem>
                        </UnorderedList>
                    </Box>
                </Stack>
            </Container>

        </Stack>
    )
};