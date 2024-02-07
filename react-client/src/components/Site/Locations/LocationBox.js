import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import React from 'react'

export default function LocationBox({ image, country, address, phone, email }) {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={0}
            justifyContent={'space-between'}
            pb={'40px'}
            role={'group'}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
            <Box
                w={{ base: '100%', md: '35%' }}
                pb={{ base: '15px', md: '0px' }}
            >
                <Image
                    src={image ?? ''}
                    w={'120px'}
                    marginLeft={{ base: 'initial', md: 'auto' }}
                    marginX={{ base: 'auto', md: 'auto' }}
                    alt={country}
                />
            </Box>
            <Box
                w={'10%'}
            >
                <Box
                    border={'1px solid'}
                    borderColor={'white.100'}
                    w={'1px'}
                    h={'100px'}
                    position={'relative'}
                    left={country === 'London' ? '25%' : '45%'}
                    transition={'all ease 0.3s'}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: '-1px',
                        left: '-6px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50px',
                        border: '2px solid #fff',
                        backgroundColor: 'primaryOrange.100',
                        transition: 'all ease 0.3s',
                    }}
                    _after={{
                        content: '""',
                        position: 'absolute',
                        bottom: '-1px',
                        left: '-6px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50px',
                        border: '2px solid #fff',
                        backgroundColor: 'primaryOrange.100',
                        transition: 'all ease 0.3s',
                    }}
                // _groupHover={{
                //     transform: 'translateY(15px)',
                //     _before: {
                //         transition: 'all ease 0.3s',
                //         top: '-35px',
                //         left: '20px'
                //     },
                //     _after: {
                //         width: '36px',
                //         left: '-18px',
                //         height: '8px',
                //         borderRadius: '3px',
                //     }
                // }}
                ></Box>
            </Box>
            <Box
                w={{ base: '80%', md: '55%' }}
                color={'white.100'}
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={300}
            >
                <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    color={'white.100'}
                    pb={{ base: '10px', md: '20px' }}
                    fontWeight={400}
                >
                    {country}
                </Heading>
                <Text
                    pb={2}
                >
                    <Text as={'span'} fontWeight={600}>Address: </Text>{address}
                </Text>
              {
                phone && 
                <Text
                pb={2}
            >
                <Text as={'span'} fontWeight={600}>Phone: </Text>
                <Link as={ReactLink} to={`tel:${phone}`}>{phone}</Link>
            </Text>
              }
                {
                    email &&
                    <Text
                    pb={2}
                >
                    <Text as={'span'} fontWeight={600}>Email: </Text>
                    <Link as={ReactLink} to={`mailto:${email}`}>{email}</Link>
                </Text>
                }
            </Box>
        </Stack>
    )
}