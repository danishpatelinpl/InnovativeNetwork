import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

export default function ClientsImages(props) {

    const [ClientDetails] = useState(props);

    return (
        <Stack
            px={20}
        >
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                {
                    Object.values(ClientDetails).map((v, i) =>
                        (i <= 4) &&
                        <Stack
                            role={'group'}
                            mb={'40px'}
                            cursor={'pointer'}
                            key={i}
                            position={'relative'}
                        >
                            <Image
                                transition={'all ease 0.3s'}
                                w={'75%'}
                                filter={'grayScale(100%)'}
                                src={v.image}
                                alt={'client'}
                            />
                            <Stack
                                position={'absolute'}
                                top={'-10px'}
                                left={i == 4 ? '-80px' :'-10px'}
                                bgColor={'white.100'}
                                borderRadius={12}
                                boxShadow={'0px 0px 35px -5px #adadad'}
                                py={4}
                                px={8}
                                w={'400px'}
                                transition={'all ease 0.3s'}
                                opacity={0}
                                zIndex={10}
                                _groupHover={{
                                    opacity: 1
                                }}
                            >
                                <Box
                                    width={'350px'}
                                >
                                    <Image
                                        w={'40%'}
                                        objectFit={'cover'}
                                        src={v.image}
                                        alt={'client'}
                                    />
                                </Box>
                                <Text
                                    fontSize={'13px'}
                                >
                                    {v.label}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                {
                    Object.values(ClientDetails).map((v, i) =>
                        (i > 4 && i <= 10) &&
                        <Stack
                            role={'group'}
                            mb={'40px'}
                            cursor={'pointer'}
                            key={i}
                            position={'relative'}
                        >
                            <Image
                                transition={'all ease 0.3s'}
                                w={'75%'}
                                filter={'grayScale(100%)'}
                                src={v.image}
                                alt={'client'}
                            />
                            <Stack
                                position={'absolute'}
                                top={'-10px'}
                                left={i == 10 ? '-90px' :'-10px'}
                                bgColor={'white.100'}
                                borderRadius={12}
                                boxShadow={'0px 0px 35px -5px #adadad'}
                                py={4}
                                px={8}
                                w={'400px'}
                                transition={'all ease 0.3s'}
                                opacity={0}
                                zIndex={10}
                                _groupHover={{
                                    opacity: 1
                                }}
                            >
                                <Box
                                    width={'350px'}
                                >
                                    <Image
                                        w={'40%'}
                                        objectFit={'cover'}
                                        src={v.image}
                                        alt={'client'}
                                    />
                                </Box>
                                <Text
                                    fontSize={'13px'}
                                >
                                    {v.label}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                {
                    Object.values(ClientDetails).map((v, i) =>
                        (i > 10 && i <= 15) &&
                        <Stack
                            role={'group'}
                            mb={'40px'}
                            cursor={'pointer'}
                            key={i}
                            position={'relative'}
                        >
                            <Image
                                transition={'all ease 0.3s'}
                                w={'75%'}
                                filter={'grayScale(100%)'}
                                src={v.image}
                                alt={'client'}
                            />
                            <Stack
                                position={'absolute'}
                                top={'-10px'}
                                left={i == 15 ? '-70px' :'-10px'}
                                bgColor={'white.100'}
                                borderRadius={12}
                                boxShadow={'0px 0px 35px -5px #adadad'}
                                py={4}
                                px={8}
                                w={'400px'}
                                transition={'all ease 0.3s'}
                                opacity={0}
                                zIndex={10}
                                _groupHover={{
                                    opacity: 1
                                }}
                            >
                                <Box
                                    width={'350px'}
                                >
                                    <Image
                                        w={'40%'}
                                        objectFit={'cover'}
                                        src={v.image}
                                        alt={'client'}
                                    />
                                </Box>
                                <Text
                                    fontSize={'13px'}
                                >
                                    {v.label}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                {
                    Object.values(ClientDetails).map((v, i) =>
                        (i > 15 && i <= 20) &&
                        <Stack
                            role={'group'}
                            mb={'40px'}
                            cursor={'pointer'}
                            key={i}
                            position={'relative'}
                        >
                            <Image
                                transition={'all ease 0.3s'}
                                w={'75%'}
                                filter={'grayScale(100%)'}
                                src={v.image}
                                alt={'client'}
                            />
                            <Stack
                                position={'absolute'}
                                top={'-10px'}
                                left={i == 20 ? '-80px' : '-10px'}
                                bgColor={'white.100'}
                                borderRadius={12}
                                boxShadow={'0px 0px 35px -5px #adadad'}
                                py={4}
                                px={8}
                                w={'400px'}
                                transition={'all ease 0.3s'}
                                opacity={0}
                                zIndex={10}
                                _groupHover={{
                                    opacity: 1
                                }}
                            >
                                <Box
                                    width={'350px'}
                                >
                                    <Image
                                        w={'40%'}
                                        objectFit={'cover'}
                                        src={v.image}
                                        alt={'client'}
                                    />
                                </Box>
                                <Text
                                    fontSize={'13px'}
                                >
                                    {v.label}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                {
                    Object.values(ClientDetails).map((v, i) =>
                        (i > 20 && i <= 25) &&
                        <Stack
                            role={'group'}
                            mb={'40px'}
                            cursor={'pointer'}
                            key={i}
                            position={'relative'}
                        >
                            <Image
                                transition={'all ease 0.3s'}
                                w={'75%'}
                                filter={'grayScale(100%)'}
                                src={v.image}
                                alt={'client'}
                            />
                            <Stack
                                position={'absolute'}
                                top={'-10px'}
                                left={i == 25 ? '-90px' :'-10px'}
                                bgColor={'white.100'}
                                borderRadius={12}
                                boxShadow={'0px 0px 35px -5px #adadad'}
                                py={4}
                                px={8}
                                w={'400px'}
                                transition={'all ease 0.3s'}
                                opacity={0}
                                zIndex={10}
                                _groupHover={{
                                    opacity: 1
                                }}
                            >
                                <Box
                                    width={'350px'}
                                >
                                    <Image
                                        w={'40%'}
                                        objectFit={'cover'}
                                        src={v.image}
                                        alt={'client'}
                                    />
                                </Box>
                                <Text
                                    fontSize={'13px'}
                                >
                                    {v.label}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                {
                    Object.values(ClientDetails).map((v, i) =>
                        (i > 25 && i <= 29) &&
                        <Stack
                            role={'group'}
                            mb={'40px'}
                            cursor={'pointer'}
                            key={i}
                            position={'relative'}
                        >
                            <Image
                                transition={'all ease 0.3s'}
                                w={'75%'}
                                filter={'grayScale(100%)'}
                                src={v.image}
                                alt={'client'}
                            />
                            <Stack
                                position={'absolute'}
                                top={'-10px'}
                                left={i === 29 ? '-90px' :'-10px'}
                                bgColor={'white.100'}
                                borderRadius={12}
                                boxShadow={'0px 0px 35px -5px #adadad'}
                                py={4}
                                px={8}
                                w={'400px'}
                                transition={'all ease 0.3s'}
                                opacity={0}
                                zIndex={10}
                                _groupHover={{
                                    opacity: 1
                                }}
                            >
                                <Box
                                    width={'350px'}
                                >
                                    <Image
                                        w={'40%'}
                                        objectFit={'cover'}
                                        src={v.image}
                                        alt={'client'}
                                    />
                                </Box>
                                <Text
                                    fontSize={'13px'}
                                >
                                    {v.label}
                                </Text>
                            </Stack>
                        </Stack>
                    )
                }
            </Stack>

        </Stack>
    )
}
