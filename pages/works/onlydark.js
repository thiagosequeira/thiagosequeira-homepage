import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Only Dark">
    <Container>
      <Title>
        Only Dark <Badge>2021-</Badge>
      </Title>
      <P>
      Only Dark is a color scheme, customized user interface theme for Visual Studio Code. 
      It has been designed by the author of the original Only Dark colors. 
      Carefully selected shades of colors are the foundation of an uncompromising, 
      non-distractive user interface. The single goal of Only Dark is to let you focus on your code.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://marketplace.visualstudio.com/items?itemName=only-dark.only-dark">
            Only Dark Download <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Term</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/onlydark_01.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
