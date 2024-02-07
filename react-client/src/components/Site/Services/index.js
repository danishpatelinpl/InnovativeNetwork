import { Container, Flex, Heading, Stack } from '@chakra-ui/react'
import ArtificialColored from '../../../assets/images/artificial-colored.svg'
import ArtificialWhite from '../../../assets/images/artificial-white.gif'
import ArtificialGif from '../../../assets/images/servicesIcon/ai.gif'
import CrmColored from '../../../assets/images/crm-colored.svg'
import CrmWhite from '../../../assets/images/crm-white.gif'
import CrmGif from '../../../assets/images/servicesIcon/crm.gif'
import LoyaltyColored from '../../../assets/images/loyalty-colored.svg'
import LoyaltyWhite from '../../../assets/images/loyalty-white.gif'
import LoyaltyGif from '../../../assets/images/servicesIcon/loyalty.gif'
import CyberColored from '../../../assets/images/cyber-colored.png'
import CyberWhite from '../../../assets/images/cyber-white.gif'
import CyberGif from '../../../assets/images/servicesIcon/cyber.gif'
import TeamColored from '../../../assets/images/team-colored.svg'
import TeamWhite from '../../../assets/images/team-white.gif'
import TeamGif from '../../../assets/images/servicesIcon/team.gif'
import DesignColored from '../../../assets/images/design-colored.svg'
import DesignWhite from '../../../assets/images/design-white.gif'
import DesignGif from '../../../assets/images/servicesIcon/design.gif'
import LeadColored from '../../../assets/images/lead-colored.svg'
import LeadWhite from '../../../assets/images/lead-white.gif'
import LeadGif from '../../../assets/images/servicesIcon/lead.gif'
import DevopsColored from '../../../assets/images/devops-colored.png'
import DevopsWhite from '../../../assets/images/devops-white.gif'
import DevopsGif from '../../../assets/images/servicesIcon/devops.gif'
import { useState } from 'react'
import ServiceBox from './ServiceBox'
import aiJson from '../../../assets/images/ai.json'

export default function Services() {

    const [Services] = useState([
        {
            url: '/services',
            iconColored: ArtificialColored,
            iconGif: ArtificialGif,
            heading: 'Games',
            items: ['2D games', '3d Games', 'Game development', 'Games Animations', 'Game Design','Gamefication']
        },
        {
            url: '/services',
            iconColored: CrmColored,
            iconGif: CrmGif,
            heading: 'Block Chain',
            items: [' Third- Party Integration', 'Smart Contracts', 'White papers', 'tokenomics', 'depps']
        },
        {
            url: '/services',
            iconColored: LoyaltyColored,
            iconGif: LoyaltyGif,
            heading: 'Digital Marketing',
            items: ['Social Media Marketing', 'Email Marketing', 'Creative Strategies', ' Video Marketing, Ads Marketing']
        },
        {
            url: '/services',
            iconColored: CyberColored,
            iconGif: CyberGif,
            heading: 'Cyber Security',
            items: ['Transformation ', ' Automation', 'Modernization ', 'Cloud based',' IAM Model','Managing Risks']
        },
        {
            url: '/services',
            iconColored: TeamColored,
            iconGif: TeamGif,
            heading: 'Web 3.0',
            items: ['Python', 'Node', ' 3d Networking', 'Cloud based servers','3D Models,Secured ']
        },
        {
            url: '/services',
            iconColored: DesignColored,
            iconGif: DesignGif,
            heading: 'Graphics/Animation',
            items: ['Website Mocks', 'E-Commerece Websites', 'Web Applications', ' Portals ','Crms ','3D Modeling',]
        },
        {
            url: '/services',
            iconColored: LeadColored,
            iconGif: LeadGif,
            heading: 'Software Dev',
            items: ['Mobile Applications', 'Web Application', 'portals ', 'Custom Dashboards',' Crms','Superadmin Panels','Developing Structures']
        },
        {
            url: '/services',
            iconColored: DevopsColored,
            iconGif: DevopsGif,
            heading: 'Dev Ops',
            items: ['Infrastructure Management', 'Cloud Expertise', 'Configuration Management', 'Security Integration', 'Automated Testing']
        },
    ]);

    return (
        <Stack
            // bgColor={'white.100'}
            pt={'70px'}
            pb={'90px'}
            marginTop={'0 !important'}
            bgColor={'bgGrays.100'}
        >
            <Container
                maxW={{ 'xl': 'container.xl', '2xl': '8xl' }}
            >
                <Heading
                    textAlign={'center'}
                    color={'#fff'}
                    pb={16}
                    fontSize={{ base: '26px', md: '34px' }}
                    data-aos={'fade-down'}
                    data-aos-delay={250}
                >
                    Services We Provide
                </Heading>

                <Flex
                    justifyContent={'flex-start'}
                    gap={{md:'2%'}}
                    flexWrap={'wrap'}
                >
                    {
                        Services.map((v, i) => <ServiceBox key={i} {...v} />)
                    }
                </Flex>

            </Container>
        </Stack>
    )
}
