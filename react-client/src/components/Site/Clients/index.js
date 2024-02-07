import { Container, Stack } from '@chakra-ui/react'
import ClientsContent from './ClientsContent'
import pearls10 from '../../../assets/images/clients/10pearls.png'
import Ajwa from '../../../assets/images/clients/ajwa.png'
import area51banquet from '../../../assets/images/clients/area51banquet.png'
import bellagiobanquet from '../../../assets/images/clients/bellagiobanquet.png'
import bkfisheries from '../../../assets/images/clients/bkfisheries.png'
import briogene from '../../../assets/images/clients/briogene.png'
import dermmd from '../../../assets/images/clients/dermmd.png'
import drtsolutionz from '../../../assets/images/clients/drtsolutionz.png'
import hilalfoods from '../../../assets/images/clients/hilalfoods.png'
import insightsolution from '../../../assets/images/clients/insightsolution.png'
import internationalchemplast from '../../../assets/images/clients/internationalchemplast.png'
import maritimefisheries from '../../../assets/images/clients/maritimefisheries.png'
import maritimeseafood from '../../../assets/images/clients/maritimeseafood.png'
import mimafacility from '../../../assets/images/clients/mimafacility.png'
import northkarachiassociation from '../../../assets/images/clients/northkarachiassociation.jpg'
import pakistaninsurancecompany from '../../../assets/images/clients/pakistaninsurancecompany.png'
import roomi from '../../../assets/images/clients/roomi.png'
import sziaulhaqsons from '../../../assets/images/clients/sziaulhaqsons.png'
import tpl from '../../../assets/images/clients/tpl.png'
import tpltrakker from '../../../assets/images/clients/tpltrakker.png'
import trg from '../../../assets/images/clients/trg.png'
import seatex from '../../../assets/images/clients/seatex.jpg'
import hamza from '../../../assets/images/clients/hamza.jpg'
import garibsons from '../../../assets/images/clients/garibsons.jpg'
import chemcos from '../../../assets/images/clients/chemcos.jpg'
import rawaha from '../../../assets/images/clients/rawaha.jpg'
import nuboard from '../../../assets/images/clients/nuboard.jpg'
import sogo from '../../../assets/images/clients/sogo.jpg'
import unisons from '../../../assets/images/clients/unisons.jpg'
import mywater from '../../../assets/images/clients/mywater.jpg'
import { useState } from 'react'
import ClientsImages from './ClientsImages'

export default function Clients() {

    const [ClientsDetails] = useState([
        {
            image: pearls10,
            label: '10Pearls was founded in 2004 by brothers Imran and Zeeshan Aftab. What began as a two-person operation is now a global organization of 1200+ with offices in DC, New York, London, San Jose, Toronto, Dubai, Karachi, Lahore, Islamabad and Medellin.'
        },
        {
            image: Ajwa,
            label: "Ajwa first made waves in Pakistan's e-commerce market after its introduction in 2012. We have since grown to become Pakistan's largest platform for online"
        },
        {
            image: drtsolutionz,
            label: 'DRT is a 100% secure website. Your sharing data can get research opportunities targeted to your interest, and DRT sends you a survey email when an online survey is available. Then Hurry up, and respond quickly, as this invitation will be available only until a pre-determined number of responses have been received.'
        },
        {
            image: bkfisheries,
            label: 'As the number 1 guide on where to enjoy fishing in the UK, we have done all the hard work for you, so you can simply select the county in which you want to find a fishery and take your pick from the best in the locality.'
        },
        {
            image: tpl,
            label: 'TPL Insurance is Pakistan’s first direct insurance company with the aim to provide seamless insurance services to its customers through its 24 / 7 call center and integrated insurance systems.'
        },
        {
            image: dermmd,
            label: 'Whether you have concerns with aging spots, acne, unwanted hair, rashes, itches, annoying veins, or other skin-related conditions, Academic & Aesthetic Dermatology Consultants in San Diego, CA, has dermatology treatments that can help.'
        },
        {
            image: briogene,
            label: 'Briogene is a diversified healthcare solution provider. The company offers broad range of established & innovative products for use in the fields of medical diagnostics, treatment and disease management. The strong & deep rooted legacy of Getz Group of Companies and partnership with QIAGEN enabled Briogene to position itself as a premier supplier of innovative solutions to the healthcare industry.'
        },
        {
            image: trg,
            label: 'TRG was incorporated in Pakistan as a public limited company on December 2, 2002 under the Companies Ordinance, 1984 and is listed on the Pakistan Stock Exchange (PSX). TRG obtained the certificate of commencement of business on February 27, 2003. The operations of the Company effectively started on April 11, 2003.'
        },
        {
            image: bellagiobanquet,
            label: 'Standing tall amongst all! The best banquet in Karachi with all the matchless services. The manager is super cooperative and so is the staff. We loved the place and everything was too good.'
        },
        {
            image: mimafacility,
            label: 'Mega Facility Management is one of the largest privately-held, integrated facilities maintenance companies in Pakistan. MFM has seamlessly expanded throughout the country with its highly equipped staff and seamlessly professional service'
        },
        {
            image: tpltrakker,
            label: 'TPL Trakker is the pioneer of Asset Tracking Industry in Pakistan. We laid the block of innovation 22 years back and have been providing top-notch solutions ever since.'
        },
        {
            image: northkarachiassociation,
            label: 'NKATI stands for North Karachi Association of Trade & Industry, which is a registered trade body representing the commercial industrial and service units located in North Karachi Industrial Area (NKIA).NKIA is the largest Industrial Area in terms of small and medium enterprises (SMEs). It came into existence in 1974.'
        },
        {
            image: hilalfoods,
            label: 'Established in 1956, Hilal Foods is one of the Pakistan’s leading FMCG company in value-added food segment with state-of-the-art manufacturing facilities, and quality brands nurtured through innovation and excellence.'
        },
        {
            image: roomi,
            label: 'It was over 65 years ago that Roomi family entered into the business, first in the import and trading of dental materials and equipment and later manufacturing of oral dental hygiene products.'
        },
        {
            image: pakistaninsurancecompany,
            label: 'Pakistan Reinsurance Company Limited is a Public Sector Company, Governed under the administrative control of Ministry of Commerce. There are seven Directors on the Board of Company, including the Chairman of Board. '
        },
        {
            image: sziaulhaqsons,
            label: 'Since 1918, SZS in engaged in providing services par excellence and is serving major Oil & Gas Explorations in the most difficult remote areas in Pakistan as well as Overseas. SZS is an ISO & HACCP certified company committed to improve services through rigorous training and upgrading plans. SZS is constantly striving to adopt new technology and practices in order to add more value to the services.'
        },
        {
            image: insightsolution,
            label: 'We understand how frustrating it can be for businesses with unreliable IT services and the effect this has on company performance and morale. We passionately believe in proactive support and are focused on making IT as reliable as possible.'
        },
        {
            image: internationalchemplast,
            label: 'ICPL - under the energetic leadership of the founders combined with professional management have earned reputation synonymous with reliability and partnership relationship with customers.'
        },
        {
            image: area51banquet,
            label: 'A sublime and elegant venue that is aesthetically designed to incorporate all the elements required'
        },
        {
            image: maritimeseafood,
            label: 'Maritime Seafood, the largest Processor, Packer, Wholesaler, Exporter of Frozen and Fresh seafood for the last 4 decades, in the biggest wholesale fish market of Asia, situated in Karachi Pakistan.'
        },
        {
            image: seatex,
            label: 'Since 1967 Seatex has been an industry leader providing turnkey chemical compounding, toll manufacturing and private brand packaging services. Seatex is a registered blending facility for EPA, NSF, Kosher, UL, Green Seal, DfE, and CRI.'
        },
        {
            image: hamza,
            label: 'Hamza Hafeez Oil & Ghee Mill has been established in July 2020. We have the most integrated Batch processing plant. We are producing Dibble Oil and Banaspati Ghee , We Also import lentils, Chickpeas, Matpe and Grains.'
        },
        {
            image: maritimefisheries,
            label: 'Since establishment in 1993, Maritime Fisheries. has successfully and progressively upheld the mantle of quality and novelty in seafood exports from Pakistan. The Maritime Fisheries is known for its excellent variety of sea water fish, and crab. Based at the Karachi fish harbor on the shores of Maritime Fisheries.'
        },
        {
            image: garibsons,
            label: 'Garibsons (Pvt) Ltd is a family-owned business established in 1976. The company is a BRC and Halal certified business.  We constantly strive to change for betterment. We aim at continuously developing products that allow use of high-grade Chipboards and MDF in applications previously not thought-of. '
        },
        {
            image: chemcos,
            label: 'Chemcos International serves the Pakistani market and beyond. The brand strives and aims to serve its customers with Halal and toxic free natural products and has gained appreciation globally and is well known for quality products.Chemcos Internaal is the leading 3th generation family-oriented company, established in 1970 in Karachi, Pakistan.'
        },
        {
            image: rawaha,
            label: 'RAWAHA was born out of a vision to create Pakistan’s first home-grown perfume brand, while catering to the discerning needs of the Pakistani fragrance enthusiasts, and over time expand globally. Our core strength lies in crafting impeccable and elegant inspirations of global perfumes '
        },
        {
            image: nuboard,
            label: 'Nuboard was established in 1976 with an objective of providing innovative solutions for the wood industry and home decor. With the vast experience of over 40 years we have now been able to build one of the largest complete woodworking facilities in Pakistan.'
        },
        {
            image: sogo,
            label: 'SOGO is one of the biggest Groups of Pakistan. From our Headquarters in Karachi, all the way to Peshawar in the North, our sales and distribution network is mapped in a way to reach every city, town and village of Pakistan. '
        },
        {
            image: unisons,
            label: 'Unisons established in 2000, have been carrying on successfully its trade activity for over one decade. Thanks to its research activity and selection of reliable and qualified producers: a perfect partner in the service of the industry.'
        },
        {
            image: mywater,
            label: 'To serve the highest quality of mineral drinking water using cutting edge technology and modern design. Our products not only give you one of the cleanest drinking water available but also provides you with an experience of a healthier lifestyle by reducing usage of plastic bottles. Your journey with mywater® will transform perspectives on matters such as health, environmental concern and comfort in all aspects of your life. We want to set better standards of a hassle-free service for our customers.'
        },
    ]);

    return (
        <Stack
            display={{ base: 'none', lg: 'block' }}
            bgColor={'white.100'}
            py={16}
            marginTop={'0 !important'}
        >
            <Container maxW={{ lg: '6xl', '2xl': '8xl' }}>
                <Stack>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        pb={8}
                        borderBottom={'2px solid #dedede'}
                        flexWrap={{ base: 'wrap', md: 'nowrap' }}
                        justifyContent={{ base: 'center', md: 'space-between' }}
                    >
                        <ClientsContent />
                    </Stack>
                </Stack>
            </Container>
            <Stack>
                <ClientsImages {...ClientsDetails} />
            </Stack>
        </Stack>
    )
}
