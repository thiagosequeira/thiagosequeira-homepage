import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOnlydark from '../public/images/works/onlydark.png'
import thumbIntegrar from '../public/images/works/integrar.png'
import thumbJAR from '../public/images/works/jar.png'
import thumbMemonsters from '../public/images/works/memonsters.png'
import thumbChromeHungry from '../public/images/works/chrome-hungry.png'
/* import thumbPasswordGenerator from '../public/images/works/password-generator.png'
import thumbRickMorty from '../public/images/works/rick-morty.png' */
import thumbCollege from '../public/images/works/college.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="onlydark" title="Only Dark" thumbnail={thumbOnlydark}>
          Only Dark is a color scheme, customized user interface theme for Visual Studio Code
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="integrar"
            title="Integrar"
            thumbnail={thumbIntegrar}
          >
            Website for a telecommunications company
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="jar"
            title="Jornadas Argentinas de Robótica (JAR)"
            thumbnail={thumbJAR}
          >
            Website for the argentinian robotics conference
          </WorkGridItem>
        </Section>
      </SimpleGrid>

       <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experiments
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="memonsters"
            thumbnail={thumbMemonsters}
            title="Memonsters"
          >
            Final project for the computer science II course, computer engineering
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="chromehungry" thumbnail={thumbChromeHungry} title="Chrome Hungry">
            Project idea for the computer science II course
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbPasswordGenerator} title="Password Generator">
            Password generator website 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbRickMorty} title="Rick and Morty API">
            Website of the famous Rick and Morty series. Using their respective API
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Extras
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="college" thumbnail={thumbCollege} title="College exercises">
          Exercises of the subject computer science I and II
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
