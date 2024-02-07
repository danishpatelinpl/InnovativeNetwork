import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import DotsBlueBg from '../../../assets/images/numberBoxBlueBg.jpg'
import VisibilitySensor from 'react-visibility-sensor-v2'
import CountUp from 'react-countup'

export default function AboutNumberBox({ numbers, label }) {

    return (
        <Stack
            data-aos={'fade-right'}
            data-aos-delay={300}
            w={{ base: '100%', md: '30%' }}
            border={'2px solid'}
            borderColor={'primaryBlue.100'}
            borderRadius={12}
            height={{ base: '150px', md: '250px' }}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'relative'}
            bgColor={'#000'}
            overflow={'hidden'}
            marginBottom={{ base: '20px !important', md: '0px' }}
        >
            <Box
                px={6}
                position={'relative'}
                zIndex={2}
            >

                <VisibilitySensor>
                    {({ isVisible }) =>
                        <Heading
                            fontWeight={'bold'}
                            color={'white.100'}
                            fontSize={{ base: '38px', md: '68px' }}
                            pb={4}
                        >
                            {
                                isVisible ?
                                    <>
                                        <CountUp end={numbers} duration={1} />
                                        <Text as={'span'}>+</Text>
                                    </>
                                    :
                                    `${numbers}+`
                            }
                        </Heading>
                    }
                </VisibilitySensor>
                <Text
                    color={'white.100'}
                    fontSize={{ base: '16px', lg: '20px' }}
                >
                    {label}
                </Text>
            </Box>
            <Image
                src={DotsBlueBg}
                alt={'numberBox'}
                position={'absolute'}
                top={'-8px'}
                left={'0'}
                height={'100%'}
                zIndex={1}
                w={'100%'}
            />
        </Stack>
    )
}
