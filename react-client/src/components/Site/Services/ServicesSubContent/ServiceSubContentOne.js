import { Box, Heading, Icon, Image, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { RiShareBoxLine } from 'react-icons/ri'
import { Link as ReactLink } from 'react-router-dom';

export default function ServiceSubContentOne({ image, smallHeading, mainHeading, coloredMainHeading, content, direction, link }) {

    return (
        <Stack
            pt={6}
            pb={12}
            direction={{base: 'column', md: direction}}
            alignItems={'center'}
            justifyContent={'space-evenly'}
        >
            <Box
                w={{base: '80%', md: '46%'}}
            >
                <Image src={image} alt={''} />
            </Box>
            <Box
                w={{base: '100%', md: '50%'}}
                textAlign={{base: 'center', lg: 'left'}}
            >
                <Heading
                    fontSize={{base: '18px', md: '20px'}}
                    textTransform={'capitalize'}
                    color={'primaryOrange.100'}
                >{smallHeading}</Heading>
                <Heading
                    fontSize={{base: '20px', md: '50px', lg: '50px'}}
                    textTransform={'capitalize'}
                    color={'bgGrays.100'}
                    pb={6}
                >{mainHeading} <Text as={'span'} color={'primaryOrange.100'}>{coloredMainHeading ?? ''}</Text></Heading>
                <Text
                    maxW={{base: '100%', md: '100%', lg: '80%'}}
                    fontSize={{base: '14', md:'18'}}
                    mb={'4'}
                >{content}</Text>
                {
                    link &&
                    <Link to={link} fontWeight={'600'} color={'primaryOrange.100'}>See More <Icon verticalAlign={'middle'} as={RiShareBoxLine}></Icon></Link>
                }
            </Box>
        </Stack>
    )
}
