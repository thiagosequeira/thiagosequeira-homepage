import {
  Container,
  Badge,
  Link,
  List,
  Heading,
  Center,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Social Media Dashboard">
    <Container>
      <Title>
        Social Media Dashboard <Badge>2022</Badge>
      </Title>
      <P>
      Este proyecto es la solución al reto Social media dashboard with
       theme switcher publicado por Frontend Mentor, 
       con el fin de mostrar mis habilidades como Desarrollador Web.
      </P>
      <UnorderedList my={4}>
        <ListItem>Sitio realizado con la metodología Mobile First.</ListItem>
        <ListItem>Sitio adaptable a diferentes tamaños de pantalla (responsive web design).</ListItem>
        <ListItem>Los estilos están definidos en archivos .scss que posteriormente son compilados a css por medio de la herramienta Koala App.</ListItem>
        <ListItem>Aplicación de la metodología BEM (Block, Element, Modifier).</ListItem>
        <ListItem>Sitio con modo oscuro, el cuál responde al tema por defecto del sistema y a su vez almacena la elección del usuario.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Javascript, SASS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link target="_blank" href="https://thiagosequeira.github.io/Social-Media-Dashboard/">
            https://thiagosequeira.github.io/Social-Media-Dashboard/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/socialmedia.jpg" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
