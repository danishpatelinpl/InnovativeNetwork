import { Box, Heading, Image, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateService } from '../../../reducers/useReducers';

export default function ServiceBox(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToService = (url, heading) => {
        dispatch(updateService(heading))
        navigate(url);
    }

    return (
        <Link
            onClick={() => goToService(props.url, props.heading)}
            data-aos={'fade-right'}
            data-aos-delay={500}
            role={'group'}
            w={{ base: '100%', md: '32%', lg: '23%' }}
            borderRadius={6}
            border={'2px solid'}
            borderColor={'white.100'}
            boxShadow={'1px 1px 35px -20px #fff'}
            mb={'20px'}
            pt={'10px'}
            pb={'20px'}
            height={{ base: '280px', md: '320px' }}
            px={'15px'}
            overflow={'hidden'}
            position={'relative'}
            transition={'all ease 0.5s'}
            _hover={{
                boxShadow: '1px 1px 35px -15px #adadad',
            }}
        >
            <Box
                left={'0px'}
                top={'0px'}
                position={'absolute'}
                // bgImage={ServiceBg}
                bgColor={'bgGrays.100'}
                w={'100%'}
                height={'100%'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                bgPosition={'bottom'}
                zIndex={'0'}
            ></Box>
            <DefaultContent iconColored={props.iconColored} iconGif={props.iconGif} heading={props.heading} items={props.items} />
            <OverlayedContent iconGif={props.iconGif} heading={props.heading} items={props.items} />
        </Link>
    )
}

const DefaultContent = ({ iconColored, iconGif, heading, items }) =>
    <Stack
        direction={'column'}
        justifyContent={'space-between'}
        height={'100%'}
        position={'relative'}
        zIndex={'2'}
    >
        <Box>
            <Image
                display={'none'}
                _groupHover={{
                    display: 'block',
                }}
                src={iconGif ?? ''}
                alt={heading}
                marginLeft={'auto'}
            />
            <Image
                _groupHover={{
                    display: 'none'
                }}
                src={iconColored ?? ''}
                alt={heading}
                marginLeft={'auto'}
            />
        </Box>
        <Box>
            <Heading
                fontSize={{ base: '14px', md: '16px', '2xl': '18px' }}
                pb={'5px'}
                fontWeight={600}
                textTransform={'capitalize'}
                borderBottomWidth={'2px'}
                borderBottomColor={'white.100'}
                w={'75%'}
                transition={'all ease 0.5s'}
                _groupHover={{
                    color: 'primaryBlue.100',
                    borderBottomColor: 'primaryBlue.100'
                }}
                color={'#fff'}
            >
                {heading}
            </Heading>
            <UnorderedList
                height={'0px'}
                overflow={'hidden'}
                color={'white.100'}
                fontSize={{ base: '12px', md: '14px' }}
                pl={'15px'}
                transition={'all ease 0.8s'}
                listStyleType={'none'}
                _groupHover={{
                    height: '140px',
                    color: 'primaryBlue.100'
                }}
            >
                {
                    items.map((v, i) =>
                        <ListItem
                            key={i}
                            pt={'6px'}
                            position={'relative'}
                            fontWeight={500}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                w: '6px',
                                h: '6px',
                                borderRadius: '100%',
                                bgColor: 'primaryOrange.100',
                                left: '-15px',
                                top: '14px'
                            }}
                        >
                            {v}
                        </ListItem>
                    )
                }
            </UnorderedList>
        </Box>

    </Stack>

const OverlayedContent = ({ iconGif, heading, items }) =>
    <Stack
        transition={'all ease 0.8s'}
        opacity={'0'}
        height={'100%'}
        w={'100%'}
        position={'absolute'}
        zIndex={'1'}
        top={0}
        left={0}
        py={'25px'}
        px={'15px'}
        bgGradient={'linear(to-b, #ffffffd9, #ffffffd9, #ffffffd9, #ffffffd9)'}
        _groupHover={{
            opacity: '1'
        }}
    >
    </Stack>