import { Container, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import HeadingContent from '../HeadingContent'
import ServiceSubContentOne from '../ServicesSubContent/ServiceSubContentOne'
import Game2 from '../../../../assets/images/games/game2.png'
import Game3 from '../../../../assets/images/games/game3.png'
// import GameNews1 from '../../../../assets/images/games/gameNews1.png'
// import gameNews2 from '../../../../assets/images/games/gameNews2.png'
// import gameNews3 from '../../../../assets/images/games/gameNews3.png'

export default function Games() {

  const [ServiceDetailsList] = useState([
   
    {
      image: Game2,
      mainHeading: '2D Games',
      content: "There is still a worldwide following for 2D games among gamers. At INPL, we provide cutting-edge 2D game development services that deliver engaging narratives, striking visuals, and a phenomenal user experience. We have the knowledge and expertise necessary to guarantee that your users have an incredible gaming experience.",
      
    },
    {
      image: Game3,
      smallHeading: '',
      mainHeading: '3D Games',
      content: "For a realistic 3D gaming experience, our game art developers enhance your game with 3D character modelling, animations, an interactive 3D environment, and much more. Share your game idea with us and let us surprise you with an amazing end product. ",
      
    }
  ]);

  // const [GamesNewsList] = useState(
  //   {
  //     smallHeading: 'Featured Content',
  //     largeHeading: 'Featured Article in Gaming Industry',
  //     news: [
  //       {
  //         image: GameNews1,
  //         title: 'The Emerging Star: Innovative Game Studio',
  //         label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
  //         link: '#'
  //       },
  //       {
  //         image: gameNews2,
  //         title: 'Acceletrating your Digital transformation',
  //         label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
  //         link: '#'
  //       },
  //       {
  //         image: gameNews3,
  //         title: 'Entrusted to deliver the best for our customers, everyday',
  //         label: 'LOrem Ipusm dolor sit amet, consetetur saduipscing elitr, sed diasm nonumet erirmid tempr incududnt ut laboire et dolore magna',
  //         link: '#'
  //       }
  //     ]
  //   }
  // );

 

  return (
    <Stack
      bgColor={'#fff'}
    >
      <Container
        maxW={{ 'xl': 'container.lg', '2xl': '8xl' }}
      >
        <Stack>
          <HeadingContent heading={'Games'} behindHeading={'GAMES'} />
        </Stack>
        <Stack textAlign={'center'} mb={'5'} px={{base:0,lg:28}}>
          <Text fontSize={{base:14,lg:17}}>
          Our goal was to create game services that will last for years to come and we
           wanted as many people as possible to have access to them. Play and social
            engagement were the two fundamental pillars on which we tried to build this
             longevity. Experienced game designers and artists are part of our team, 
             and they are always willing to go above and beyond to deliver excellent
              games and guarantee total customer satisfaction. Because of this, 
              we enjoy creating distinctive, visually appealing games that surpass 
              user expectations and provide genuine inspiration.
          </Text>
         
        </Stack>
        {
          ServiceDetailsList.map(
            (v, i) =>
              <ServiceSubContentOne
                {...v}
                key={i}
                direction={(i % 2 !== 0) ? 'row-reverse' : 'row'}
              />
          )
        }
        {/* <Freaturedpost {...GamesNewsList} /> */}
      </Container>
    </Stack>
  )
}
