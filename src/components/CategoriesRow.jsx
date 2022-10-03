import { Center, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'

export const CategoriesRow = ({ icon, heading, sections}) => {

    return (
        <Stack direction='row' alignItems='center' key={heading}>
           
            <Image src={icon} alt='location' mr={9}/>

            <Stack direction='column'>
                <Heading as='h2' fontSize='1em' mb={3}>Top {heading}</Heading>
                <Text fontSize='15px' fontWeight='600'>
                    { sections.map( section => {
                        const { title, anchor } = section;
                        return <Link key={title} href={anchor}>{title}, </Link>
                    })}
                </Text>
            </Stack>
        </Stack>
    )
}
