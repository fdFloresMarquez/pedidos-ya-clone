import { Box, Heading, Image, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import location from '/assets/location.png'

export const SearchSection = () => {
    return (
        <Box
            backgroundImage={{
                base:'none',
                lg: "url('https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345')",
            }}
            backgroundColor='background.800'
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"  
        >
            <Stack 
                alignItems="center" 
                direction="column" 
                height={{ base: '25vh', md: '20vh', lg: 'calc(100vh - 69px)'}}
                justifyContent="center" 
            >
                
                {/* Texto en pantallas sm y medium */}
                <Heading 
                    color='black' 
                    display={{ base: 'block', lg:'none'}}
                    fontSize='24px' 
                    fontWeight='medium'
                    pt='3'
                >
                    Delivery de comida online
                </Heading>
                <Text color='black' textAlign='center' display={{ base: 'block', lg:'none'}}>
                    Más de 10.000 restaurantes con delivery en Argentina
                </Text>

                {/* Texto en pantallas Large */}
                <Heading 
                    color='white' 
                    display={{ base: 'none', lg:'block'}}
                    fontSize='40px' 
                    fontWeight='bold'
                >
                    ¡Pedí lo que quieras!
                </Heading>
                <Text color='white' display={{ base: 'none', lg:'block'}}>
                    Restaurantes, mercados, farmacias, kioscos, y mucho más.
                </Text>

                <Stack 
                    alignItems='start' 
                    direction='column' 
                    width={{ base: '80%', md: '60%', lg:'60%'}}
                >
                    <Heading 
                        display={{ base: 'none', lg:'block'}}
                        color='white' 
                        fontSize='xl' 
                        mt='32px' 
                        mb={3}
                    >
                        Veamos que tenés cerca
                    </Heading>

                    {/* No funcionan bien los valores responsive en input group con chackra, decidí hacer un display condicional con 2 componentes */}
                    <InputGroup 
                        backgroundColor='white' 
                        borderRadius='99'
                        boxSizing='border-box' 
                        display = {{ base: 'none', md: 'block'}}
                        size='lg'
                    >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Image src={location} mr={2} alt='location' boxSize={4} />}
                        />
                        
                        <Input size='lg'  placeholder='Dirección o punto de referencia' borderRadius='99'/>

                    </InputGroup>

                    <InputGroup 
                        backgroundColor='white' 
                        borderRadius='99'
                        boxSizing='border-box' 
                        display = {{ base: 'block', md: 'none'}}
                        size='md'
                    >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Image src={location} ml={1} alt='location' boxSize={4} />}
                        />
                        
                        <Input size='md'  placeholder='Dirección o punto de referencia' borderRadius='99'/>
                    </InputGroup>
                </Stack>
            </Stack>
        </Box>
    )
}
