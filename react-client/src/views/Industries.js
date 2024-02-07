import { Box, Container, Grid, GridItem, Heading, Stack, Text, Link, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import MiniBanner from '../components/Site/Banners/MiniBanner'
import Indus1 from '../assets/images/indus/indus1.jpg'
import Indus2 from '../assets/images/indus/indus2.jpg'

import Indus4 from '../assets/images/indus/indus4.jpg'

import Indus9 from '../assets/images/indus/indus9.jpg'
import { Link as ReactLink } from 'react-router-dom';
import { RiShareBoxLine } from 'react-icons/ri'
import SingleIndustry from '../components/Site/Industries/SingleIndustry'
import bannerDataURL from '../utilities/bannerDataURL'

export default function Industries() {

    const [IndustriesList] = useState([
        {
            bgImage: Indus1,
            heading: 'Retail',
            content: 'Need for staying ahead of competition, INPL integrates digital business solutions to retails brands. Our unified applications are perfected to give you all the insights of your consumer’s purchasing patterns and behavior, this supports the customized system designed by our highly qualified team of experts to offer you one-time solution at the right time for your business growth. Services at INPL are designed to offer powerful business results which not only improve your internal system but increases efficiency and accuracy by 100%.'
        },
        {
            bgImage: Indus2,
            heading: 'Manufacturing',
            content: "INPL provides manufacturing firms with the necessary technology to service customers through digital sales channels from any location and on any device.For various multinational FMCG companies, we have set up and optimized e-commerce and supply chain capabilities. Our in-house developed data analytics methods identify exact client segmentation and product affinity. We use machine intelligence and IT to automate your inventory management.",
            link: '#'
        },
       
        {
            bgImage: Indus4,
            heading: 'Public Sector',
            content: "Numerous federal, provincial, and municipal government organizations have benefited from INPL’s assistance in fostering economic growth, expanding social inclusion, and improving citizen services.Our large-scale projects demonstrate how INPL integrates effective MIS and ERP technology with precise and effective BPO services under one roof to produce unrivalled outcomes for land record management and education companies.",
           
        },
        {
            bgImage: Indus9,
            heading: 'Financial Institutions',
            content: "INPL uses enterprise integration, business process management, and robotic process automation solutions to assist financial institutions increase productivity and boost their bottom line.To secure the privacy and integrity of your digital assets, we suggest InfoSec and block chain technology. Our professionals employ open API technologies to assist your business in growing brand awareness and gaining access to fresh digital income sources.",
        }
        // {
        //     bgImage: Indus5,
        //     heading: 'Trading',
        //     content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod temporsed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        //     link: '#'
        // },
        // {
        //     bgImage: Indus6,
        //     heading: 'Hospitality',
        //     content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod temporsed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        //     link: '#'
        // },
        // {
        //     bgImage: Indus7,
        //     heading: 'Real Estate',
        //     content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod temporsed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        //     link: '#'
        // },
        // {
        //     bgImage: Indus8,
        //     heading: 'Cosmetics',
        //     content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod temporsed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        //     link: '#'
        // },
        
    ]);

    return (
        <>
            <Stack
                marginTop={'0 !important'}
                bgImage={bannerDataURL}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                bgAttachment={{ base: 'inherit', md: 'fixed' }}
                height={{ base: '70vh', md: '60vh' }}
                display={'flex'}
                justifyContent={'center'}
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
                <MiniBanner simpleHeading={'Our Industries'} />
            </Stack>
            {
                IndustriesList.map((v, i) =>
                    <SingleIndustry {...v} key={i} separateId={i} />
                )
            }
        </>
    )
}
