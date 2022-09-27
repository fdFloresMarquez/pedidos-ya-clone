import { Box, Icon, Image, Stack, Text } from '@chakra-ui/react'
import store from '/assets/store.png'

export const CustomButton = () => {
    return (
        <Box
            as='button'
            alignItems='center'
            alignSelf={'fstart'}
            bg='#eae3e3'
            borderColor='#ccd0d5'
            borderRadius='50px'
            color='#100419'
            display='flex'
            fontSize='12px'
            fontWeight='800'
            justifyContent='center'
            lineHeight='1.5'
            padding=''
            position='relative'
            p='6px 16px'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            _hover={{ bg: '#ebedf0' }}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
        >
            
            <Image src={store} mr={2} alt='icono' boxSize={4} />
            <Text>Registrá tu negocio</Text>

        </Box>
    )
}
