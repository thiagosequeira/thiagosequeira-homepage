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
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Rick and Morty">
    <Container>
      <Title>
        Rick and Morty API <Badge>2021</Badge>
      </Title>
      <P>Website de la famosa serie Rick and Morty. Utilizando su respectiva API</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Webpack, SASS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link target="_blank" href="https://thiagorickandmorty.netlify.app/">
            https://thiagorickandmorty.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/rick-morty_01.png" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
