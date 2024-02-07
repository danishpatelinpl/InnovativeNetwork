import { Container, Stack } from '@chakra-ui/react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import LinksBox from './LinksBox';
import { updateService } from '../../../reducers/useReducers';

export default function Footer({ children }) {

    const dispatch = useDispatch();

    const [FooterLinks] = useState({
        global: {
            heading: 'Global',
            links: [
                {
                    name: 'About',
                    url: '/about'
                },
              
                {
                    name: 'Teams',
                    url: '/teams'
                },
                {
                    name: 'Our Products',
                    url: '/Products'
                },
            ]
        },
        services: {
            heading: 'Services',
            links: [
                {
                    name: 'Internet Service',
                    url: '/internetservice/',
                    dispatchValue: 'Internet Service',
                    target: "_blank"
                },
                {
                    name: '3D modeling',
                    url: '/services',
                    dispatchValue: '3D Modeling'
                },
                {
                    name: 'UI/UX Design',
                    url: '/services',
                    dispatchValue: 'Graphics/Animation'
                },
                {
                    name: 'Lead Generation',
                    url: '/services',
                    dispatchValue: 'Digital Marketing'
                },
                {
                    name: 'DevOps',
                    url: '/services',
                    dispatchValue: 'Dev Ops'
                },
                {
                    name: 'Cyber Security',
                    url: '/services',
                    dispatchValue: 'Cyber Security'
                },
                {
                    name: 'Software Development',
                    url: '/services',
                    dispatchValue: 'Software Dev'
                },
                {
                    name: 'Mobile Application',
                    url: '/services',
                    dispatchValue: 'Software Dev'
                },
            ]
        },
        ourBrands: {
            heading: 'Our Brands',
            links: [
                {
                    name: 'Perran',
                    url: '/brands',
                },
                {
                    name: 'Cream Villa',
                    url: '/brands',
                },
                {
                    name: 'Innovative Game Studio',
                    url: '/brands',
                },
                {
                    name: 'IDA',
                    url: '/brands',
                },
                {
                    name: 'Digilate',
                    url: '/brands',
                }
            ]
        },
        technology: {
            heading: 'Technology',
            links: [
                {
                    name: 'DevOps',
                    url: '/Technology',
                },
                {
                    name: 'Cloud Computing',
                    url: '/Technology',
                },
                {
                    name: 'Cyber Security',
                    url: '/Technology',
                },
                {
                    name: 'Web 3.0',
                    url: '/Technology',
                },
                {
                    name: 'Artificial Intelligence',
                    url: '/Technology',
                }
            ]
        },
        careers: {
            heading: 'Careers',
            links: [
                {
                    name: 'Apply Now',
                    url: '/careers',
                },
                {
                    name: 'Contact Us',
                    url: '/contact',
                }
            ]
        }
    });

    function updateTriggeredService(value) {
        dispatch(updateService(value));
    }

    return (
        <Stack
          
            width={'100%'}
            bgColor={'bgGrays.200'}
            mt={'0 !important'}
        >
            <Container
                maxW={{ base: 'container.sm', md: '2xl', 'lg': 'container.md', 'xl': 'container.lg', '2xl': '8xl' }}
            >
                <Stack
                    marginTop={{ base: '25px' }}
                    direction={'row'}
                    alignItems={'flex-start'}
                    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                    py={{ base: 2, md: 10 }}
                    justifyContent={{ base: 'space-between', md: 'flex-start' }}
                >
                    {
                        Object.keys(FooterLinks).map((v, i) =>
                            <LinksBox key={i} {...FooterLinks[v]} updateTriggeredService={updateTriggeredService} />
                        )
                    }
                </Stack>
            </Container>
            {children}
        </Stack>
    )
}
