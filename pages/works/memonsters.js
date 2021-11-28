import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Memonsters <Badge>2021</Badge>
      </Title>
      <P>Memonsters is a 16-bit adventure game, based on the old Pokemon Red and Pokemon Blue. Blitz is a teenager whose dream is to conquer all the memonsters in his village and become the grand master of the memonsters, help him in his adventure and get them all! Will you be able to get all 3 legendary memonsters?</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFML</span>
        </ListItem>
        <ListItem>
          <Meta>Sourse</Meta>
          <Link href="https://github.com/thiagosequeira/memonsters/tree/Devs">
            https://github.com/thiagosequeira/memonsters/tree/Devs{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/memonsters_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/memonsters_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/memonsters_03.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
