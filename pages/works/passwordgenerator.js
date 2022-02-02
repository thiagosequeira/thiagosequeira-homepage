import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="passwordgenerator">
    <Container>
      <Title>
        Password Generator <Badge>2021</Badge>
      </Title>
      <P>
        Generador de Contraseñas con Javascript
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link target="_blank" href="https://thiagosequeira.github.io/passwordGenerator/">
            https://thiagosequeira.github.io/passwordGenerator/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/password-generator.png" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
