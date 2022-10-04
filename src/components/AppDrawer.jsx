import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
    Image,
    Stack,
    Text,
    Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import home from '/assets/home.png';
import user from '/assets/user.png';
import headphones from '/assets/headphones.png';
import enter from '/assets/enter.png';

export const AppDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                backgroundColor='white'
                display={{ base: 'flex', lg: 'none' }}
                ml='5'
                mr='auto'
                onClick={onOpen}
            >
                <HamburgerIcon boxSize={{ base: '16px', md:'23px'}}/>
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={'left'}
                size='xs'
            >
                <DrawerOverlay display={{ base: 'flex', lg: 'none' }} />
                <DrawerContent display={{ base: 'flex', lg: 'none' }}>
                    <DrawerHeader mt='3'>
                        <Stack alignItems={'center'} >
                            <Image
                                borderRadius='full'
                                boxSize={{ base: '86.3px', md:'96px',}}
                                src={user}
                                alt='user'
                            />
                            <Text as='b' fontSize='24px' textAlign='center'>
                                ¡Qué bueno tenerte acá!
                            </Text>
                        </Stack>
                    </DrawerHeader>
                    <DrawerBody>
                        <Link>
                            <Stack direction='row' alignItems={'center'}>
                                    <Image 
                                        alt='icono' 
                                        boxSize={6} 
                                        mr={1} 
                                        src={home} 
                                    />
                                    <Text fontWeight='medium'>Inicio</Text>
                            </Stack>
                        </Link>
                        <Link>
                            <Stack 
                                alignItems={'center'} 
                                direction='row' 
                                mt='5'
                            >
                                    <Image src={headphones} mr={1} alt='icono' boxSize={6} />
                                    <Text fontWeight='medium'>Ayuda en línea</Text>
                            </Stack>
                        </Link>
                    </DrawerBody>
                    
                    <DrawerFooter>
                        <Link mr='auto'>
                            <Stack 
                                direction='row'
                                mb='4'
                                
                            >   
                                    <Image src={enter} mr={1} alt='icono' boxSize={6} />
                                    <Text fontWeight='medium'>Registrarse / Iniciar Sesión</Text>
                            </Stack>
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
