import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Image, Stack } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'

import { CustomButton } from './CustomButton';
import logo from '/assets/logo.svg'
import user from '/assets/user.png'
import headphones from '/assets/headphones.png'
import enter from '/assets/enter.png'


export const NavBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box 
      backgroundColor={'white'} 
      boxShadow={'md'}
      paddingY={4}
      sx={{ position: 'sticky', top: '0', zIndex: '9999'}}
    >
        <Flex justifyContent='space-between' >
            <Image src={logo} ml="5%"/>
            <Flex direction='row' alignItems='center' mr="15%">
              <CustomButton />

              <Menu isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen}
                  onMouseLeave={onClose} ml="2">
                  <Stack direction='row' alignItems='center' pl={4}>
                    <Image
                      borderRadius='full'
                      boxSize='32px'
                      src={user}
                      alt='user'
                    />
                    <ChevronDownIcon w={5} h={5} />
                  </Stack>
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem><Image src={headphones} mr={2} alt='icono' boxSize={4} />Ayuda en línea</MenuItem>
                  <MenuItem><Image src={enter} mr={2} alt='icono' boxSize={4} />Ingresar/Registrarse</MenuItem>
                </MenuList>
              </Menu>
            </Flex>   
        </Flex>
      </Box>
  )
}
