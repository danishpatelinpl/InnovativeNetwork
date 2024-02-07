import { Box, Link, Stack, Text } from '@chakra-ui/react'
// import { Link as ReactLink } from 'react-router-dom';
// import { BiMenuAltLeft } from 'react-icons/bi';
import Sidemenu from './Sidemenu';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import useScrollBlock from '../../../hooks/useScrollBlock';

export default function Index() {

    const [openmenu, setopenmenu] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    const openingFunction = () => {
        !openmenu ? blockScroll() : allowScroll()
        setopenmenu(!openmenu);
    }

    useEffect(() => {
        // Visible Header
        setTimeout(() => {
            gsap.to('#sideNav', 1, {
                delay: 1,
                left: '0px'
            });
        }, 5500);
        return;
    }, []);

    return (
        <>
            <Stack
                display={{base: 'none', md: 'block'}}
                id={'sideNav'}
                bg={'#585858'}
                h={'full'}
                w={'81px'}
                top={'-8px'}
                left={'-82px'}
                position={'fixed'}
                zIndex={'13'}
                px={4}
                transition={'all ease 0.1s'}
                cursor={'pointer'}
                onClick={() => {
                    openingFunction();
                }}
            >
                <Box pt={'12'}>
                    <Link

                    >
                        <Box>
                            <Text
                                color={'white'}
                                fontWeight={'400'}
                                fontSize={'16px'}

                            >Menu</Text></Box>
                        <Box display={'flex'} flexDirection={'column'} gap={'3px'}>
                            <Text as={'div'} w={'45px'} h={'1px'} bg={'#fff'} ></Text>
                            <Text as={'div'} w={'35px'} h={'1px'} bg={'#fff'} ></Text>
                            <Text as={'div'} w={'20px'} h={'1px'} bg={'#fff'} ></Text>
                        </Box>
                    </Link>
                </Box>
            </Stack>
            <Sidemenu menustatus={openmenu} openingFunction={openingFunction} />
        </>
    )
}
