import { border, Box, Stack } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateMileStone } from '../../../reducers/useReducers';
import FlagMaterial from './FlagMaterial'

export default function MileStoneFlag({ color, year, image, label, content }) {

    const dispatch = useDispatch();
    const mileStone = useSelector(state => state.mileStone)

    return (
        <Stack
            onMouseEnter={() => dispatch(updateMileStone(label))}
            cursor={'pointer'}
            borderLeft={`6px solid ${color}`}
            height={'400px'}
            w={{ 'md': '47%', 'xl': '26%', '2xl': '23%' }}
            position={'relative'}
            transform={year > 2020 ? 'transalateY(-10px)' : 'translateY(4px)'}
            zIndex={2}
            direction={'column'}
            justifyContent={year > 2020 ? 'flex-start' : 'flex-end'}
            _before={
                year > 2020 ?
                    {
                        content: '""',
                        position: 'absolute',
                        left: '-15px',
                        top: '-10px',
                        borderRadius: '100%',
                        bgColor: color,
                        width: '25px',
                        height: '25px',
                        zIndex: 2
                    }
                    :
                    {
                        content: '""',
                        position: 'absolute',
                        left: '-15px',
                        bottom: '-10px',
                        borderRadius: '100%',
                        bgColor: color,
                        width: '25px',
                        height: '25px',
                        zIndex: 2
                    }
            }
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
                transform={(mileStone === label) ? 'translateY(14px)' : 'translateY(-0px)'}
            >
                {year}
            </Box>
            <FlagMaterial image={image} label={label} content={content} />
        </Stack>
    )
}
