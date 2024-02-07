import { Box, Container, Stack } from '@chakra-ui/react'
import TransformContent from './TransformContent'
import TransformBallPic from './TransformBallPic'
import AOS from 'aos'

export default function TransformBall() {

    AOS.init();

    return (
        <Stack
            pt={{ base: '40px', md: '160px' }}
            pb={{ base: '40px', md: '100px' }}
            textAlign={{base: 'center', md: 'left'}}
            bgGradient='linear(to-b, #1a1a1a, #1a1a1a, #575757)'
            marginTop={'0 !important'}
        >
            <Container maxW={{ 'xl': '6xl', '2xl': '8xl' }}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={8}
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                >
                    <Box
                        w={{ base: '100%', md: '50%' }}
                        data-aos={'fade-right'}
                        data-aos-delay={300}
                    >
                        <TransformContent />
                    </Box>
                    <Box
                        display={{ base: 'none', md: 'initial' }}
                        w={'50%'}
                    >
                        <TransformBallPic />
                    </Box>
                </Stack>
            </Container>
        </Stack>
    )
}
