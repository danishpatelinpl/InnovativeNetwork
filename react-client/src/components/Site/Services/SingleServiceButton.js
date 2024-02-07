import { Button, Container, Stack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateService } from '../../../reducers/useReducers';

export default function SingleServiceButton(props) {

    const dispatch = useDispatch();
    const selectedService = useSelector(state => state.service)

    return (
        <Stack
            position={'relative'}
            zIndex={1}
            marginTop={'-30px !important'}
           
        >
            <Container
                maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
            >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={{base: 2, lg: 4}}
                    justifyContent={'center'}
                    flexWrap={'wrap'}
                    spacing={0}
                >
                    {
                        Object.values(props).map((v, i) =>
                            <Button
                                key={i}
                                w={{base: '47%', md: '23%'}}
                                borderRadius={8}
                                bgColor={selectedService === v ? 'primaryOrange.100' : 'bgGrays.100'}
                                border={'2px solid #EF5A2A'}
                                color={"#fff"}
                                transition={'all ease .4s'}
                                fontWeight={500}
                                fontSize={{base: '14px', lg: '17px'}}
                                height={{base: '40px',lg: '70px'}}
                                _hover={{
                                    bgColor: 'primaryOrange.100',
                                }}
                                onClick={()=>dispatch(updateService(v))}
                            >
                                {v}
                            </Button>
                        )
                    }
                </Stack>
            </Container>
        </Stack>
    )
}