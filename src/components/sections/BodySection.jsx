import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { CategoriesRow } from '../CategoriesRow'
import { ciudades, barrios, comidas } from '../../data/categories'
import { ImagesGrid } from '../ImagesGrid'

const categories = [ ciudades, barrios, comidas]

export const BodySection = () => {
  return (
    <Box backgroundColor='background.800' >
      <Container maxW='container.lg' mt='50px'>
        <Heading as='h2' fontSize='1.2em' mb={5}>Los mejores restaurantes</Heading>
        
        <ImagesGrid />
        
        <Stack direction='column' mt={{ base: '2em',md:'5em'}} spacing={3}>
          <Heading as='h2' fontSize='1.2em' >Delivery que satisface tus sentidos</Heading>
          <Text fontSize='15px'>¿Con Hambre y Nada te Copa? Acá tu Comida Sabrosa, Hoy Puede Tener otro Gusto. PedidosYa, Te Llena el Corazón</Text>
        </Stack>

        {/* Sección beneficios */}
        <Stack direction='column' mt='5em' mb={12} spacing={12}>
          { categories.map( category => <CategoriesRow key={category.heading} {...category} />)}
        </Stack>

      </Container>
    </Box>
  )
}
