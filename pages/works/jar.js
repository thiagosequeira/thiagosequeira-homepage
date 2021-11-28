import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="JAR">
    <Container>
      <Title>
        Jornadas Argentinas de Robótica (JAR) <Badge>2021</Badge>
      </Title>
      <P>
      The JAR offers a meeting place for the community of Argentine and regional researchers whose interest and dedication are oriented to robotics and related topics, favoring horizontal exchange between research groups, sharing experiences and enriching solutions to problems of common interest.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jar.com.ar">
            https://jar.com.ar <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/jar_01.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
