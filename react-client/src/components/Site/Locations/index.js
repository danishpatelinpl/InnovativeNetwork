import { Box, Container, Stack } from '@chakra-ui/react'
import { useState } from 'react';
import Pakistan from '../../../assets/images/pakistan.png'
import Canada from '../../../assets/images/canada.png'
import London from '../../../assets/images/london.png'
import Jeddah from '../../../assets/images/Jeddah.png'
import Riyadh from '../../../assets/images/Riyadh.png'
import Usa from '../../../assets/images/usa.png'
import LocationHeading from './LocationHeading';
import LocationBox from './LocationBox';

export default function Locations() {

  const [Locations] = useState([
    {
      image: Pakistan,
      country: 'Pakistan (HQ)',
      address: '41-J, Street-3, Block-6, PECHS, Karachi, Karachi City, Sindh 75400',
      phone: '(021) 34303051-55',
      email: 'contact@innovative-net.com'
    },
    {
      image: Canada,
      country: 'Canada',
      address: '212 Coral Sands Place NE Calgary AB T3J 3J2, main street',
      phone: '+16479792001',
      email: 'contact@innovative-net.com'
    },
    {
      image: London,
      country: 'London',
      address: 'Unit 2, Office 5 131 Queens Road Peckham City',
      phone: '+16479792001',
      email: 'contact@innovative-net.com'
    },
    {
      image: Usa,
      country: 'USA',
      address: '10685-B Hazelhurst Dr. # 29406 Houston, TX 77043',
      phone: '+16479792001',
      email: 'contact@innovative-net.com'
    },
    {
      image: Jeddah,
      country: 'Jeddah',
      address: '01, Ground Floor, Abbad Bin Beshr St., Front of Tazaj Resturant, Al Sharafeyyah Dist.',
     
    },
    {
      image: Riyadh,
      country: 'Riyadh',
      address: 'Olaya View Tower (العليا ڤيو), Opposite to Kingdom Tower, 2nd Floor, Office No. 4027,King Fahad Road, Riyadh',
     
    },
  ]);

  return (
    <Stack
      bgColor={'bgGrays.100'}
      py={{ base: '20px', md: '80px' }}
      bgGradient='linear(to-b, #575757, bgGrays.100, bgGrays.100)'
      marginTop={'0 !important'}
    >
      <Container maxW={{ 'xl': '6xl', '2xl': '8xl' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={0}
          pb={{base: '0px', md: '55px'}}
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <Box
            w={{ base: '100%', md: '40%' }}
            mb={{ base: '15px', md: '0px' }}
            // data-aos={'fade-right'}
            textAlign={{ base: 'center', lg: 'left' }}
            // data-aos-delay={300}
          >
            <LocationHeading />
          </Box>
          <Box
            w={{ base: '100%', md: '60%' }}
            // data-aos={'fade-left'}
            // data-aos-delay={300}
          >
            <Stack>
              <LocationBox {...Locations[0]} />
              <LocationBox {...Locations[1]} />
            </Stack>
          </Box>
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'flex-start'}
          spacing={0}
          justifyContent={'space-between'}
          // data-aos={'fade-down'}
          // data-aos-delay={300}
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <Box
            w={{ base: '100%', md: '40%' }}
          >
            <LocationBox {...Locations[2]} />
          </Box>
          <Box
            w={{ base: '100%', md: '60%' }}
          >
            <LocationBox {...Locations[3]} />
          </Box>
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={0}
          justifyContent={'space-between'}
          // data-aos={'fade-down'}
          // data-aos-delay={300}
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <Box
            w={{ base: '100%', md: '40%' }}
          >
            <LocationBox {...Locations[4]} />
          </Box>
          <Box
            w={{ base: '100%', md: '60%' }}
          >
            <LocationBox {...Locations[5]} />
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}
