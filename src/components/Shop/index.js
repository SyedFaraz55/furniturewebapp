import React from 'react';
import { Heading,Container,Text,Box,Divider, Flex,Select} from '@chakra-ui/react';

const Shop  = ()=> {
    return (
        <>
        <Box>
            <Divider />
            <Container centerContent padding={2} >
                <Heading as="h2">Crafft Shop</Heading>
            </Container>
            <Divider />
        </Box>
        <Box>
            <Flex padding={3} alignItems="center" >
                <Text>Filter By</Text>
                <Select width={200} ml={3} >
                    <option>Beds</option>
                    <option>Diwan</option>
                    <option>Dressing Tables</option>
                    <option>6 Seater sofa</option>
                    <option>5 Seater sofa</option>
                    <option>Dining Tables</option>
                    <option>Office Desk</option>
                    <option>Tables & Chairs</option>
                    <option>L Shape sofa sets</option>
                </Select>
            </Flex>
            <Divider />
        </Box>
        </>
    )
}

export default Shop;