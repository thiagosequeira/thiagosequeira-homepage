import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
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
        Chrome Hungry is an object rain game, where you enter the body of google chrome and have to survive by eating RAMs. 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, SFMl</span>
        </ListItem>
        <ListItem>
          <Meta>Sourse</Meta>
          <Link href="https://github.com/thiagosequeira/chrome-hungry">
            https://github.com/thiagosequeira/chrome-hungry <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chromehungry_01.png" alt="STYLY" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/chromehungry_02.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/chromehungry_03.png" alt="mode.tokyo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
