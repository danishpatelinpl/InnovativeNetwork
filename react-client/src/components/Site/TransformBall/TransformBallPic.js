import { Image, Stack } from '@chakra-ui/react'
// import Ball from '../../../assets/images/ball.png'
import Ball2 from '../../../assets/images/ball.webp'
import BallShadow from '../../../assets/images/ballShadow.png'

export default function TransformBallPic() {
    return (
        <>
            <Stack
                position={'relative'}
            >
                <Image
                    src={Ball2}
                    alt={'ball'}
                    w={{ xl: '320px', '2xl': '450px' }}
                    marginX={'auto'}
                    position={'relative'}
                    zIndex={2}
                    className={'transformBall'}
                />
                <Image
                    src={BallShadow}
                    alt={'ballShadow'}
                    position={'absolute'}
                    bottom={'-100px'}
                    zIndex={1}
                    w={{xl: '50%', '2xl': '70%'}}
                    left={{ xl: '75px', '2xl': '95px' }}
                    className={'transformBallShadow'}
                />
            </Stack>
        </>
    )
}
