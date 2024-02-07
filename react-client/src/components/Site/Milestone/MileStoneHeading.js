import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

export default function MileStoneHeading() {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
            <Box
                w={{ base: '100%', md: '52%' }}
                borderRight={{ base: '0px', md: '2px solid #1a1a1a' }}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                >
                    <Heading
                        fontWeight={'bold'}
                        fontSize={{ 'base': '92px', 'xl': '180px', '2xl': '240px' }}
                        color={'primaryOrange.100'}
                    >
                        5
                    </Heading>
                    <Heading
                        lineHeight={'0.9'}
                        fontSize={{ 'base': '42px', 'xl': '72px', '2xl': '102px' }}
                        fontWeight={300}
                        color={'primaryOrange.100'}
                    >
                        Years <Text
                            color={'bgGrays.100'}
                            fontWeight={'500'}
                        >Milestone</Text></Heading>
                </Box>
            </Box>
            <Box
                w={{ base: '100%', md: '52%' }}
            >
                <Text
                    fontSize={{ 'base': '14px', 'xl': '15px', '2xl': '18px' }}

                >What started with a handful of people has now grown into one of the leading software houses in Pakistan. Having rich experience of more than 25 years across industries, the Innovative Network serves as a hub for state-of-the-art IT and digital solutions and bears a proven record of turning businesses’ ideas and concepts into reality.</Text>
            </Box>
        </Stack>
    )
}
