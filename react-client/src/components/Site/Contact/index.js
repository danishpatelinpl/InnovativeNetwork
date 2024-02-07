import { Box, Button, Container, Heading, Input, Spinner, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import ContactFields from './ContactFields'
import BackPic from '../../../assets/images/milestoneBg.jpg'
import { POST } from '../../../utilities/ApiProvider';

export default function ContactSec() {

    const toast = useToast();
    const [isLoading, setisLoading] = useState(false);
    const [Fields, setFields] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        message: ''
    });

    const submitForm = async () => {
        try {
            setisLoading(true);
            const formData = new FormData();
            
            if(
                Fields.name === '' && 
                Fields.city === '' &&
                Fields.email === '' &&
                Fields.phone === '' &&
                Fields.company === '' &&
                Fields.role === '' &&
                Fields.message === ''
            ) {
                toast({
                    status: "error",
                    title: "Please fill in all the fields to proceed further.",
                    duration: 7000,
                    isClosable: true,
                    position: 'bottom-left'
                });
                setisLoading(false);
                return;
            }

            formData.append("action", 'CONTACT');
            formData.append('name', Fields.name);
            formData.append('city', Fields.city);
            formData.append('email', Fields.email);
            formData.append('phone', Fields.phone);
            formData.append('company', Fields.company);
            formData.append('role', Fields.role);
            formData.append('message', Fields.message);

            let response = await POST('/mailtest/emailer.php', formData,
                {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            );

            toast({
                description: response.message,
                status: response.status,
                isClosable: true,
                position: 'bottom-left',
                duration: 2500
            });

            setFields({
                name: '',
                city: '',
                email: '',
                phone: '',
                company: '',
                role: '',
                message: ''
            });

            setisLoading(false);
        } catch (err) {
            toast({
                description: 'Something went wrong!',
                status: 'error',
                isClosable: true,
                position: 'bottom-left',
                duration: 2500
            });
        }
    }

    return (
        <Stack
            py={20}
            bgImage={BackPic}
            bgSize={'cover'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgAttachment={'fixed'}
        >
            <Container maxW={{ lg: '6xl', '2xl': '6xl' }}>
                <Stack>
                    <Box
                        textAlign={'center'}
                    >
                        <Heading
                            fontSize={{ base: '32px', md: '48px' }}
                            pb={4}
                        >Let's <Text color={'primaryOrange.100'} as={'span'}>Talk</Text> About</Heading>
                        <Text fontSize={{ base: '14px', md: '18px' }} fontWeight={500} pb={4}>Do you have any questions? Requests? Ideas? Or maybe you simply want to chat with us to get to know us better? Whatever the reason, everything you need to contact us :)</Text>
                    </Box>
                    <Box
                        display={'flex'}
                        flexWrap={'wrap'}
                        gap={5}
                        justifyContent={'space-between'}
                    >
                        <ContactFields
                            type={'text'}
                            placeholder={'Name'}
                            name={'name'}
                            value={Fields.name}
                            setFields={name => setFields({ ...Fields, name })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'City'}
                            name={'city'}
                            value={Fields.city}
                            setFields={city => setFields({ ...Fields, city })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Email'}
                            name={'email'}
                            value={Fields.email}
                            setFields={email => setFields({ ...Fields, email })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Phone'}
                            name={'phone'}
                            value={Fields.phone}
                            setFields={phone => setFields({ ...Fields, phone })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Company'}
                            name={'company'}
                            value={Fields.company}
                            setFields={company => setFields({ ...Fields, company })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Role'}
                            name={'role'}
                            value={Fields.role}
                            setFields={role => setFields({ ...Fields, role })}
                        />
                        <Textarea
                            py={'4'}
                            height={'100px'}
                            placeholder={'Message'}
                            name={'message'}
                            value={Fields.message}
                            onChange={(e) => setFields({ ...Fields, message: e.target.value })}
                            fontSize={'14px'}
                            border={'2px solid'}
                            fontWeight={500}
                            borderColor={'primaryBlue.100'}
                            resize={'none'}
                            _focus={{
                                borderColor: 'primaryOrange.100',
                                outline: 'none'
                            }}
                            _hover={{
                                borderColor: 'primaryBlue.100'
                            }}
                        >
                        </Textarea>
                        <Box
                            textAlign={'center'}
                            w={'100%'}
                        >
                            <Button
                                onClick={() => submitForm()}
                                bgColor={'primaryOrange.100'}
                                color={'white.100'}
                                borderRadius={6}
                                px={'120px'}
                                py={6}
                                fontSize={'18px'}
                                border={'2px solid'}
                                borderColor={'primaryOrange.100'}
                                _hover={{
                                    bgColor: 'transparent',
                                    color: 'primaryOrange.100'
                                }}
                                isLoading={isLoading}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    )
}
