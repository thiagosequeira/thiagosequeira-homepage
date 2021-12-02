import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="College Exercises">
    <Container>
      <Title>
        College Exercises <Badge>2021</Badge>
      </Title>
      <P>
      Ejercicios de la materia Informática I y II. Para el Instituto Universitario Aeronáutico.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C/C++</span>
        </ListItem>
        <ListItem>
          <Meta>Sourse</Meta>
          <Link href="https://github.com/thiagosequeira/college-exercises">
            https://github.com/thiagosequeira/college-exercises{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/college.png" alt="informatica" />
    </Container>
  </Layout>
)

export default Work
