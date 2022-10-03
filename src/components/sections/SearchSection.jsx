import { Box, Heading, Image, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import location from '/assets/location.png'

export const SearchSection = () => {
    return (
        <Box
            backgroundImage="url('https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            height={'calc(100vh - 69px)'}
        >
            <Stack direction="column" alignItems="center" justifyContent="center" height={'calc(100vh - 69px)'}>

                <Heading color="white" fontSize="40px" fontWeight="bold">¡Pedí lo que quieras!</Heading>
                <Text color="white">Restaurantes, mercados, farmacias, kioscos, y mucho más.</Text>

                <Stack direction="column" alignItems="start" width='60%'>
                    <Heading color="white" fontSize='xl' mt='32px' mb={3}>Veamos que tenés cerca</Heading>

                    <InputGroup 
                        size='lg' 
                        backgroundColor='white' 
                        width='100%' 
                        boxSizing='border-box' 
                        borderRadius='99'
                    >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Image src={location} mr={2} alt='location' boxSize={4} />}
                        />
                        <Input size='lg' placeholder='Dirección o punto de referencia' borderRadius="99"/>
                    </InputGroup>
                </Stack>
            </Stack>
        </Box>
    )
}
