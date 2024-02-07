import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import activityBg from '../../../assets/images/activityBg.jpg'
import ActivitySlider from './ActivitySlider'

export default function Activity() {
    return (
        <Stack
            display={{base: 'none', lg: 'block'}}
            pt={{ base: '50px', md: '100px' }}
            pb={{ base: '50px', md: '100px' }}
            bgImage={activityBg}
            bgPosition={'left'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgAttachment={'fixed'}
            marginTop={'0 !important'}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack
                    pb={12}
                >
                    <Heading
                        color={'white.100'}
                        fontWeight={300}
                        fontSize={{base: '38px',md: '64px'}}
                        data-aos={'fade-down'}
                        data-aos-delay={300}
                    >
                        Recent <Text as={'span'}
                            color={'primaryBlue.100'}
                            fontWeight={'bold'}
                            textShadow={'5px 5px 11px #1a1a1a5e'}
                        >
                            Activity
                        </Text>
                    </Heading>
                </Stack>
                <Stack>
                    <ActivitySlider />
                </Stack>
            </Container>
        </Stack>
    )
}
