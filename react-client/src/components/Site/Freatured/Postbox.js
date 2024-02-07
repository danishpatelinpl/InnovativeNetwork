
import { Img } from '@chakra-ui/image';
import { Box, Flex, Heading, Text, Link, Stack } from '@chakra-ui/layout'
import React from 'react'
import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function Postbox(props) {

  return (
    <>
      <Flex gap={'8'} flexDirection={{base: 'column', lg: 'row'}} >
        {
          Object.values(props).map(
            (v, i) => {
              return (
                <Stack key={i} boxShadow='0px 0px 35px -5px #adadad' borderRadius={'25px'} bg='white' overflow={'hidden'}>
                  <Img src={v.image} alt='' borderRadius={'25px'} />

                  <Stack py={'6'} px={{base: '4', lg: '8'}}>
                    <Heading as='h6' fontSize={{base: '16px', lg: '20px'}} fontWeight={500} pb={2} >
                      {v.title}
                    </Heading>
                    <Text fontSize={{base: '12px', lg: '14px'}} pb={6}>
                      {v.label}

                    </Text>
                    <Link color={'primaryOrange.100'} textTransform={'uppercase'} fontWeight={'600'} fontSize={{base: 12, lg: 14}} to={v.link}>Learn More</Link>
                  </Stack>

                </Stack>
              )
            })
        }

      </Flex>
    </>
  )
}
