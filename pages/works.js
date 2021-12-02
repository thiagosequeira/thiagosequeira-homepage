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
        Trabajos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="integrar"
            title="Integrar"
            thumbnail={thumbIntegrar}
          >
            Website Integrar SRL. Empresa Argentina de telecomunicaciones.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="jar"
            title="Jornadas Argentinas de Robótica (JAR)"
            thumbnail={thumbJAR}
          >
            Website Jornadas Argentinas de Robótica. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

       <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Proyectos
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="onlydark" title="Only Dark" thumbnail={thumbOnlydark}>
          Only Dark es un esquema de colores, tema de interfaz de usuario personalizado para Visual Studio Code.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="memonsters"
            thumbnail={thumbMemonsters}
            title="Memonsters"
          >
            Proyecto final para la materia Informatica II. Ingenieria Informatica.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="chromehungry" thumbnail={thumbChromeHungry} title="Chrome Hungry">
            Idea para proyecto final, Informatica II.
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
          Ejercicios resueltos de la materia Informatica II. Ingenieria Informatica, IUA.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
