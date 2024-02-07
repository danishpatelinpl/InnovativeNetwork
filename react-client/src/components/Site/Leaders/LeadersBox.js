import { Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LeadersBox({ image, name, designation, socialLinks }) {

    const navigate = useNavigate();

    return (
        <>
            <Stack
                onClick={()=>navigate('/teams')}
                cursor={"pointer"}
                w={{base: '100%',md: '48%', lg: '31%'}}
                pb={{base: 4, lg: 0}}
            >
                <Stack
                    border={'1px solid #adadad'}
                    borderRadius={'15px'}
                    overflow={'hidden'}
                    height={'345px'}
                    bgGradient={'linear(to-b, #EF5A2A, #a05d48d1)'}
                >
                    <Image src={image} alt={name} />
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Text
                        fontWeight={500}
                        fontSize={'22'}
                    >{name}</Text>
                    <Text
                        color={'primaryBlue.100'}
                        fontWeight={'600'}
                        fontSize={'16'}
                    >{designation}</Text>
                </Stack>
                <Stack
                    height={'3px'}
                    bgColor={'primaryBlue.100'}
                    w={'100%'}
                ></Stack>
                {/* <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    gap={0}
                >
                    {
                        socialLinks.map((v, i) => <SocialLogo {...v} key={i} />)
                    }
                </Stack> */}
            </Stack>
        </>
    )
}

// const SocialLogo = ({ icon, link }) =>
//     <Link
//         to={link}

//     >
//         <Icon as={icon} fontSize={28} />
//     </Link>
