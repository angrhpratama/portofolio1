import { Card, CardBody, Center, Heading, Image, Text } from "@chakra-ui/react"


function About() {
    return (
        <form>
            <Center>

                <Card maxW='sm' mt='18'>
                    <CardBody>
                        <Image
                            src='https://res.cloudinary.com/dhioc6nup/image/upload/v1709866255/porto/qr7exkdzp8yvmcpfieqd.jpg'
                            alt='Photo'
                            borderRadius='lg'
                        />
                        <Heading
                            size='md'
                            textAlign='center'
                            color='blue.800'>
                            Anugrah Pratama
                        </Heading>
                        <Text mt='1'>
                            I am Anugrah Pratama, a person who like to learn web development.
                            Now i am a student at Purwadhika digital technology school where
                            i can deep dive to learn fullstack web development.
                        </Text>
                    </CardBody>
                </Card>
            </Center>
        </form>
    )
}

export default About