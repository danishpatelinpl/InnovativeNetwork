import { Container, Grid, GridItem, Heading, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { Link as ReactLink } from 'react-router-dom'
import { RiShareBoxLine } from 'react-icons/ri'

export default function SingleIndustry({ bgImage, heading, content, separateId }) {
    return (
        <Stack
            bgImage={bgImage}
            py={{base: '20', lg: '28'}}
            mt={'0 !important'}
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
            bgAttachment={{ base: 'inherit', md: 'fixed' }}
            position={'relative'}
            zIndex={'1'}
            _after={
                {
                    content: '""',
                    position: 'absolute',
                    bg: '#000000ad',
                    w: '100%',
                    h: '100%',
                    zIndex: '-1',
                    top: '0'
                }
            }
        >
            <Container
                maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
            >
                <Stack
                    alignItems={separateId % 2 !== 0 ? 'flex-end' : 'flex-start'}
                >
                    <Stack gap={'3'} maxW={{base: '100%', lg: '50%'}}>
                        <Heading color={'#fff'} as='h2' size={{base: 'xl', lg:'3xl'}} fontStyle={'italic'}>
                            {heading}
                        </Heading>
                        <Text
                            color={'#fff'}
                            fontSize={{base: '14px', lg: '17px'}}
                            lineHeight={{base: '20px', lg: '35px'}}
                            fontWeight={'300'}
                        >
                            {content}

                        </Text>
                        </Stack>
                </Stack>

            </Container>
        </Stack>
    )
}
