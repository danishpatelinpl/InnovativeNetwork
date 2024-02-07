import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function SingleLeader({ image, name, designation, shortDesignation, content, direction }) {
    return (
        <Stack
            py={62}
            direction={{ base: 'column', lg: direction }}
            borderBottom={'2px solid #adadad'}
            alignItems={'center'}
        >
            <Box
                w={{ base: '100%', lg: '50%' }}
                textAlign={{ base: 'center', lg: 'left' }}
            >
                <Heading
                    fontSize={{ base: 42, lg: 58 }}
                    color={'bgGrays.100'}
                    position={'relative'}
                    w={'fit-content'}
                    marginX={{ base: 'auto', lg: 'unset' }}
                    fontWeight={'600'}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        w: '100%',
                        zIndex: -1,
                        h: { base: '4px', lg: '10px' },
                        bgColor: 'primaryOrange.100',
                        bottom: '15px'
                    }}
                >
                    {name}
                </Heading>
                <Text
                    as={'span'}
                    fontWeight={'600'}
                    fontSize={{ base: '15px', lg: '18px' }}
                >
                    {designation}
                </Text>
                <Text
                    as={'span'}
                    fontWeight={'500'}
                    fontSize={{ base: '15px', lg: '18px' }}
                    color={'primaryOrange.100'}
                >
                    {shortDesignation}
                </Text>
                <Text
                    fontSize={{ base: '14px', lg: '18px' }}
                    textAlign={{ base: 'justify', lg: 'left' }}
                    pt={4}
                >
                    {content}
                </Text>
            </Box>
            <Box
                w={{ base: '100%', lg: '50%' }}
                textAlign={'center'}
            >
                <Image
                    w={'450px'}
                    marginX={"auto"}
                    src={image}
                    alt={name}
                />
            </Box>
        </Stack>
    )
}
