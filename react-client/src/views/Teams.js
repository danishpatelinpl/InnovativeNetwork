import { Container, Stack } from '@chakra-ui/react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Teampeople from '../assets/images/aboutPg/teams.png'
import { useEffect, useState } from 'react'
import SingleLeader from '../components/Site/Leaders/SingleLeader'
import AllTeams from '../components/Site/Teams/AllTeams'
import AhsanIqbal from '../assets/images/profile/sir1.jpg'
import SmRehan from '../assets/images/profile/rehan.jpg'
import SmOvais from '../assets/images/profile/ovaisBhai.jpg'
import bannerDataURL from '../utilities/bannerDataURL'

export default function Teams() {

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])
  

  const [MainLeadersList] = useState([
    {
      image: AhsanIqbal,
      name: 'Ahsan Iqbal',
      designation: 'Chief Executive Officer',
      shortDesignation: '- CEO',
      content: "Our journey began with a vision to revolutionize the IT service industry, and today, I am proud to say that we have achieved remarkable milestones, thanks to the unwavering support of our incredible team and the trust of our clients. We believe that technology is the key to unlocking infinite possibilities for businesses across the globe. Our mission is to empower organizations of all sizes and industries by providing cutting-edge IT solutions tailored to their unique needs. We understand that every challenge presents an opportunity for growth, and we are dedicated to helping our clients navigate the ever-evolving landscape of technology with confidence. we believe that technology is the key to unlocking infinite possibilities for businesses across the globe. Our mission is to empower organizations of all sizes and industries by providing cutting-edge IT solutions tailored to their unique needs. We understand that every challenge presents an opportunity for growth, and we are dedicated to helping our clients navigate the ever-evolving landscape of technology with confidence.",
    },
    {
      image: SmOvais,
      name: 'Ovais Rehan',
      designation: 'Chief Operating Officer',
      shortDesignation: '- COO',
      content: "As the COO of Innovative Networks, it brings me great pleasure to extend a warm welcome to all our esteemed clients and visitors. In today's fast-paced and technology-driven world, businesses need reliable IT solutions that can keep up with their ever-evolving needs As the COO, I take immense pride in overseeing our operations to ensure seamless service delivery and customer satisfaction.Our dedicated team of experts works tirelessly to ensure that we stay at the forefront of innovation and deliver top-notch IT services to our clients Whether it's comprehensive IT consulting, cloud solutions, cybersecurity, software development, or managed services, we go above and beyond to exceed expectations. At Innovative Networks, we invest in continuous learning and development for our team members. Our dynamic and skilled workforce ensures that we are well-equipped to handle the most complex IT projects and deliver results that surpass expectations.",
    },
    {
      image: SmRehan,
      name: 'SM Rehan',
      designation: 'Director',
      content: "As the Director of Innovative Network, I am honored to lead a team of dedicated professionals who are passionate about harnessing the power of technology to drive business transformation. Our journey as an IT service company has been marked by innovation, collaboration, and a relentless commitment to excellence From our inception, our vision has been clear: to be the leading provider of cutting-edge IT solutions that empower businesses to thrive in the digital era. Today, I am proud to say that we have achieved significant milestones, and our journey continues to be guided by the pursuit of innovation and customer-centricity. I encourage you to explore our comprehensive range of IT services on our website and discover how we can help your business thrive in the digital age. Whether it's cloud solutions, cybersecurity, IT consulting, or other services, we have the expertise and experience to cater to your needs. Thank you for considering Innovative Networks as your IT service provider, We are excited to embark on this journey of growth and innovation together. Here's to a future of innovation, growth, and shared success!",
    }
  ]);

  return (
    <>
      <Stack
        marginTop={'0 !important'}
        bgImage={bannerDataURL}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        height={{ base: '40vh', md: '100vh' }}
        display={'flex'}
        justifyContent={{base: 'center', lg: 'flex-end'}}
        position={'relative'}
        zIndex={'1'}
        _after={
          {
            content: '""',
            position: 'absolute',
            bg: '#ffffffd9',
            w: '100%',
            h: '100%',
            zIndex: '-1'
          }
        }
      >
        <MiniBanner simpleHeading={'Our'} strokeHeading={'Team'} banPic={Teampeople} marginLeft={true} />
      </Stack>
      <Stack bg={'#fff'}>
        <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
          {
            MainLeadersList.map((v, i) => <SingleLeader {...v} key={i} direction={i % 2 !== 0 ? 'row-reverse' : 'row'} />)
          }
        </Container>
      </Stack>
      <Stack >
        <AllTeams />
      </Stack>
    </>
  )
}
