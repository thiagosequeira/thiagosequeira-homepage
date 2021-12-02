import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoGoogle
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Thiago Sequeira
          </Heading>
          <p>Creador Digital ( Desarrollador / Community Manager / Diseñador )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/thiago.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre Thiago
        </Heading>
        <Paragraph>
          Thiago es un desarrollador frontend freelance con sede en Córdoba con una pasión por la construcción de servicios digitales. Tiene un don para todo lo relacionado con el lanzamiento de productos, desde la planificación y el diseño hasta la resolución de problemas de la vida real con código. {/* Cuando no está conectado, le encanta pasar el rato jugando a los videojuegos. Actualmente, trabaja en su propio emprendimiento llamado{' '}
          <NextLink href="/works/onlydark">
            <Link>pōrta</Link>
          </NextLink> */}
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Ver proyectos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biografia
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Nacido en Córdoba, Argentina
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Admisión al Instituto Universitario Aéronautico. Estudiante de Ingenieria Informática.
        </BioSection>
        <BioSection>
          <BioYear>2019 - Actualidad</BioYear>
          Trabajar como freelance.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En la web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/thiagosequeira" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @thiagosequeira
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:thiagosequeira02@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/thsequeira/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @thsequeira
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/thiagosequeira/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Thiago Sequeira
              </Button>
            </Link>
          </ListItem>
        </List>

{/*         <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

{/*         <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
