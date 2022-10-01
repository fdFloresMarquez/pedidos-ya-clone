import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { CategoriesRow } from '../CategoriesRow'
import { ImagesRow } from '../ImagesRow'
import { ciudades, barrios, comidas } from '../../data/categories'

const categories = [ ciudades, barrios, comidas]

export const BodySection = () => {
  return (
    <Box backgroundColor='brand.800' height='100vh'>
      <Container maxW='container.lg' mt='50px' >
        <Heading as='h2' fontSize='1.2em' >Los mejores restaurantes</Heading>
        <Stack direction='row' mt='15px' spacing={2}>
          <ImagesRow />
        </Stack>
        
        <Stack direction='column' mt='4em'>
          <Heading as='h2' fontSize='1.2em' >Delivery que satisface tus sentidos</Heading>
          <Text fontSize='15px' >¿Con Hambre y Nada te Copa? Acá tu Comida Sabrosa, Hoy Puede Tener otro Gusto. PedidosYa, Te Llena el Corazón</Text>
        </Stack>

        {/* Sección beneficios */}
        <Stack direction='column'>
          { categories.map( category => <CategoriesRow key={category.heading} {...category} />)}
        </Stack>

        //TODO: arreglar estilos del margen y terminar el footer
      </Container>
    </Box>
  )
}
