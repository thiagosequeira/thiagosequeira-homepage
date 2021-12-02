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
  <Layout title="Integrar">
    <Container>
      <Title>
        integrar <Badge>2020-now</Badge>
      </Title>
      <P>
      Integrar es una empresa nacional de telecomunicaciones. Me he incorporado a la empresa como Community Manager para aumentar el feedback con los clientes. Actualmente también estoy trabajando como desarrollador frontend, actualizando constantemente el sitio web.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>web, social media</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://integrar.com.ar">
            https://integrar.com.ar{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Social media</Meta>
          <Link href="https://instagram.com/integrar.srl">
            https://instagram.com/integrar.srl{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Community Management</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/integrar_02.jpg" alt="integrar" />
        <WorkImage src="/images/works/integrar_01.jpg" alt="integrar" />
      </SimpleGrid>
      <WorkImage src="/images/works/integrar_03.png" alt="integrar" />
    </Container>
  </Layout>
)

export default Work
