import { Box, Button, Container, Heading, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import { useState, useRef } from 'react'
import ContactFields from './ContactFields'
import BackPic from '../../../assets/images/milestoneBg.jpg'
import { POST } from '../../../utilities/ApiProvider';

export default function CareersSec() {

    const toast = useToast();
    const [isLoading, setisLoading] = useState(false);
    const ResumeInput = useRef(null);
    const [Fields, setFields] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        company: '',
        role: '',
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
                Fields.resume === null || Fields.resume === undefined || Fields.resume === ""
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

            formData.append("action", 'CAREERS');
            formData.append('name', Fields.name);
            formData.append('city', Fields.city);
            formData.append('email', Fields.email);
            formData.append('phone', Fields.phone);
            formData.append('company', Fields.company);
            formData.append('role', Fields.role);
            formData.append('message', Fields.message);
            formData.append('pdf', Fields.resume);

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
            mt={'-10px !important'}
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
                        >Join Our<Text color={'primaryOrange.100'} as={'span'}> Team</Text></Heading>
                        <Text fontSize={{ base: '14px', md: '18px' }} fontWeight={500} pb={4}>Innovative Network seeks professionals who thrive on new challenges and strive for fun. Our employees have the unique opportunity of not only helping solve challenges for our clients, but also to help define Innovative Networks’ growth and direction</Text>
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
                            value={Fields.name}
                            setFields={name => setFields({ ...Fields, name })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'City'}
                            value={Fields.city}
                            setFields={city => setFields({ ...Fields, city })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Email'}
                            value={Fields.email}
                            setFields={email => setFields({ ...Fields, email })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Phone'}
                            value={Fields.phone}
                            setFields={phone => setFields({ ...Fields, phone })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Company'}
                            value={Fields.company}
                            setFields={company => setFields({ ...Fields, company })}
                        />
                        <ContactFields
                            type={'text'}
                            placeholder={'Role'}
                            value={Fields.role}
                            setFields={role => setFields({ ...Fields, role })}
                        />
                        <Input
                            accept='application/pdf'
                            onChange={(e) => setFields({ ...Fields, resume: e.target.files[0] })}
                            ref={ResumeInput}
                            type={'file'}
                            display={'none'}
                        />
                        <Box
                            border={'2px solid'}
                            borderColor={'primaryBlue.100'}
                            borderRadius={6}
                            w={'100%'}
                            py={'1'}
                            cursor={'pointer'}
                            onClick={() => ResumeInput.current.click()}
                            role={'group'}
                        >
                            <Button
                                bgColor={'primaryBlue.100'}
                                color={'white.100'}
                                fontWeight={{ base: 400, md: 500 }}
                                marginLeft={'5px'}
                                border={'2px solid'}
                                borderColor={'primaryBlue.100'}
                                _groupHover={{
                                    bgColor: 'transparent',
                                    color: 'primaryBlue.100'
                                }}
                            >Choose File:</Button>
                            <Text as={'span'} fontSize={{ base: "11px", lg: "13px" }}>{Fields.resume?.name}</Text>
                        </Box>
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
