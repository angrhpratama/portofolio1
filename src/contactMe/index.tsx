import { Card, CardBody, Center, Heading, Image, Text } from '@chakra-ui/react'


function Contact() {
    return (
        <form>
            <Center>

                <Card maxW='sm' mt='10%'>
                    <CardBody>
                        <Image
                            src='https://res.cloudinary.com/dhioc6nup/image/upload/v1709872379/porto/e4simjthvjnozzeefqrk.png'
                            alt='Gmail Icon Picture'
                            borderRadius='lg'

                        />
                        <Heading mt='2' size='lg' fontSize='25px' textAlign='center'>
                            Email:
                        </Heading>
                        <Text textAlign='center' mt= '5'>
                            angrhpratama0@gmail.com
                        </Text>
                    </CardBody>
                </Card>
            </Center>
        </form>
    )
}

export default Contact