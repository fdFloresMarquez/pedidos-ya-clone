
import { Stack } from '@chakra-ui/react';

import { BodySection, Footer, NavBar, SearchSection } from './components';


export const PedidosYaApp = () => {

  return (
    <Stack spacing='0'>

      <NavBar />

      <SearchSection />
      
      <BodySection />

      <Footer />
      
    </Stack>
  )
}
