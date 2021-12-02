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
      Las JAR ofrecen un espacio de encuentro para la comunidad de investigadores argentinos y regionales cuyo interés y dedicación se orientan a la robótica y temas afines, favoreciendo el intercambio horizontal entre grupos de investigación, compartiendo experiencias y enriqueciendo las soluciones a problemas de interés común.
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
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/jar_01.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
