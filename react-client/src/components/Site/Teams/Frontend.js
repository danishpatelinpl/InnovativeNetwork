import { Box, Heading, Image, Stack, Text, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'
// import { FaLinkedinIn } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Frontend(props) {

        const [showTheOrange, setshowTheOrange] = useState(false);
        useEffect(() => {
          setTimeout(() => {
            setshowTheOrange(true);
          }, 500);
        }, [])
     
    return (
        <Stack>
            <Tabs borderColor={'primaryBlue.100'}>
                

                <TabPanels pt={4}>
                    <TabPanel className='removeFirstDiv' height={'-webkit-fit-content'} display={'flex'} alignItems={'baseline'} flexWrap={'wrap'} gap={{ base: 1, lg: 4 }} spacing={'0'} justifyContent={{ base: 'space-between', lg: 'space-between' }}>
                        <Stack direction={'row'}></Stack>
                        {
                            Object.values(props).map((v, i) => {
                                return (
                                    (i >= 0 && i <= 7) &&
                                    <Stack
                                        w={{ base: '47%', lg: '23%' }}
                                        key={i}
                                        pb={4}
                                      
                                    >
                                        <Stack
                                            position={'relative'}
                                            // _before={{
                                            //     content: '""',
                                            //     w: '100%',
                                            //     h: showTheOrange ? { base: '160px', lg: '250px' } : '0px',
                                            //     left: 0,
                                            //     bottom: 0,
                                            //     bgColor: 'primaryOrange.100',
                                            //     position: 'absolute',
                                            //     borderRadius: 10,
                                            //     transition: '0.3s'
                                            // }}
                                            gap={'10'}
                                        >
                                            <Image
                                                src={v.image}
                                                alt={v.name}
                                                w={'280px'}
                                                marginRight={'auto'}
                                                position={'relative'}
                                            />
                                        </Stack>
                                        <Stack
                                            direction={{ base: 'column', lg: 'row' }}
                                            alignItems={'flex-end'}
                                          
                                            justifyContent={'space-between'}
                                        >
                                            <Box w={'100%'}>
                                                <Heading
                                                    pt={4}
                                                    color={'bgGrays.100'}
                                                    fontWeight={600}
                                                    fontSize={{ base: 14, lg: 22 }}
                                                >
                                                    {v.name}
                                                </Heading>
                                                <Text
                                                    color={'primaryOrange.100'}
                                                    fontWeight={600}
                                                    fontSize={{ base: 9, lg: 14 }}
                                                >
                                                    {v.designation}
                                                </Text>
                                            </Box>
                                            {/* <Box
                                                display={{ base: 'none', lg: 'initial' }}
                                            >
                                                <Link><Icon as={FaLinkedinIn} color={'#007AB9'} fontSize={24} /></Link>
                                            </Box> */}
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
