import { Input } from '@chakra-ui/react'

export default function ContactFields({ type, placeholder, value, setFields, name }) {
    return (
        <Input
            w={placeholder !== 'Message' ? {base: '100%', md: '48.5%'} : '100%'}
            py={'6'}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFields(e.target.value)}
            fontSize={'14px'}
            border={'2px solid'}
            fontWeight={500}
            borderColor={'primaryBlue.100'}
            name={name}
            _focus={{
                borderColor: 'primaryOrange.100',
                outline: 'none'
            }}
            _hover={{
                borderColor: 'primaryBlue.100'
            }}
        />
    )
}
