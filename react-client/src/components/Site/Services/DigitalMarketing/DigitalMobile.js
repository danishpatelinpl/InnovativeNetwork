import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

export default function DigitalMobile({ image, heading, label, size }) {
    return (
        <Stack>
            <Image
                src={image}
                alt={'mobile'}
                w={size ?? '40%'}
                marginX={'auto'}
            />
            <Box
                pt={12}
                textAlign={'center'}
            >
                <Heading
                    fontSize={{base:25,lg:'68px'}}
                    fontWeight={600}
                    color={"bgGrays.100"}
                    pb={6}
                >
                    {heading} </Heading>
                <Text fontSize={{base:14,lg:18}}>{label}</Text>
            </Box>
        </Stack>
    )
}
