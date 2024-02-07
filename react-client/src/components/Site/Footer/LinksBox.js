import { Box, Heading, Link, Stack } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

export default function LinksBox({ heading, links, dispatchValue, updateTriggeredService }) {

    return (
        <Stack
            w={{ base: '47%', md: '32%', lg: '20%' }}
            pb={{ base: '15px', lg: '0px' }}
        >
            <Heading
                fontSize={{ base: '20px', '2xl': '24px' }}
                color={'#fff'}
                fontWeight={400}
                mb={{ base: '20px', '2xl': '45px' }}
                position={'relative'}
                _before={{
                    content: '""',
                    position: 'absolute',
                    bottom: { base: '-10px', '2xl': '-20px' },
                    left: 0,
                    width: '60%',
                    height: '3px',
                    bgColor: 'primaryOrange.100',
                    borderRadius: '50px'
                }}
            >
                {heading}
            </Heading>
            <Stack
            // data-aos={'fade-right'}
            // data-aos-delay={300}
            >
                {
                    links.map((v, i) => {
                        return (
                            <Box
                                key={i}
                                pb={{ base: 0, '2xl': 1 }}
                                marginTop={'0 !important'}
                            >
                                <CustomLink dispatchValue={dispatchValue} updateTriggeredService={updateTriggeredService} {...v} />
                            </Box>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

const CustomLink = ({ name, url, target, dispatchValue, updateTriggeredService }) =>
    <Link
        onClick={()=>updateTriggeredService(dispatchValue)}
        as={ReactLink}
        to={url}
        target={target ?? '_self'}
        color={'white.100'}
        fontSize={{ base: '11px', '2xl': '15px' }}
        fontWeight={300}
        transition='0.3s'
        position={'relative'}
        _before={{
            content: `""`,
            position: 'absolute',
            w: '100%',
            h: '2px',
            transform: 'scaleX(0)',
            bottom: '-3px',
            left: '0px',
            borderRadius: '25px',
            backgroundColor: "primaryOrange.100",
            transformOrigin: 'bottom right',
            transition: 'transform 0.3s ease-in-out'
        }}
        _hover={{
            color: 'primaryOrange.100',
            _before: {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
            }
        }}
    >

        {name}
    </Link>