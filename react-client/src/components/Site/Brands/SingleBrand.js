import { Image, Stack, Link, Box, Text } from '@chakra-ui/react'
import { wrap } from 'gsap'

export default function SingleBrand({ direction, logo, sidePic, link, content }) {

    return (
        <Stack
            py={'10'}
            pb={'16'}
            direction={direction}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexWrap={{base:'wrap',lg:'nowrap'}}
            borderBottom={'2px solid #adadad'}
            position={'relative'}
            _before={{
                content: '""',
                position: 'absolute',
                left: '-2px',
                bottom: '-5px',
                w: '10px',
                h: '10px',
                borderRadius: '100%',
                bgColor: 'primaryOrange.100'
            }}
            _after={{
                content: '""',
                position: 'absolute',
                right: '-2px',
                bottom: '-5px',
                w: '10px',
                h: '10px',
                borderRadius: '100%',
                bgColor: 'primaryOrange.100'
            }}
        >
            <Box
                w={{base:'100%',md:'50%'}}
                textAlign={'center'}
            >
                <Image
                    src={logo}
                    alt={'logo'}
                    pb={'35px'}
                    marginX={'auto'}
                />
                <Text
                    px={'30px'}
                    fontSize={{ base: '14px', lg: '20px' }}
                    pb={'45px'}
                >
                    {content}
                </Text>
                <Box>
                    <Link
                        href={link}
                        target={'_blank'}
                        bgColor={'bgGrays.100'}
                        borderRadius={'20'}
                        fontSize={'18'}
                        fontWeight={500}
                        py={'20px'}
                        px={'80px'}
                        color={'white.100'}
                        transition={'all ease 0.3s'}
                        _hover={{
                            bgColor: 'primaryOrange.100',
                        }}
                    >
                        Visit Website
                    </Link>
                </Box>
            </Box>
            <Box
               w={{base:'100%',md:'45%'}}
               display={{base:'none',lg:'block'}}
            >
                <Image
                    w={'90%'}
                    src={sidePic}
                    alt={'logo'}
                />
            </Box>
        </Stack>
    )
}
