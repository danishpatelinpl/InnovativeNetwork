import { Box, Heading, Icon, Image, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import profilePic from '../../../assets/images/activityProfile.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function ActivitySlider() {

    const [ActivityData, setActivityData] = useState([
        {
           
            name: 'Gitex Global',
            designation: '𝐌𝐫. 𝐇𝐢𝐥𝐚𝐥 𝐀𝐥 𝐇𝐚𝐛𝐬𝐲 ',
            platform: 'linkedin',
            quote: 'It is our great pleasure to announce that 𝐌𝐫. 𝐇𝐢𝐥𝐚𝐥 𝐀𝐥 𝐇𝐚𝐛𝐬𝐲 and 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐯𝐞 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 have formed a partnership to develop gaming and accounting software that will open doors to an immeasurable new digital realm.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-software-networking-activity-6986625222888026112-EUNU?utm_source=share&utm_medium=member_desktop',
            posted: '3week ago'
        },
        {
           
            name: ' UBIT Career Fest',
            designation: '2022 job fair ',
            platform: 'linkedin',
            quote: 'We are attending the UBIT Career Fest 2022 job fair today. If you are looking to advance your career, there is no better place than the job fair. Whether you need to add new skills to your repertoire or simply want to network with other professionals, Drop us a line, and lets get started!',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_jobfair-career-network-activity-6996345735084445696-Kjna?utm_source=share&utm_medium=member_desktop',
            posted: '5 hrs ago'
        },
        {
           
            name: 'Perran',
            designation: 'Ms. Fatima Raza',
            platform: 'linkedin',
            quote: 'Traveled for leisure, but for the first time traveling for business opportunities.Thank you Innovative Network Pvt Ltd for an amazing growth platform.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_womenentrepreneurs-womenempowerment-womenempoweringwomen-activity-6988824263705169921-eU3Y?utm_source=share&utm_medium=member_desktop',
            posted: '2week ago'
        },
        {
           
            name: 'Dinner with Employees',
            designation: 'Mr. Ahsan Iqbal',
            platform: 'linkedin',
            quote: 'We don’t wait for special occasions to enjoy enriching discussions over delectable meals with our companys committed members and contributors.  Veterans of our INPL had a lovely supper with our CEO, Mr. Ahsan Iqbal, for much needed brain rest and created some lasting memories. ',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-corporatedinner-teambuilding-activity-6988766834564952064-tKbz?utm_source=share&utm_medium=member_desktop',
            posted: '3week ago'
        },
        {
           
            name: 'Naati',
            designation: '𝐀𝐧𝐨𝐭𝐡𝐞𝐫 𝐌𝐢𝐥𝐞𝐬𝐭𝐨𝐧𝐞 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐝!',
            platform: 'linkedin',
            quote: 'This time, we are proud to announce with enthusiasm and excitement that Innovative Network Pvt Ltd and 𝐍𝐀𝐀𝐓𝐈 have partnered to provide the youth with the opportunity to participate in the Credentialed Community Language (CCL) NAATI test at our location.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-naati-partnership-activity-6980441165183500288-kxII?utm_source=share&utm_medium=member_desktop',
            posted: '1 month ago'
        },
        {
            
            name: '𝐃𝐔𝐄𝐓',
            designation: ' job fair 2022',
            platform: 'linkedin',
            quote: 'We were thrilled to participate in the 2022 university-wide job fair and attend the Dawood University of Engineering and Technology . It was a great experience to connect with future talent and looking forward to building meaningful relationships and helping students to find their dream jobs.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_careerfair2022-jobfair-company-activity-6995727999799054337-3-fG?utm_source=share&utm_medium=member_desktop',
            posted: '1 day ago'
        },
        {
           
            name: 'Gitex Global',
            designation: '𝐌𝐫. 𝐇𝐢𝐥𝐚𝐥 𝐀𝐥 𝐇𝐚𝐛𝐬𝐲 ',
            platform: 'linkedin',
            quote: 'It is our great pleasure to announce that 𝐌𝐫. 𝐇𝐢𝐥𝐚𝐥 𝐀𝐥 𝐇𝐚𝐛𝐬𝐲 and 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐯𝐞 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 have formed a partnership to develop gaming and accounting software that will open doors to an immeasurable new digital realm.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-software-networking-activity-6986625222888026112-EUNU?utm_source=share&utm_medium=member_desktop',
            posted: '3week ago'
        },
        {
           
            name: ' UBIT Career Fest',
            designation: '2022 job fair ',
            platform: 'linkedin',
            quote: 'We are attending the UBIT Career Fest 2022 job fair today. If you are looking to advance your career, there is no better place than the job fair. Whether you need to add new skills to your repertoire or simply want to network with other professionals, Drop us a line, and lets get started!',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_jobfair-career-network-activity-6996345735084445696-Kjna?utm_source=share&utm_medium=member_desktop',
            posted: '5 hrs ago'
        },
        {
           
            name: 'Perran',
            designation: 'Ms. Fatima Raza',
            platform: 'linkedin',
            quote: 'Traveled for leisure, but for the first time traveling for business opportunities.Thank you Innovative Network Pvt Ltd for an amazing growth platform.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_womenentrepreneurs-womenempowerment-womenempoweringwomen-activity-6988824263705169921-eU3Y?utm_source=share&utm_medium=member_desktop',
            posted: '2week ago'
        },
        {
           
            name: 'Dinner with Employees',
            designation: 'Mr. Ahsan Iqbal',
            platform: 'linkedin',
            quote: 'We don’t wait for special occasions to enjoy enriching discussions over delectable meals with our companys committed members and contributors.  Veterans of our INPL had a lovely supper with our CEO, Mr. Ahsan Iqbal, for much needed brain rest and created some lasting memories. ',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-corporatedinner-teambuilding-activity-6988766834564952064-tKbz?utm_source=share&utm_medium=member_desktop',
            posted: '3week ago'
        },
        {
           
            name: 'Naati',
            designation: '𝐀𝐧𝐨𝐭𝐡𝐞𝐫 𝐌𝐢𝐥𝐞𝐬𝐭𝐨𝐧𝐞 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐝!',
            platform: 'linkedin',
            quote: 'This time, we are proud to announce with enthusiasm and excitement that Innovative Network Pvt Ltd and 𝐍𝐀𝐀𝐓𝐈 have partnered to provide the youth with the opportunity to participate in the Credentialed Community Language (CCL) NAATI test at our location.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-naati-partnership-activity-6980441165183500288-kxII?utm_source=share&utm_medium=member_desktop',
            posted: '1 month ago'
        },
        {
            
            name: '𝐃𝐔𝐄𝐓',
            designation: ' job fair 2022',
            platform: 'linkedin',
            quote: 'We were thrilled to participate in the 2022 university-wide job fair and attend the Dawood University of Engineering and Technology . It was a great experience to connect with future talent and looking forward to building meaningful relationships and helping students to find their dream jobs.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_careerfair2022-jobfair-company-activity-6995727999799054337-3-fG?utm_source=share&utm_medium=member_desktop',
            posted: '1 day ago'
        },
        {
           
            name: 'Gitex Global',
            designation: '𝐌𝐫. 𝐇𝐢𝐥𝐚𝐥 𝐀𝐥 𝐇𝐚𝐛𝐬𝐲 ',
            platform: 'linkedin',
            quote: 'It is our great pleasure to announce that 𝐌𝐫. 𝐇𝐢𝐥𝐚𝐥 𝐀𝐥 𝐇𝐚𝐛𝐬𝐲 and 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐯𝐞 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 have formed a partnership to develop gaming and accounting software that will open doors to an immeasurable new digital realm.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-software-networking-activity-6986625222888026112-EUNU?utm_source=share&utm_medium=member_desktop',
            posted: '3week ago'
        },
        {
           
            name: ' UBIT Career Fest',
            designation: '2022 job fair ',
            platform: 'linkedin',
            quote: 'We are attending the UBIT Career Fest 2022 job fair today. If you are looking to advance your career, there is no better place than the job fair. Whether you need to add new skills to your repertoire or simply want to network with other professionals, Drop us a line, and lets get started!',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_jobfair-career-network-activity-6996345735084445696-Kjna?utm_source=share&utm_medium=member_desktop',
            posted: '5 hrs ago'
        },
        {
           
            name: 'Perran',
            designation: 'Ms. Fatima Raza',
            platform: 'linkedin',
            quote: 'Traveled for leisure, but for the first time traveling for business opportunities.Thank you Innovative Network Pvt Ltd for an amazing growth platform.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_womenentrepreneurs-womenempowerment-womenempoweringwomen-activity-6988824263705169921-eU3Y?utm_source=share&utm_medium=member_desktop',
            posted: '2week ago'
        },
        {
           
            name: 'Dinner with Employees',
            designation: 'Mr. Ahsan Iqbal',
            platform: 'linkedin',
            quote: 'We don’t wait for special occasions to enjoy enriching discussions over delectable meals with our companys committed members and contributors.  Veterans of our INPL had a lovely supper with our CEO, Mr. Ahsan Iqbal, for much needed brain rest and created some lasting memories. ',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-corporatedinner-teambuilding-activity-6988766834564952064-tKbz?utm_source=share&utm_medium=member_desktop',
            posted: '3week ago'
        },
        {
           
            name: 'Naati',
            designation: '𝐀𝐧𝐨𝐭𝐡𝐞𝐫 𝐌𝐢𝐥𝐞𝐬𝐭𝐨𝐧𝐞 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐝!',
            platform: 'linkedin',
            quote: 'This time, we are proud to announce with enthusiasm and excitement that Innovative Network Pvt Ltd and 𝐍𝐀𝐀𝐓𝐈 have partnered to provide the youth with the opportunity to participate in the Credentialed Community Language (CCL) NAATI test at our location.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_inpl-naati-partnership-activity-6980441165183500288-kxII?utm_source=share&utm_medium=member_desktop',
            posted: '1 month ago'
        },
        {
            
            name: '𝐃𝐔𝐄𝐓',
            designation: ' job fair 2022',
            platform: 'linkedin',
            quote: 'We were thrilled to participate in the 2022 university-wide job fair and attend the Dawood University of Engineering and Technology . It was a great experience to connect with future talent and looking forward to building meaningful relationships and helping students to find their dream jobs.',
            link: 'https://www.linkedin.com/posts/innovative-network-pvt-ltd_careerfair2022-jobfair-company-activity-6995727999799054337-3-fG?utm_source=share&utm_medium=member_desktop',
            posted: '1 day ago'
        },
    ]);

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Stack>
            <Slider {...settings}>
                <Stack
                    as={'section'}
                    display={'flex !important'}
                    direction={'row'}
                    alignItems={'flex-start'}
                    spacing={0}
                    flexWrap={'wrap'}
                    gap={4}
                >
                    {
                        ActivityData.map((v, i) => (i >= 0 && i < 6) && <ActivityBox key={i} {...v} />)
                    }
                </Stack>
                <Stack
                    as={'section'}
                    display={'flex !important'}
                    direction={'row'}
                    alignItems={'flex-start'}
                    spacing={0}
                    flexWrap={'wrap'}
                    gap={4}
                >
                    {
                        ActivityData.map((v, i) => (i >= 6 && i < 12) && <ActivityBox key={i} {...v} />)
                    }
                </Stack>
                <Stack
                    as={'section'}
                    display={'flex !important'}
                    direction={'row'}
                    alignItems={'flex-start'}
                    spacing={0}
                    flexWrap={'wrap'}
                    gap={4}
                >
                    {
                        ActivityData.map((v, i) => (i >= 12 && i < 18) && <ActivityBox key={i} {...v} />)
                    }
                </Stack>
            </Slider>
        </Stack>
    )
}

const ActivityBox = ({ image, name, designation, platform, quote, link, posted }) =>
    <Stack
        w={{base: '47%',md: '31%'}}
        borderRadius={12}
        bgColor={'#00000021'}
        backdropFilter={'blur(4px)'}
        py={6}
        px={4}
        mb={1}
    >
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pb={4}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                gap={4}
            >
                
                <Box
                    color={'white.100'}
                >
                    <Heading
                        fontSize={'22px'}
                        fontWeight={300}
                    >
                        {name}
                    </Heading>
                    <Text
                        fontSize={'13px'}
                    >
                        {designation}
                    </Text>
                </Box>
            </Box>
            <Box>
                <Icon
                    fontSize={'32px'}
                    color={platform === 'linkedin' ? '#0077B7' : '#475993'}
                    as={platform === 'linkedin' ? FaLinkedinIn : FaFacebookF}
                />
            </Box>
        </Stack>
        <Stack>
            <Text

                color={'white.100'}
                fontWeight={300}
                height={'80px'}
                overflow={'hidden'}
                textOverflow={'ellipsis'}
                fontSize={'13px'}
            >
                {quote}
            </Text>
            <Text
                position={'relative'}
                zIndex={12}
                textOverflow={'ellipsis'}
                whiteSpace={'nowrap'}
                overflow={'hidden'}
            >
                <Link
                    href={link}
                    target={'_blank'}
                    color={'#1D6BB3'}
                    fontSize={'14px'}
                    pb={4}
                    
                >
                    {link}
                </Link>
            </Text>
        </Stack>
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            color={'white.100'}
            fontSize={'13px'}
        >
            <Text>
                Posted
            </Text>
            <Text>{posted}</Text>
        </Stack>
    </Stack>