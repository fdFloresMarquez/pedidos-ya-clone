import { Box, Image } from '@chakra-ui/react'
import { getImages } from '../getImages'

export const ImagesRow = () => {

    const images = getImages;

    return (
        <>
            {
                images.map((image, i ) => {
                    return (
                        <Box backgroundColor="white" boxSize='80px' key={i}>
                            <Image
                                alt={`image ${i}`}
                                objectFit='contain'
                                src={image}
                            />
                        </Box>
                    )

                })
            }
        </>
    )
}
