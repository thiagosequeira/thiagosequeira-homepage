import { Container, Badge, Link, List, ListItem, Heading, Center} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Only Dark">
    <Container>
      <Title>
        Only Dark <Badge>2021-</Badge>
      </Title>
      <P>
      Only Dark es un esquema de colores, tema de interfaz de usuario personalizado para Visual Studio Code. Ha sido diseñado por el autor de los colores originales de Only Dark. Los tonos de colores cuidadosamente seleccionados son la base de una interfaz de usuario sin concesiones y sin distracciones. El único objetivo de Only Dark es permitirle centrarse en su código.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Descargar</Meta>
          <Link href="https://marketplace.visualstudio.com/items?itemName=only-dark.only-dark">
            Descargar Only Dark <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/onlydark_01.png" alt="onlydark" />
    </Container>
  </Layout>
)

export default Work
