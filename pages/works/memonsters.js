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
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Memonsters <Badge>2021</Badge>
      </Title>
      <P>Memonsters es un juego de aventuras de 16 bits, basado en los antiguos Pokemon Rojo y Pokemon Azul. Blitz es un adolescente cuyo sueño es conquistar todos los memonsters de su pueblo y convertirse en el gran maestro de los memonsters, ¡ayúdale en su aventura y consíguelos todos! ¿Serás capaz de conseguir los 3 memonsters legendarios?</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFML</span>
        </ListItem>
        <ListItem>
          <Meta>Sourse</Meta>
          <Link target="_blank" href="https://github.com/thiagosequeira/memonsters/tree/Devs">
            https://github.com/thiagosequeira/memonsters/tree/Devs{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/memonsters_01.png" alt="memonsters" />
        <WorkImage src="/images/works/memonsters_02.png" alt="memonsters" />
      </SimpleGrid>
      <WorkImage src="/images/works/memonsters_03.jpg" alt="memonsters" />
    </Container>
  </Layout>
)

export default Work
