import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Chrome Hungry">
    <Container>
      <Title>
        Chrome Hungry <Badge>2021</Badge>
      </Title>
      <P>
      Chrome Hungry es un juego de lluvia de objetos, donde entras en el cuerpo de google chrome y tienes que sobrevivir comiendo RAMs.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFMl</span>
        </ListItem>
        <ListItem>
          <Meta>Sourse</Meta>
          <Link target="_blank" href="https://github.com/thiagosequeira/chrome-hungry">
            https://github.com/thiagosequeira/chrome-hungry <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/chromehungry_01.png" alt="STYLY" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/chromehungry_02.png" alt="chromehungry" />
        <WorkImage src="/images/works/chromehungry_03.png" alt="chromehungry" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
