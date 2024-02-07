import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import P0 from '../../../assets/images/profile/dp1.jpg';
import P1 from '../../../assets/images/profile/s1.jpg';
import P2 from '../../../assets/images/profile/php.jpg';
import P3 from '../../../assets/images/profile/f1.jpg';
import P4 from '../../../assets/images/profile/i1.jpg';
import P5 from '../../../assets/images/profile/o1.jpg';
import P6 from '../../../assets/images/profile/d1.jpg';

import P7 from '../../../assets/images/profile/hs1.jpg';
import P8 from '../../../assets/images/profile/db1.jpg';
import P9 from '../../../assets/images/profile/m1.jpg';
import P10 from '../../../assets/images/profile/sun1.jpg';
import P11 from '../../../assets/images/profile/a1.jpg';
import P12 from '../../../assets/images/profile/saving1.jpg';
import P13 from '../../../assets/images/profile/anu1.jpg';

import P16 from '../../../assets/images/profile/za1.jpg';

import P18 from '../../../assets/images/profile/ovaisBhai.jpg';
import P19 from '../../../assets/images/profile/con1.jpg';
import P20 from '../../../assets/images/profile/b1.jpg';
import P21 from '../../../assets/images/profile/ta1.jpg';
import P22 from '../../../assets/images/profile/sir1.jpg';
import P23 from '../../../assets/images/profile/patni1.jpg';
import P24 from '../../../assets/images/profile/u1.jpg';
import P25 from '../../../assets/images/profile/faz1.jpg';
import P26 from '../../../assets/images/profile/2d.jpg';
import P27 from '../../../assets/images/profile/amir1.jpg';
import P28 from '../../../assets/images/profile/af1.jpg';
import P29 from '../../../assets/images/profile/ows1.jpg';
import P30 from '../../../assets/images/profile/mirza1.jpg';
import P31 from '../../../assets/images/profile/maroof.jpg';
import P32 from '../../../assets/images/profile/anroid.jpg';
import P33 from '../../../assets/images/profile/3d.jpg';
import P34 from '../../../assets/images/profile/fasil.jpg';
import P35 from '../../../assets/images/profile/des.jpg';
import P36 from '../../../assets/images/profile/jhan.jpg';

import P38 from '../../../assets/images/profile/mark1.jpg';
import P39 from '../../../assets/images/profile/hr1.jpg';
import P40 from '../../../assets/images/profile/hrm.jpg';
import P41 from '../../../assets/images/profile/outdoor.jpg';
import P42 from '../../../assets/images/profile/hrm1.jpg';
import P43 from '../../../assets/images/profile/kizar.jpg';
import P44 from '../../../assets/images/profile/mark2.jpg';
import P45 from '../../../assets/images/profile/anroid1.jpg';
import P46 from '../../../assets/images/profile/umer.jpg';
import P47 from '../../../assets/images/profile/mark3.jpg';
import P48 from '../../../assets/images/profile/hasir.jpg';
import P49 from '../../../assets/images/profile/admin.jpg';
import P50 from '../../../assets/images/profile/mark4.jpg';

import P52 from '../../../assets/images/profile/acca.jpg';
import P53 from '../../../assets/images/profile/hrmsale.jpg';

import P55 from '../../../assets/images/profile/mark5.jpg';
import P56 from '../../../assets/images/profile/pm.jpg';
import P57 from '../../../assets/images/profile/ds1.jpg';
export default function Index() {
  const [Testimages] = useState([
    {
      img: P4,
      name: 'iqra akber',
      title: 'HR manager',
      description:
        'A company like no other! I have always been respected and motivated which has pushed me to thrive for excellence. I couldn’t be more thankful to INPL for the opportunities to develop my skills.',
    },
    {
      img: P0,
      name: 'danish patel',
      title: 'Lead UI/UX | React Web App Developer',
      description:
        'For me, INPL is not just a workplace, it is my second home. This company has always valued my potential and allowed to utilize my skills in diverse projects, which is why I’ve been able to acquire new ones.',
    },
    {
      img: P1,
      name: 'Safeer Shaikh',
      title: 'Associate  UI/UX | React Web App Developer',
      description:
        'Working on different projects, complex problems, and developing solutions for them has proven me to reveal skills that I wasn’t aware I possess. I’m so thankful to INPL for recognizing and enhancing the potential in me',
    },
    {
      img: P2,
      name: 'Ali shiwani',
      title: 'Senior Leravel developer',
      description:
        'For me, an ideal working environment is where you learn, grow and have fun at the same time, and INPL has been that place for me. Each day I feel motivated to come to office and apply my skills on different tasks.',
    },
    {
      img: P3,
      name: 'farhan A Bukhsh',
      title: 'Head of IT & Networking',
      description:
        'It is great to be surrounded by some of country’s brightest and innovative individuals and the credit goes to INPL for allowing them a platform to uncover their talents and skills. ',
    },

    {
      img: P5,
      name: 'Muhammad Usama',
      title: 'Team Lead PPC',
      description:
        'I’m one of the veteran of INPL and if I talk about what made me stick around then it’ll be a long list. There is no limit to learning and growing professionally here. I absolutely love this place. ',
    },
    {
      img: P6,
      name: 'Daniyal Abid Khatib',
      title: 'IDA / Sales & Marketing',
      description:
        'The quality of life at INPL cannot be overstated. Our seniors constantly respect and reward our effort, which inspires me to work harder',
    },
    {
      img: P7,
      name: 'Muhammad Hasan',
      title: 'Senior UI/UX Engineer',
      description:
        'I only ever had top-notch experience from INPL. I continually to work better because of the support and encouragement the management provides.',
    },
    {
      img: P8,
      name: 'Daniyal  sherazi',
      title: 'Head of production',
      description:
        'The most rewarding aspect of working at INPL is the vast opportunities and flexibility to work. A place where you can discuss issues in a professional manner without fear. The constant support from management has given me the room to improve my leadership skills. ',
    },
    {
      img: P9,
      name: 'Minhaj Ali Khan',
      title: 'Project Manager',
      description:
        'The finest part of my profession is coming up with original concepts and shocking them with a fantastic result. I get to work on a wide range of interesting projects, which is exactly what I expected when I joined up.',
    },
    {
      img: P10,
      name: 'Suraj Kumar',
      title: 'Team Lead Mobile Development',
      description:
        'I  worked at INPL for a while, so if I were to list the things that kept me there, it would be a long list. Here, there are countless opportunities for career advancement. ',
    },
    {
      img: P11,
      name: 'Ali Asghar Hussain',
      title: 'senior software engineer',
      description:
        'It is amazing to work with so many seasoned professionals from whom I can learn a lot. The chance to work on several difficult projects and a variety of cutting-edge technology is what I like the most.',
    },
    {
      img: P12,
      name: 'Saquib Saleem',
      title: 'Associate  UI/UX engineer',
      description:
        'The best part of my job is coming up with unique ideas and surprising people with wonderful results. I get to work on a variety of intriguing projects, which is precisely what I hoped for when I joined the company.',
    },
    {
      img: P13,
      name: 'Anusha Ather',
      title: 'Senior Content Writer',
      description:
        'What I love the most about INPL is that you’re not just considered a work machine. Your suggestions and recommendations are highly valued and taken into consideration. Plus, the versatility in work keeps me enthusiastic.',
    },
 
    {
      img: P16,
      name: 'Abdullah Zaydi',
      title: 'Full stack developer',
      description:
        'Over the time I have been affiliated with INPL, my professional development has been rather considerable. Of course, the kind people, motivating elders, and great surroundings keep me inspired and dedicated.',
    },
 
    {
      img: P18,
      name: 'Ovais rehan',
      title: 'Chief Operating Officer',
      description:
        'Seeing the company grow immensely makes me feel proud of being part of it. The dedication and commitment of employees is outstanding. I can’t wait for us being a leading company in the country and keep growing with the support of our employees. ',
    },
    {
      img: P19,
      name: 'Fatima Ali ',
      title: 'Social Media Officer',
      description:
        'Coming up with unique ideas and surprise people with an amazing outcome is the best part of my job. The variety of intriguing tasks I get to work on is precisely what I anticipated when I joined the company.',
    },

    {
      img: P20,
      name: 'bilal',
      title: 'Backend Developer',
      description:
        'What I love the most about INPL is that you’re not just considered a work machine. Your suggestions and recommendations are highly valued and taken into consideration. Plus, the versatility in work keeps me enthusiastic.',
    },
    {
      img: P21,
      name: 'taha khan',
      title: 'Associate Software Developer',
      description:
        'It is wonderful to work among so many knowledgeable and experienced seniors from whom I learn a lot. What I love the most is the opportunity to work on various advanced technologies and many challenging tasks.',
    },
    {
      img: P22,
      name: 'Ahsan iqbal',
      title: 'CEO',
      description:
        'Work gets fun with the uncounted support from our employees, seeing my team transform into brilliant and talented professionals makes me proud, and I am honored to represent them and work harder to provide them with even better opportunities. ',
    },

    {
      img: P23,
      name: 'ishaq patni',
      title: 'HOD - Gaming & Development',
      description:
        'Working at INPL has a lot of benefits. Examples include the ability to express oneself freely, the fantastic workplace culture, and the wonderful teammates. I feel incredibly lucky to be a member of this group.',
    },
    {
      img: P24,
      name: 'Uzair sultan',
      title: ' Lead Graphic Designer',
      description:
        'Coming up with innovative ideas and surprising clients with an amazing end product is the best part about my job. I get to work on a variety of diverse projects which is definitely what I signed up for.',
    },
    {
      img: P25,
      name: 'Muzair Hussain',
      title: 'Finance Executive',
      description:
        'To say that life at INPL is good would be an understatement. Hard work is always recognized and appreciated by our seniors which makes me motivated to perform better.',
    },
    {
      img: P26,
      name: 'Syed Ahraz',
      title: 'Concept Artist',
      description:
        'I’ve experienced significant professional growth over the period I’ve been associated with INPL. And Of course, the respectful values, inspiring seniors, and wonderful environment keeps me motivated and passionate. ',
    },
    {
      img: P27,
      name: 'Amir Yaqoob ',
      title: 'Team Lead ERP',
      description:
        'What I like best about INPL is that you are not just a work machine. Your thoughts and opinions are greatly respected and taken into account. In addition, the variety of tasks keeps me interested.',
    },
    {
      img: P28,
      name: 'obaid ahmed',
      title: 'Senior Motion Graphic Artist',
      description:
        'My experience with INPL has so far been nothing but amazing. With the constant support and encouragement, I’m always striving to better than before. ',
    },
    {
      img: P29,
      name: 'Owais Mirza',
      title: 'Senior UI/UX Designer',
      description:
        'I started at INPL as a Junior designer but with the help and support of my seniors I was quickly able to grasp on the challenges. The environment at INPL has given me a great platform for growth and new opportunities to test my skills. ',
    },
    {
      img: P30,
      name: 'Mirza Awais Baig',
      title: 'Graphic Designer',
      description:
        'The benefits of working at INPL are numerous. The ability to express oneself freely, the incredible workplace culture, and the lovely coworkers are just a few. I feel so blessed to be a part of this company.',
    },
    {
      img: P31,
      name: 'Abdul Maroof Yousfani',
      title: 'Senior Software Engineer',
      description:
        'My experience with INPL has been nothing short of fantastic. I am always pushing to do better than before, thanks to the ongoing encouragement and support',
    },
    {
      img: P32,
      name: 'Muhammad fawad',
      title: 'Senior Android Developer',
      description:
        'Since I have started working at INPL, there has not been a single day that I feared going into the office. The excellent culture and senior empowerment deserve praise. I  had a blast and am looking forward to more incredible adventures.',
    },
    {
      img: P33,
      name: 'Irfan Ahmed Shah',
      title: 'Senior Game Artist',
      description:
        'Coming up with unique ideas and surprise people with an amazing outcome is the best part of my job. The variety of intriguing tasks I get to work on is precisely what I anticipated when I joined the company.',
    },
    {
      img: P34,
      name: 'Shah Faisal',
      title: 'Team Lead ERP and BMS',
      description:
        'I have experience working with INPL, so if I had to list the things that kept me there, the list would be very long. The possibility for career advancement in this place is endless. I think this website is excellent.',
    },
    {
      img: P35,
      name: 'Ekrama hussain',
      title: 'Graphic Designer',
      description:
        'INPL has been a platform for constant growth and learning. I am obliged to be a part of this company where I can freely test my abilities to perform better. ',
    },
    {
      img: P36,
      name: 'Jehangir Khan',
      title: 'IT Officer',
      description:
        'I really value the atmosphere at work here. Your seniors actually care about your professional development, and with all the fascinating options available. ',
    },
   
    {
      img: P38,
      name: 'Asad Ullah Pervaiz',
      title: 'Data Entry Operator',
      description:
        'A platform for ongoing development and learning has been INPL. I am required to work for this organization where I may freely test my ability to do better.',
    },
    {
      img: P39,
      name: 'Quratulain',
      title: 'HR manager ',
      description:
        'I have been at INPL for a few years now, and there has not been a single day when I dreaded going to work. The outstanding culture and the empowerment of management deserve credit. I have had a fantastic time and am looking forward to more incredible events.',
    },
    {
      img: P40,
      name: 'sheryar raza',
      title: 'Business Development manaer',
      description:
        'I greatly admire the work culture here. Your seniors genuinely care about your career growth, and with the ample of exciting opportunities, getting up for another day doesn’t feel like a chore anymore. ',
    },
    {
      img: P41,
      name: 'Khwaja Umair Hussain',
      title: 'Graphic Designer',
      description:
        'Over the time I have been affiliated with INPL, my professional development has been rather considerable. Of course, the kind people, motivating elders, and great surroundings keep me inspired and dedicated.',
    },
    {
      img: P42,
      name: 'nimra tariq',
      title: 'Business Development Executive',
      description:
        'This is just the start of my career, and I have learnt a lot at INPL, devising business patterns and working to deal with clients, I haven’t gotten an opportunity like this before. ',
    },
    {
      img: P43,
      name: 'Khizar Shafi',
      title: 'backend  Developer',
      description:
        'I had nothing but excellent experience  from INPL. Thanks to the constant inspiration and assistance, I constantly strive to improve.',
    },
    {
      img: P44,
      name: 'Muhammad Abdullah',
      title: 'Data Entry Officer',
      description:
        'This is just the start of my career, and I have learnt a lot at INPL, devising business patterns and working to deal with clients, I haven’t gotten an opportunity like this before. ',
    },
    {
      img: P45,
      name: 'Raweeda Kousar',
      title: 'Android Developer',
      description:
        'I am a seasoned INPL employee, so if I list the factors that kept me there, it will be a lengthy list. Here, the potential for professional development is limitless. This site is fantastic, in my opinion.',
    },
    {
      img: P46,
      name: 'Muhammad Umer Iqbal',
      title: 'PPC Executive',
      description:
        'With the help of my mentors and co-workers, I’ve grown so much professionally over the last few years. Every day brings a new exciting challenge which allows me to stretch my skillset.',
    },
    {
      img: P47,
      name: 'furkan khan',
      title: 'Data Entry Operator',
      description:
        'With the help of my mentors and co-workers, I’ve grown so much professionally over the last few years. Every day brings a new exciting challenge which allows me to stretch my skillset.',
    },
    {
      img: P48,
      name: 'muhammad ashir',
      title: 'senior software developer',
      description:
        'For me, an ideal working environment is one in which you can learn, grow, and have fun all at the same time, and INPL has been such place for me. Every day, I am driven to come to the office and apply my expertise to various duties.',
    },
    {
      img: P49,
      name: 'Muhammad Saqib',
      title: 'admin manger',
      description:
        'I truly enjoy the atmosphere at work. The management genuinely care about your career advancement, especially with so many exciting possibilities available.',
    },
    {
      img: P50,
      name: 'Syed Faizan',
      title: 'Team Lead PPC',
      description:
        'There are so many perks of working at INPL. The freedom to speak your point, the amazing culture, wonderful co-workers are just among the few. I’m so fortunate to be a part of this organization. ',
    },
   
    {
      img: P52,
      name: 'Muhammad Saad ',
      title: 'Junior Finance Officer',
      description:
        'So far, my experience with INPL has been nothing short of spectacular. With your ongoing encouragement and support, I am always pushing to do better than before.',
    },
    {
      img: P53,
      name: 'Shahbaz Hasan Khan',
      title: 'Operations Executive',
      description:
        'A dream workplace for me is one where you can develop while also having fun, and INPL has been such environment for me. I am inspired every day to go to work and use my abilities efficiently. ',
    },
   
    {
      img: P55,
      name: 'Saifullah Pervaiz',
      title: 'Data Entry Operator',
      description:
        'For me, an ideal working environment is one in which you can learn, grow, and have fun all at the same time, and INPL has been such place for me. Every day, I am driven to come to the office and apply my expertise to various duties.',
    },
    {
      img: P56,
      name: 'abeel ahmed',
      title: 'project manager',
      description:
        'A dream workplace for me is one where you can develop while also having fun, and INPL has been such environment for me. I am inspired every day to go to work and use my abilities efficiently. ',
    },
    {
      img: P57,
      name: 'Syed Bilal Hassan Rizvi',
      title: 'senior Flutter Developer',
      description:
        'With the help of my mentors and co-workers, I’ve grown so much professionally over the last few years. Every day brings a new exciting challenge which allows me to stretch my skillset.',
    },
  ]);

  return (
    <Stack
      display={{ base: 'none', md: 'block' }}
      pb={6}
      bg={'white.100'}
      overflow={'hidden'}
      marginTop={'0 !important'}
    >
      <Container
        py={{ base: '18', md: '36' }}
        position={'relative'}
        maxW={{ lg: '6xl', '2xl': '80%' }}
      >
        <Tabs variant="soft-rounded" colorScheme="white">
          <TabList>
            {Testimages.map((v, i) => (
              <Tab key={i}>
                <Image
                borderRadius={'50%'}
                  zIndex={3}
                  filter={'grayScale(100%)'}
                  transition={'all ease 0.3s'}
                  opacity={'0.5'}
                  _hover={{
                    filter: 'grayScale(0%)',
                    transform: 'scale(1.1)',
                    opacity: 1,
                  }}
                  className={`testi testImage${i}`}
                  src={v.img}
                />
              </Tab>
            ))}
          </TabList>

          <Box mb={'12'} textAlign={'center'}>
            <Heading fontSize={{ base: '28px', md: '40px' }}>
              Life At{' '}
              <Text color={'primaryOrange.100'} display={'inline-block'}>
                INPL
              </Text>
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              Discover what our employees have to say about their experience
              <br /> and what it is like to work at Innovative Network.
            </Text>
          </Box>
          <TabPanels>
            {Testimages.map((v, i) => {
              return (
                <TabPanel key={i}>
                  <Stack position={'relative'}>
                    <Box
                      m={'auto'}
                      boxShadow="2xl"
                      w={{ base: '100%', md: '90%', lg: '786px' }}
                      position={'relative'}
                      rounded="md"
                      bg="white"
                      textAlign={'center'}
                      alignItems={'center'}
                      pt={'25px'}
                      px={{ base: '20px', md: '50px' }}
                      pb={'30px'}
                      height={{ base: 'auto', md: 'auto', lg: '408px' }}
                      zIndex={'2'}
                    >
                      <Stack>
                        <Img
                          src={v.img}
                          w={{ base: '100px', md: '160px' }}
                          m={'auto'}
                          mt={'-1px'}
                        />
                        <Text
                          position={'relative'}
                          zIndex={100}
                          fontSize={{ base: '13px', md: '17px' }}
                          py={5}
                        >
                          {v.description}
                        </Text>
                        <Heading
                          as="h4"
                          textTransform={'capitalize'}
                          fontSize={{ base: 'md', md: 'lg' }}
                        >
                          {v.name}
                        </Heading>
                        <Heading
                          as="h6"
                          textTransform={'capitalize'}
                          fontSize={{ base: '13px', md: '16px' }}
                        >
                          {v.title}
                        </Heading>
                      </Stack>
                    </Box>
                    <Box
                      position={'absolute'}
                      width={{ base: '80%', md: '42%' }}
                      height={'60px'}
                      bottom={'-30px'}
                      background={'#fff'}
                      left={'50%'}
                      transform={'translate(-50%,0)'}
                      right={'0'}
                      marginX={'auto'}
                      zIndex={'1'}
                      boxShadow={'0px 10px 30px #0000001a'}
                      borderRadius={'8px'}
                      bg={'primaryOrange.100'}
                    ></Box>
                  </Stack>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Container>
    </Stack>
  );
}
