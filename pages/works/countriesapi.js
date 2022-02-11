import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  UnorderedList,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="REST countries API">
    <Container>
      <Title>
        REST countries API <Badge>2022</Badge>
      </Title>
      <P>
        This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Challenge</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>See all countries from the API on the homepage.</ListItem>
        <ListItem>Search for a country using an input field.</ListItem>
        <ListItem>Filter countries by region.</ListItem>
        <ListItem>Click on a country to see more detailed information on a separate page.</ListItem>
        <ListItem>Click through to the border countries on the detail page.</ListItem>
        <ListItem>Toggle the color scheme between light and dark mode.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SASS, React, React Router</span>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link target="_blank" href="https://github.com/thiagosequeira/rest-countries-api">
            https://github.com/thiagosequeira/rest-countries-api <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/countries.jpg" alt="freeDBTagger" />
      <WorkImage src="/images/works/countries_01.png" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
