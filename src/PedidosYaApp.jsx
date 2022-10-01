
import { Stack } from '@chakra-ui/react';

import { BodySection, NavBar, SearchSection } from './components';


export const PedidosYaApp = () => {

  return (
    <Stack spacing='0'>

      <NavBar />

      <SearchSection />
      
      <BodySection />
      
    </Stack>
  )
}
