import { Container, Stack } from "@chakra-ui/react";
import { useState } from "react";
import SingleBrand from "./SingleBrand";
import PerranLogo from '../../../assets/images/brands/perranLogo.png'
import PerranPic from '../../../assets/images/brands/perranPic.png'
import IdaLogo from '../../../assets/images/brands/idaLogo.png'
import IdaPic from '../../../assets/images/brands/idaPic.png'
import IgsLogo from '../../../assets/images/brands/igsLogo.png'
import IgsPic from '../../../assets/images/brands/igsPic.png'
import creamLogo from '../../../assets/images/brands/creamLogo.svg'
import creamPic from '../../../assets/images/brands/creamPic.png'

export default function Brands() {

    const [BrandsDetails] = useState([
        {
            logo: PerranLogo,
            sidePic: PerranPic,
            link: 'https://perranofficial.com/',
            content: 'Perran reflects heritage in its truest essence. From designer apparel to elegant fashionwear, it is the ultimate destination for all your ethnic needs. Each article is made with the highest quality fabrics and is embellished beautifully.'
        },
        {
            logo: IdaLogo,
            sidePic: IdaPic,
            link: 'https://heyida.pk/',
            content: 'Innovative Digital Agency is a full-service digital agency that collaborates with you to develop bespoke internet marketing services and a strategy that is tailored to your specific business demands. Rather than being an agency that executes strategy blindly, we become an extension of your team, a partner who understands your market and goals.'
        },
        {
            logo: IgsLogo,
            sidePic: IgsPic,
            link: 'https://innovativegamestudio.com/',
            content: 'We offer a comprehensive spectrum of game development services, including game design, 2D and 3D graphics, animations, and programming. Our team is made up of seasoned game developers and artists that are always prepared to go above and beyond to provide high-quality goods and assure complete customer satisfaction.'
        },
        {
            logo: creamLogo,
            sidePic: creamPic,
            link: 'https://g.page/cremepk?share',
            content: 'Crème Villa aims to make your day even more special by catering your event with delicious ice cream. Making the best ice cream, for us, means starting with the best ingredients, such as fresh, local milk procured close to our manufacturing facilities, so you can anticipate farm-to-freezer flavor in every bite.'
        },
    ]);

    return (
        <Stack
            pt={8}
            pb={14}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack bg={'#fff'}>
                    {
                        BrandsDetails.map((v, i) =>
                            <SingleBrand
                                direction={(i % 2 !== 0) ? 'row-reverse' : 'row'}
                                {...v}
                                key={i}
                            />
                        )
                    }
                </Stack>
            </Container>
        </Stack>
    )
}
