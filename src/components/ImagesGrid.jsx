import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import { getImages } from '../getImages'

export const ImagesGrid = () => {

    const images = getImages;

    return (
        <Grid templateColumns={{ base: 'repeat(3, 1fr)', md:'repeat(9, 1fr)', lg: 'repeat(11, 1fr)'}} gap={{ base: 5,  md: 2, lg: 0}} >
            {
                images.map((image, i) => {
                    return (
                        <GridItem key={i}>
                            <Box backgroundColor='white' width='80px'>
                                <Image
                                    alt={`image ${i}`}
                                    objectFit='inherit'
                                    src={image}
                                />
                            </Box>
                        </GridItem>
                    )
                })
            }
        </Grid>
    )
}
