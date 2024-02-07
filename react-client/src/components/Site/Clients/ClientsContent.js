import { Heading, Text } from '@chakra-ui/react'

export default function ClientsContent() {
    return (
        <>
            <Heading
                color={'primaryOrange.100'}
                fontWeight={'bold'}
                fontSize={{base: '52px', md: '86px'}}
                lineHeight={'0.9'}
                data-aos={'fade-right'}
                data-aos-delay={700}
                pb={{base: '15px', md: '0px'}}
                >
                <Text
                    fontWeight={400}
                    fontSize={'28px'}
                >
                    Our
                </Text>
                <Text as={'span'}>Clients</Text></Heading>
            <Text
                data-aos={'fade-left'}
                data-aos-delay={700}
                fontWeight={600}
                fontStyle={'italic'}
                textAlign={'right'}
                fontSize={{base: '14px', md: '16px'}}
            >
                Who are inspired by us and working with <br /> us
                <Text as={'span'} color={'primaryOrange.100'}> since years.</Text>
            </Text>
        </>
    )
}
