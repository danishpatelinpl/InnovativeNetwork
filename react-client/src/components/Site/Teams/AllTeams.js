import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateTeam } from '../../../reducers/useReducers';
import Backend from './Backend';
import Frontend from './Frontend';
import GameDev from './GameDev';
import Marketing from './Marketing';
import MobileApp from './MobileApp';
import Danish from '../../../assets/images/profile/dp1.jpg'
import Hasan from '../../../assets/images/profile/hs1.jpg'
import Safeer from '../../../assets/images/profile/s1.jpg'
import Ammar from '../../../assets/images/profile/ammar.jpg'
import Saqib from '../../../assets/images/profile/saving1.jpg'
import Amir from '../../../assets/images/profile/amir1.jpg'
// import Faisal from '../../../assets/images/teams/faisal.png'
import Ali from '../../../assets/images/profile/a1.jpg'
import Maroof from '../../../assets/images/profile/maroof.jpg'
import Alishiwani from '../../../assets/images/profile/php.jpg'
import Ashir from '../../../assets/images/profile/hasir.jpg'
import Hamza from '../../../assets/images/profile/hamza.jpg'
import Kashan from '../../../assets/images/profile/kashan.jpg'
import Mukarram from '../../../assets/images/profile/mukarram.jpg'
import Khizar from '../../../assets/images/profile/khizerhayat.jpg'
import Rafay from '../../../assets/images/profile/rafay.jpg'
import Bilal from '../../../assets/images/profile/b1.jpg'
import Babar from '../../../assets/images/profile/babar.jpg'
import Taha from '../../../assets/images/profile/ta1.jpg'
import Kizar from '../../../assets/images/profile/kizar.jpg'

import Suraj from '../../../assets/images/profile/sun1.jpg'
import Minhaj from '../../../assets/images/profile/m1.jpg'
import Fawad from '../../../assets/images/profile/anroid.jpg'
import Waqas from '../../../assets/images/profile/waqas.jpg'
import Qasim from '../../../assets/images/profile/qasim.jpg'
import Ahmer from '../../../assets/images/profile/ahmer.jpg'
import Raveda from '../../../assets/images/profile/anroid1.jpg'
import AhmedIrfan from '../../../assets/images/profile/AhmedIrfan.jpg'



import Daniyal from '../../../assets/images/profile/d1.jpg'
import Abbas from '../../../assets/images/profile/abbas.jpg'
import osama from '../../../assets/images/profile/o1.jpg'
import SyedFaizan  from '../../../assets/images/profile/mark4.jpg'
import Asad from '../../../assets/images/profile/mark1.jpg'
import Furkan  from '../../../assets/images/profile/mark3.jpg'
import Umer  from '../../../assets/images/profile/umer.jpg'
 
import Sheryar from '../../../assets/images/profile/hrm.jpg'
import usama from '../../../assets/images/teams/marketing/usama.png'
import Nimra from '../../../assets/images/profile/hrm1.jpg'
import Fatima from '../../../assets/images/profile/con1.jpg'
import Tooba from '../../../assets/images/profile/tooba.jpg'
import Anusha from '../../../assets/images/profile/anu1.jpg'
import Graphicsdesign from './Graphicsdesign';

import Jamal from '../../../assets/images/profile/jamal.jpg'
import Owais from '../../../assets/images/profile/ows1.jpg'
import Ekrama from '../../../assets/images/profile/des.jpg'
import Awais from '../../../assets/images/profile/mirza1.jpg'
import Aishaayub from '../../../assets/images/profile/aisha.jpg'
import Managment from './Managment';


import Iqra from '../../../assets/images/profile/i1.jpg'
import Farhan from '../../../assets/images/profile/f1.jpg'
import jehangir from '../../../assets/images/profile/jhan.jpg'
import quratulain from '../../../assets/images/profile/hr1.jpg'
import saad from '../../../assets/images/profile/acca.jpg'
import saqib from '../../../assets/images/profile/admin.jpg'
import Muzair from '../../../assets/images/profile/faz1.jpg'

import Ahraz from '../../../assets/images/profile/2d.jpg'
import Irfan from '../../../assets/images/profile/3d.jpg'
import Ishaq from '../../../assets/images/profile/patni1.jpg'
import Obaid from '../../../assets/images/profile/af1.jpg'


export default function AllTeams() {

    const dispatch = useDispatch();
    const currentTeam = useSelector(state => state.team)
    const [TeamsButtons] = useState(['Frontend', 'Backend','Graphics Design','Mobile App', 'Marketing','Management', 'Game Dev']);

    const [GameTeam] = useState([
        {
            image: Ishaq,
            name: 'Ishaq Patni',
            designation: 'HOD - Gaming & Development',
            linkedinLink: '#',
        },
        {
            image: Ahraz,
            name: 'Syed Ahraz',
            designation: 'Concept Artist',
            linkedinLink: '#',
        },
        {
            image: Irfan,
            name: 'Irfan Ahmed Shah',
            designation: 'Senior Game Artist',
            linkedinLink: '#',
        },
        {
            image: Obaid,
            name: 'Obaid Ahmed',
            designation: 'Senior Motion Graphic Artist',
            linkedinLink: '#',
        },
        {
            image: Kashan,
            name: 'Muhammad Kashan',
            designation: 'Lead Game Developer',
            linkedinLink: '#',
        },
        {
            image: Mukarram,
            name: 'Muhammad Mukarram',
            designation: 'Game Developer',
            linkedinLink: '#',
        },
        {
            image: Khizar,
            name: 'Khizar Hayat',
            designation: 'Concept Artist',
            linkedinLink: '#',
        },
       
    ]);
    const [ManagementTeam] = useState([
        {
            image: Farhan,
            name: 'Farhan A Bukhsh',
            designation: 'Head Of IT & Networking',
            linkedinLink: '#',
        },
        {
            image: Iqra,
            name: 'Iqra Akber',
            designation: 'HR Manager',
            linkedinLink: '#',
        },
        {
            image: jehangir,
            name: 'Jehangir Khan',
            designation: 'IT Officer',
            linkedinLink: '#',
        },
       
        {
            image: quratulain,
            name: 'Quratulain',
            designation: 'HR Coordinator',
            linkedinLink: '#',
        },
        {
            image: saad,
            name: 'Muhammad Saad',
            designation: 'Junior Finance Officer',
            linkedinLink: '#',
        },
        {
            image: saqib,
            name: 'Muhammad Saqib',
            designation: 'Admin Manger',
            linkedinLink: '#',
        },
        {
            image: Muzair,
            name: 'Muzair Hussain',
            designation: 'Finance Executive',
            linkedinLink: '#',
        },
       
    ]);
    const [GraphicsTeam] = useState([
        {
            image: Jamal,
            name: 'Jamal Ahmed',
            designation: 'Lead Graphic Designer',
            linkedinLink: '#',
        },
        {
            image: Owais,
            name: 'Owais Mirza',
            designation: 'Senior Graphic Designer',
            linkedinLink: '#',
        },
        {
            image: Aishaayub,
            name: 'Aisha Ayub',
            designation: 'UI/UX Graphic Designer',
            linkedinLink: '#',
        },
       
        {
            image: Ekrama,
            name: 'Ekrama Hussain',
            designation: 'Associate Graphic Designer',
            linkedinLink: '#',
        },
        {
            image: Awais,
            name: 'Mirza Awais',
            designation: 'Associate Graphic Designer',
            linkedinLink: '#',
        },
       
    ]);
    const [MarketingTeam] = useState([
        {
            image: Nimra,
            name: 'Nimra Tariq',
            designation: 'Business Development Executive',
            linkedinLink: '#',
        },
        {
            image: Tooba,
            name: 'Tooba Siraj',
            designation: 'Business Development Executive',
            linkedinLink: '#',
        },
        {
            image: Anusha,
            name: 'Anusha Ather',
            designation: 'Senior Content Writer',
            linkedinLink: '#',
        },
        {
            image: Fatima,
            name: 'Fatima Ali',
            designation: 'Social Media Executive',
            linkedinLink: '#',
        },
        {
            image: Sheryar,
            name: 'Sheryar Raza',
            designation: 'Business Development Manager',
            linkedinLink: '#',
        },
        {
            image: Abbas,
            name: 'Abbas Rizvi',
            designation: 'Business Development Executive',
            linkedinLink: '#',
        },
        {
            image: Daniyal,
            name: 'Daniyal Abid Khatib',
            designation: 'IDA / Sales & Marketing',
            linkedinLink: '#',
        },
        {
            image: osama,
            name: 'Muhammad Usama',
            designation: 'Team Lead PPC',
            linkedinLink: '#',
        },
        {
            image: SyedFaizan,
            name: 'Syed Faizan',
            designation: 'Team Lead PPC',
            linkedinLink: '#',
        },
        {
            image: Asad,
            name: 'Asad Ullah Pervaiz',
            designation: 'Data Entry Operator',
            linkedinLink: '#',
        },
        {
            image: Furkan,
            name: 'Furkan Khan',
            designation: 'Data Entry Operator',
            linkedinLink: '#',
        },
        {
            image: Umer,
            name: 'Muhammad Umer Iqbal',
            designation: 'PPC Executive',
            linkedinLink: '#',
        },
        // {
        //     image: usama,
        //     name: 'Muhammad Usman',
        //     designation: 'Product Manager',
        //     linkedinLink: '#',
        // },
       
    ]);
    const [FrontendTeam] = useState([
        {
            image: Danish,
            name: 'Danish Patel',
            designation: 'Lead UI/UX | React Web App Developer',
            linkedinLink: '#',
        },
        {
            image: Hasan,
            name: 'Muhammad Hasan',
            designation: 'Senior UI/UX Engineer',
            linkedinLink: '#',
        },
        {
            image: Safeer,
            name: 'Safeer Shaikh',
            designation: 'React JS Developer',
            linkedinLink: '#',
        },
        {
            image: Saqib,
            name: 'Saquib Saleem',
            designation: 'Associate UI/UX Engineer',
            linkedinLink: '#',
        },
        {
            image: Ammar,
            name: 'Ammar Siddiqui',
            designation: 'Trainee React JS Developer',
            linkedinLink: '#',
        },
       
    ]);
    const [BackendTeam] = useState([
        {
            image: Ali,
            name: 'Ali Asghar Hussain',
            designation: 'Senior Software Engineer',
            linkedinLink: '#',
        },
        {
            image: Amir,
            name: 'Amir Yaqoob',
            designation: 'Team Lead ERP',
            linkedinLink: '#',
        },
        // {
        //     image: Faisal,
        //     name: 'Shah Faisal',
        //     designation: 'Team Lead ERP And BMS',
        //     linkedinLink: '#',
        // },
        {
            image: Maroof,
            name: 'Abdul Maroof Yousfani',
            designation: 'Senior Software Engineer',
            linkedinLink: '#',
        },
        {
            image: Alishiwani,
            name: 'Ali Shiwani',
            designation: 'Senior Laravel Developer',
            linkedinLink: '#',
        },
        {
            image: Ashir,
            name: 'Muhammad Ashir',
            designation: 'Senior Software Developer',
            linkedinLink: '#',
        },
        // {
        //     image: Shah,
        //     name: 'Syed Muhammad Shah',
        //     designation: 'Laravel Developer',
        //     linkedinLink: '#',
        // },
        {
            image: Rafay,
            name: 'Muhammad Rafay',
            designation: 'Laravel Developer',
            linkedinLink: '#',
        },
        {
            image: Bilal,
            name: 'Muhammad Bilal',
            designation: 'Senior Backend Developer',
            linkedinLink: '#',
        },
       
        {
            image: Taha,
            name: 'Taha Khan',
            designation: 'Associate Software Developer',
            linkedinLink: '#',
        },
        {
            image: Kizar,
            name: 'Khizar Shafi',
            designation: 'Backend Developer',
            linkedinLink: '#',
        },
        {
            image: Babar,
            name: 'Babar Ansari',
            designation: 'Backend Developer',
            linkedinLink: '#',
        },
        {
            image: Hamza,
            name: 'Muhammad Hamza',
            designation: 'ERM Trainee Consultant',
            linkedinLink: '#',
        },
       
    ]);
    const [MobileTeam] = useState([
        {
            image: Suraj,
            name: 'Suraj Kumar',
            designation: 'Head of Mobile Development',
            linkedinLink: '#',
        },
       
        {
            image: Minhaj,
            name: 'Minhaj Ali Khan',
            designation: 'Project Manager',
            linkedinLink: '#',
        },
        {
            image: Fawad,
            name: 'Muhammad Fawad',
            designation: 'Lead Mobile Development',
            linkedinLink: '#',
        },
        {
            image: Raveda,
            name: 'Raweeda Kousar',
            designation: 'Senior Android Developer',
            linkedinLink: '#',
        },
        {
            image: Waqas,
            name: 'Muhammad Waqas',
            designation: 'Senior Flutter Developer',
            linkedinLink: '#',
        },
        {
            image: Qasim,
            name: 'Muhammad Qasim',
            designation: 'Senior Flutter Developer',
            linkedinLink: '#',
        },
        {
            image: Ahmer,
            name: 'Ahmer Khan',
            designation: 'Flutter Developer',
            linkedinLink: '#',
        },
        {
            image: AhmedIrfan,
            name: 'Ahmed Irfan',
            designation: 'Associate SQA Engineer',
            linkedinLink: '#',
        },
       
       
    ]);

    return (
        <Stack
            py={{ base: '30px', lg: '120px' }}
            bg={'#fff'}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Heading
                    fontWeight={'600'}
                    color={'primaryOrange.100'}
                    fontSize={{ base: 44, lg: 64 }}
                    pb={{base: '4', lg: '12'}}
                >
                    Creative <Text
                        as={'span'}
                        color={'bgGrays.100'}
                        position={'relative'}
                        w={'fit-content'}
                        fontWeight={'600'}
                        fontStyle={'italic'}
                        _before={{
                            content: '""',
                            position: 'absolute',
                            w: '100%',
                            zIndex: -1,
                            h: { base: '4px', lg: '10px' },
                            bgColor: 'primaryOrange.100',
                            bottom: '15px'
                        }}
                    >
                        Team</Text></Heading>

                <Stack
                    direction={'row'}
                    justifyContent={{base: 'center', lg: 'space-between'}}
                    alignItems={'center'}
                    mb={12}
                    spacing={0}
                    gap={{base: 1, lg: 0}}
                    flexWrap={{ base: 'wrap', lg: 'nowrap' }}
                >
                    {
                        TeamsButtons.map((v, i) =>
                            <Button
                                key={i}
                                onClick={() => dispatch(updateTeam(v))}
                                borderRadius={6}
                                border={'1px solid'}
                                borderColor={currentTeam === v ? 'primaryOrange.100' : 'bgGrays.100'}
                                color={currentTeam === v ? 'white.100' : 'bgGrays.100'}
                                w={{base: '48%', lg: '10%'}}
                                py={'20px'}
                                fontSize={'15px'}
                                fontWeight={400}
                                bgColor={currentTeam === v ? 'primaryOrange.100' : 'white.100'}
                                _hover={{
                                    bgColor: 'primaryOrange.100',
                                    borderColor: 'white.100',
                                    color: 'white.100'
                                }}
                                _focus={{
                                    bgColor: 'primaryOrange.100'
                                }}
                                _active={{
                                    bgColor: 'primaryOrange.100'
                                }}
                            >
                                {v}
                            </Button>
                        )
                    }
                </Stack>

                <Stack mt={'6'}>
                    {
                        currentTeam === 'Frontend' ?
                            <Frontend {...FrontendTeam} />
                            : currentTeam === 'Backend' ?
                                <Backend {...BackendTeam} />
                                : currentTeam === 'Graphics Design' ?
                                <Graphicsdesign {...GraphicsTeam} />
                                : currentTeam === 'Mobile App' ?
                                    <MobileApp {...MobileTeam} />
                                    : currentTeam === 'Marketing' ?
                                        <Marketing {...MarketingTeam} />
                                        : currentTeam === 'Management' ?
                                            <Managment {...ManagementTeam} />
                                            : currentTeam === 'Game Dev' ?
                                                <GameDev {...GameTeam} />
                                                :
                                                <Frontend {...FrontendTeam} />
                    }
                </Stack>

            </Container>
        </Stack>
    )
}
