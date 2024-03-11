import { Box, Button, Flex, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"




function Header() {

    return (
        <Box
            bg='blue.700'
            w='100%'
            p={5}
            color='white'
            textAlign="center"
        >

            <Flex alignItems='center' gap='35px'>
                <HStack>
                    <Link to="/">
                    <Button color='blue.800'>
                        Home
                    </Button>
                    </Link>
                    <Link to="/about">
                    <Button color='blue.800'>
                        About Me
                    </Button>
                    </Link>
                    <Link to="/contactMe">
                    <Button color='blue.800'>
                        Contact Me
                    </Button>
                    </Link>
                </HStack>
                HI, WELCOME
            </Flex>
            {/* <MenuButton as={Button} colorScheme='pink' /> */}
        </Box>
    )
}

export default Header