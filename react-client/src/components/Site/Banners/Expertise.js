import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';
import { SiAzuredevops } from 'react-icons/si';
import { BsShieldLock, BsFileEarmarkCode } from 'react-icons/bs';
import { AiOutlinePartition, AiOutlineBarChart } from 'react-icons/ai';
import ExpertiseBox from './ExpertiseBox';
import gsap from 'gsap';
import { RiShoppingCartLine } from 'react-icons/ri'
import { FaSeedling } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { CgArrowsExchangeAlt, CgCodeSlash, CgDetailsMore } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { updateBannerAnimationStatus } from '../../../reducers/useReducers';

export default function Expertise() {

    const dispatch = useDispatch();
    const animationStatus = useSelector(state => state.bannerAnimationStatus)

    const [expertise] = useState([
        {
            icon: RiShoppingCartLine,
            lable: 'Retail'
        },
        {
            icon: FaSeedling,
            lable: 'Agriculture'
        },
        {
            icon: GiFactory,
            lable: 'Manufacturing'
        },
        {
            icon: CgArrowsExchangeAlt,
            lable: 'Trading'
        },
        {
            icon: CgCodeSlash,
            lable: 'Software & Application (IT)'
        },
        {
            icon: AiOutlineHome,
            lable: 'Real State'
        },
        {
            icon: CgDetailsMore,
            lable: 'Many More'
        }
    ])

    useEffect(() => {

        if (animationStatus) {
            // Visible Header
            setTimeout(() => {
                gsap.to('#Expertise', 1, {
                    delay: 0.2,
                    opacity: 1,
                    translateY: '0px'
                });
            }, 2500);
        } else {
            // Visible Header
            setTimeout(() => {
                gsap.to('#Expertise', 1, {
                    delay: 1,
                    opacity: 1,
                    translateY: '0px'
                });
            }, 5500);
            dispatch(updateBannerAnimationStatus(true));
        }

        return;
    }, []);

    return (
        <Stack
            id={'Expertise'}
            opacity={0}
            transform={'translateY(30px)'}
            transition={'all ease 0.2s'}
        >
            <Stack gap={'8'}>
                <Box>
                    <Heading color={'#fff'} fontSize={'28px'} fontWeight={300}><Text fontWeight={500} as={'span'}>Industries</Text> we fall into</Heading>
                </Box>
                <Flex flexWrap={{base: 'wrap', lg: 'nowrap'}} justifyContent={'flex-start'} gap={'6'}>
                    {
                        expertise.map((v, i) => <ExpertiseBox key={i} {...v} />)
                    }
                </Flex>
            </Stack>
        </Stack>
    )
}
