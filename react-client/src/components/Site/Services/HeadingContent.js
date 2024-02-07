import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function HeadingContent({ heading, behindHeading }) {
    return (
        <Stack
            py={{base:16,lg:32}}
            textAlign={'center'}
        >
            <Heading
                color={'bgGrays.100'}
                fontSize={{base:30,lg:92}}
                position={'relative'}
                zIndex={0}
            >
                {heading}
                <Text
                    className='serviceStroke'
                    position={'absolute'}
                    top={'-100%'}
                    left={0}
                    right={0}
                    marginX={'auto'}
                    fontSize={{base:60,lg:300}}
                    zIndex={-1}
                >
                    {behindHeading}
                </Text>
            </Heading>
        </Stack>
    )
}
