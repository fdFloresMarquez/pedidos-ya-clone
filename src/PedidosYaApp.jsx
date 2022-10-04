
import { Stack } from '@chakra-ui/react';
import Swal from 'sweetalert2';

import { BodySection, Footer, NavBar, SearchSection } from './components';


export const PedidosYaApp = () => {

  Swal.fire(
    'Atencion!',
    'Este sitio web es un <b>clon</b> utilizado como demostración de front-end, no debe ser tomado como la página real de pedidos-ya',
    'info'
  )

  return (
    <Stack spacing='0'>
      
      <NavBar />

      <SearchSection />
      
      <BodySection />

      <Footer />
      
    </Stack>
  )
}
