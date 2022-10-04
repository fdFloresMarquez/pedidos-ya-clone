import { Box, Center, Container, Divider, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import datafiscalar from '/assets/data_fiscal_ar.png'

export const Footer = () => {
    return (
        <Box backgroundColor='brand.800'>
            <Container maxW='container.lg' mt='20px' color='white'>

                <Stack direction='row' justifyContent='space-between' width='100%' fontWeight='500' fontSize='12px'>

                    <Stack direction='column'>
                        <Link>Quiénes somos</Link>
                        <Link>Términos y Condiciones</Link>
                        <Link>Privacidad</Link>
                        <Link>Sé parte de PedidosYa</Link>
                        <Link>Blog</Link>
                    </Stack>

                    <Stack direction='column'>
                        <Link>Top comidas</Link>
                        <Link>Top cadenas</Link>
                        <Link>Top ciudades</Link>
                    </Stack>

                    <Stack direction='column'>
                        <Link>Registra tu negocio</Link>
                        <Link>Centro de Socios</Link>
                    </Stack>

                    <Stack direction='column'>
                        <Link>Acuerdos corporativos</Link>
                    </Stack>
                </Stack>

                <Center height='50px'>
                    <Divider border={'1px'} borderRadius='6px' borderColor='white' />
                </Center>

                <Stack direction='column'>
                    
                    <Stack direction='row' fontWeight='500' fontSize='12px'>
                        <Text>¿Te arrepentiste de una compra?</Text>
                        <Link><Text as='u'>Botón de arrepentimiento</Text></Link>
                    </Stack>

                    <Stack direction='row' fontWeight='500' fontSize='12px'>
                        <Text>Defensa de las y los Consumidores. Para reclamos </Text>
                        <Link><Text as='u'>ingresá acá</Text></Link>
                    </Stack>

                    <Stack direction='row' fontWeight='500' fontSize='12px'>
                        <Text>Ley Nº 24.240 de Defensa del Consumidor.</Text>
                        <Link><Text as='u'>Ver contratos de adhesión</Text></Link>
                    </Stack>
                </Stack>

                <Center height='50px'>
                    <Divider border={'1px'} borderRadius='6px' borderColor='white' />
                </Center>
                
                <Flex direction='row' justifyContent='space-between' alignContent='center' mb='30px'>

                    <Stack direction='column'>
                        
                        <Stack direction='row' fontWeight='500' fontSize='12px'>
                            <Text>PEDIDOSYA S.A. CUIT: 30-71198576-6 | Av. del Libertador 7208, piso 20, Ciudad Autónoma de Buenos Aires |</Text>
                            <Link><Text as='u'>contacto@pedidosya.com.ar</Text></Link>
                        </Stack>

                        <Text fontWeight='500' fontSize='12px'>PAGOS YA S.A. es un proveedor de servicios de pago y no está autorizado por el BCRA para operar como entidad financiera. </Text>
                    
                        <Text as='b' fontSize='11px'>PedidosYa &copy; 2010-2022</Text>
                        
                    </Stack>

                    <Image display={{ base:'none', md:'block'}} src={datafiscalar} />
                </Flex>

                <Image display={{ base:'block', md:'none'}} src={datafiscalar} mt={-3} pb={3}/>

            </Container>
        </Box>
    )
}
