import { Box, Container, Flex, Img, Link, Stack, ListItem, UnorderedList, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png'
import gsap from 'gsap'
import useScrollBlock from '../../../hooks/useScrollBlock';
import Sidemenu from '../Sidenav/Sidemenu';
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
import { updateBannerAnimationStatus } from '../../../reducers/useReducers';


export default function Index() {

  const dispatch = useDispatch();
  const animationStatus = useSelector(state => state.bannerAnimationStatus)

  const [openmenu, setopenmenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const openingFunction = () => {
    !openmenu ? blockScroll() : allowScroll()
    setopenmenu(!openmenu);
  }

  useEffect(() => {

    if (animationStatus) {
      // Visible Header
      setTimeout(() => {
        gsap.to('#header', 1, {
          delay: 0.4,
          opacity: 1,
        });
      }, 5500);
    } else {
      // Visible Header
      setTimeout(() => {
        gsap.to('#header', 1, {
          delay: 1,
          opacity: 1,
        });
      }, 5500);
      dispatch(updateBannerAnimationStatus(true));
    }

    return;
  }, []);

  const location = useLocation();
  const [headerLinkColor, setheaderLinkColor] = useState('#fff');

  useEffect(() => {
    if (location.pathname === '/') {
      setheaderLinkColor('#fff')
    } else {
      setheaderLinkColor('#000')
    }
  }, [location])



  return (
    <>
      <Stack
        id={'header'}
        position={'absolute'}
        w={'full'}
        pt={'20px'}
        zIndex={'14'}
        opacity={0}
        transition={'all ease 0.2s'}
      >
        <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
          <Flex alignItems={'center'}>
            <Box
              w={'full'}
            >
              <Link as={ReactLink} to='./'>
                <Img w={{ base: '80px', md: '134px' }} src={Logo} alt='Logo' />
              </Link>
            </Box>
            <Box
              w={'full'}
            >
              <UnorderedList
                listStyleType={'none'}
                display={'flex'}
                gap={8}
                justifyContent={'flex-end'}
                color={'#fff'}
                fontSize={'17px'}
                letterSpacing={'1px'}
                alignItems={'center'}
              >
                <ListItem><Link as={ReactLink} to='/careers'
                  display={{ base: 'none', md: 'initial' }}
                  position={'relative'}
                  color={headerLinkColor}
                  fontWeight={'500'}
                  _before={{
                    content: `""`,
                    position: 'absolute',
                    w: '100%',
                    h: '2px',
                    transform: 'scaleX(0)',
                    bottom: '-6px',
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
                >Careers</Link></ListItem>
                <ListItem><Link as={ReactLink} to='/contact'
                  display={{ base: 'none', md: 'initial' }}
                  position={'relative'}
                  color={headerLinkColor}
                  fontWeight={'500'}
                  _before={{
                    content: `""`,
                    position: 'absolute',
                    w: '100%',
                    h: '2px',
                    transform: 'scaleX(0)',
                    bottom: '-6px',
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
                >Contact Us</Link></ListItem>
                <ListItem>
                  <Button
                    display={'flex'}
                    flexDirection={'column'}
                    background={'transparent'}
                    gap={1}
                    alignItems={'flex-end'}
                    onClick={() => {
                      openingFunction();
                    }}
                    _active={{ bgColor: 'transparent' }}
                    _focus={{ bgColor: 'transparent' }}
                    _hover={{ bgColor: 'transparent' }}
                  >
                    <Box
                      w={'35px'}
                      h={'4px'}
                      bgColor={'primaryBlue.100'}
                    ></Box>
                    <Box
                      w={'25px'}
                      h={'4px'}
                      bgColor={headerLinkColor}
                    ></Box>
                    <Box
                      w={'40px'}
                      h={'4px'}
                      bgColor={'primaryOrange.100'}
                    ></Box>
                    {/* <Icon
                      color={'white.100'}
                      fontSize={32}
                      as={GiHamburgerMenu} /> */}
                  </Button>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Container>
        <Sidemenu menustatus={openmenu} setopenmenu={setopenmenu} allowScroll={allowScroll} />
      </Stack>
    </>
  )
}
