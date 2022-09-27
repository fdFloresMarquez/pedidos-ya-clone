import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Container, Image, Stack } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'
import { CustomButton } from './components';
import logo from '/assets/logo.svg'
import user from '/assets/user.png'

export const PedidosYaApp = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack>
      <Box backgroundColor={'white'} boxShadow={'md'} paddingY={4}>
        <Container maxWidth='container.xl' paddingX={0}>
          <Stack direction='row' justifyContent='space-between'>
            <Image src={logo} />
            <Stack direction='row' alignItems='center'>
              <CustomButton />

              <Menu isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen}
                  onMouseLeave={onClose} >
                  <Stack direction='row' alignItems='center' pl={4}>
                    <Image
                      borderRadius='full'
                      boxSize='32px'
                      src={user}
                      alt='Dan Abramov'
                    />
                    <ChevronDownIcon w={5} h={5} />
                  </Stack>
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem>Ayuda en línea</MenuItem>
                  <MenuItem>Ingresar/Registrarse</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  )
}
