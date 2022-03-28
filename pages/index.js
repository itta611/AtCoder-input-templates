import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import TemplateMenu from '../components/TemplateMenu';

function Index() {
  return (
    <Container maxW={'2xl'} centerContent>
      <Head>
        <title>AtCoder input generator</title>
      </Head>
      <Heading
        as={'h2'}
        size={'2xl'}
        mt={24}
        background={'-webkit-linear-gradient(0deg, #05a7ff, #ff05f7)'}
        backgroundClip={'text'}
        pb={1}
      >
        AtCoder input generator
      </Heading>
      <Text fontSize={'2xl'} mt={7} textAlign={'center'}>
        Generate input source code automaticly.
        <br />
        Paste "Input" statement to textbox to generate.
      </Text>
      <TemplateMenu />
    </Container>
  );
}

export default Index;
