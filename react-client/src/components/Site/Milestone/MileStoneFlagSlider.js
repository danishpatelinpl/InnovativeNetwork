import { border, Box, Stack } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateMileStone } from '../../../reducers/useReducers';
import FlagMaterialSlider from './FlagMaterialSlider'

export default function MileStoneFlagSlider({ color, year, image, label, content }) {


    return (
        <Stack
            cursor={'pointer'}
            borderLeft={`6px solid ${color}`}
            height={'400px'}
            w={{ 'xl': '28%', '2xl': '25%' }}
            position={'relative'}
            transform={'translateY(4px)'}
            zIndex={2}
            direction={'column'}
            justifyContent={'flex-start'}
            _before={{
                content: '""',
                position: 'absolute',
                left: '-15px',
                top: '-10px',
                borderRadius: '100%',
                bgColor: color,
                width: '25px',
                height: '25px',
                zIndex: 2
            }}
        >
            <Box
                borderTopRightRadius={'10px'}
                borderBottomRightRadius={'10px'}
                bgGradient={`linear(to-b, ${color}a1, ${color})`}
                fontWeight={600}
                fontSize={'48px'}
                color={'white.100'}
                py={{ 'xl': '1', '2xl': '2' }}
                transition={'all ease 1.4s'}
                pl={'15px'}
                transform={'translateY(-0px)'}
            >
                {year}
            </Box>
            <FlagMaterialSlider image={image} label={label} content={content} />
        </Stack>
    )
}
