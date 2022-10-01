import { Heading, Image, Stack, Text } from '@chakra-ui/react'

export const CategoriesRow = ({ icon, heading, sections}) => {

    return (
        <Stack direction='row' key={heading}>
            <Image src={icon} alt='location' />
            <Stack direction='column'>
                <Heading as='h2' fontSize='1.2em' >Top {heading}</Heading>
                <Text fontSize='15px' fontWeight='600' >
                    { sections.map( section => {
                        const { title, anchor } = section;
                        return <a key={title} href={anchor}>{title}, </a>
                    })}
                </Text>
            </Stack>
        </Stack>
    )
}
