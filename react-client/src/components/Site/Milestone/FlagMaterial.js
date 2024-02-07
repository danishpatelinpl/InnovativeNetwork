import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function FlagMaterial({ image, label, content }) {

    const mileStone = useSelector(state => state.mileStone)

    return (
        <Stack
            bgColor={'white.100'}
            borderRadius={'10px'}
            zIndex={1}
            transform={'translateY(-22px)'}
            boxShadow={'0px 0px 35px -10px #adadad'}
            height={mileStone === label ? '349px' : '0px'}
            overflow={'hidden'}
            transition={'all ease 0.8s'}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                px={{ 'xl': '5px', '2xl': '10px' }}
                py={'20px'}
                gap={'10px'}
                borderBottom={'1px solid #adadad'}
                pb={'15px'}
            >
                <Box>
                    <Image src={image} alt={'logo'} w={'75px'} h={'75px'} objectFit={'contain'} />
                </Box>
                <Box>
                    <Text
                        fontSize={{ 'xl': '14px', '2xl': '16px' }}
                        fontWeight={'500'}
                    >
                        {label}
                    </Text>
                </Box>
            </Stack>
            <Stack
                px={'10px'}
                pb={'10px'}
            >
                <Text
                    pt={'5px'}
                    fontSize={'13px'}
                    height={'160px'}
                    overflow={'hidden'}
                >
                    {content}
                </Text>
            </Stack>
        </Stack>
    )
}
