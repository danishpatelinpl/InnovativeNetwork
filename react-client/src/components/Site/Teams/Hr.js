import { Box, Heading, Icon, Image, Link, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaLinkedinIn } from 'react-icons/fa'

import { useState, useEffect } from 'react'
export default function Hr(props) {

            const [showTheOrange, setshowTheOrange] = useState(false);
            useEffect(() => {
              setTimeout(() => {
                setshowTheOrange(true);
              }, 500);
            }, [])
         
    return (
        <Stack>
            <Tabs borderColor={'primaryBlue.100'}>
                <TabList>
                    <Tab borderRadius={6} _selected={{ color: 'white', bg: 'primaryBlue.100' }}>One</Tab>
                    <Tab borderRadius={6} _selected={{ color: 'white', bg: 'primaryBlue.100' }}>Two</Tab>
                    <Tab borderRadius={6} _selected={{ color: 'white', bg: 'primaryBlue.100' }}>Three</Tab>
                </TabList>

                <TabPanels pt={4}>
                    <TabPanel display={'flex'} flexWrap={'wrap'} gap={4} spacing={'0'}>
                        <Stack direction={'row'}></Stack>
                        {
                            Object.values(props).map((v, i) => {
                                return (
                                    (i >= 0 && i <= 7) &&
                                    <Stack
                                        w={'23%'}
                                        key={i}
                                        pb={4}
                                        height={'360px'}
                                    >
                                        <Stack
                                            position={'relative'}
                                            _before={{
                                                content: '""',
                                                w: '100%',
                                                h: showTheOrange ? { base: '160px', lg: '250px' } : '0px',
                                                left: 0,
                                                bottom: 0,
                                                bgColor: 'primaryOrange.100',
                                                position: 'absolute',
                                                zIndex: -1,
                                                borderRadius: 10,
                                                transition: '0.3s'
                                            }}
                                            gap={'10'}
                                        >
                                            <Image
                                                src={v.image}
                                                alt={v.name}
                                                w={'200px'}
                                                marginX={'auto'}
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            alignItems={'flex-end'}
                                            px={4}
                                            justifyContent={'space-between'}
                                        >
                                            <Box>
                                                <Heading
                                                    pt={4}
                                                    color={'bgGrays.100'}
                                                    fontWeight={600}
                                                    fontSize={22}
                                                >
                                                    {v.name}
                                                </Heading>
                                                <Text
                                                    color={'primaryOrange.100'}
                                                    fontWeight={600}
                                                    fontSize={14}
                                                >
                                                    {v.designation}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Link><Icon as={FaLinkedinIn} color={'#007AB9'} fontSize={24} /></Link>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                )
                            })
                        }
                    </TabPanel>
                    <TabPanel display={'flex'} flexWrap={'wrap'} gap={4} spacing={'0'}>

                        <Stack direction={'row'}></Stack>
                        {
                            Object.values(props).map((v, i) => {
                                return (
                                    <Stack
                                        w={'23%'}
                                        pb={4}
                                        key={i}
                                    >
                                        <Stack
                                            position={'relative'}
                                            _before={{
                                                content: '""',
                                                w: '100%',
                                                h: showTheOrange ? { base: '160px', lg: '250px' } : '0px',
                                                left: 0,
                                                bottom: 0,
                                                bgColor: 'primaryOrange.100',
                                                position: 'absolute',
                                                zIndex: -1,
                                                borderRadius: 10,
                                                transition: '0.3s'
                                            }}
                                            gap={'10'}
                                        >
                                            <Image
                                                src={v.image}
                                                alt={v.name}
                                                w={'200px'}
                                                marginX={'auto'}
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            alignItems={'flex-end'}
                                            px={4}
                                            justifyContent={'space-between'}
                                        >
                                            <Box>
                                                <Heading
                                                    pt={4}
                                                    color={'bgGrays.100'}
                                                    fontWeight={600}
                                                    fontSize={22}
                                                >
                                                    {v.name}
                                                </Heading>
                                                <Text
                                                    color={'primaryOrange.100'}
                                                    fontWeight={600}
                                                    fontSize={14}
                                                >
                                                    {v.designation}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Link><Icon as={FaLinkedinIn} color={'#007AB9'} fontSize={24} /></Link>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                )
                            })
                        }
                    </TabPanel>
                    <TabPanel display={'flex'} flexWrap={'wrap'} gap={4} spacing={'0'}>

                        <Stack direction={'row'}></Stack>
                        {
                            Object.values(props).map((v, i) => {
                                return (
                                    <Stack
                                        pb={4}
                                        w={'23%'}
                                        key={i}
                                    >
                                        <Stack
                                            position={'relative'}
                                            _before={{
                                                content: '""',
                                                w: '100%',
                                                h: showTheOrange ? { base: '160px', lg: '250px' } : '0px',
                                                left: 0,
                                                bottom: 0,
                                                bgColor: 'primaryOrange.100',
                                                position: 'absolute',
                                                zIndex: -1,
                                                borderRadius: 10,
                                                transition: '0.3s'
                                            }}
                                            gap={'10'}
                                        >
                                            <Image
                                                src={v.image}
                                                alt={v.name}
                                                w={'200px'}
                                                marginX={'auto'}
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'row'}
                                            alignItems={'flex-end'}
                                            px={4}
                                            justifyContent={'space-between'}
                                        >
                                            <Box>
                                                <Heading
                                                    pt={4}
                                                    color={'bgGrays.100'}
                                                    fontWeight={600}
                                                    fontSize={22}
                                                >
                                                    {v.name}
                                                </Heading>
                                                <Text
                                                    color={'primaryOrange.100'}
                                                    fontWeight={600}
                                                    fontSize={14}
                                                >
                                                    {v.designation}
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Link><Icon as={FaLinkedinIn} color={'#007AB9'} fontSize={24} /></Link>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                )
                            })
                        }
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Stack>
    )
}
