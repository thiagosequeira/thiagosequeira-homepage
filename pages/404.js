import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Algo salió mal!</Heading>
      <Text>La pagina que estás buscando no ha sido encontrada, por favor revisa que la URL sea la correcta.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Volver a inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
