import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

function Index() {
  return (
    <Container maxW={'xl'}>
      <Head>
        <title>AtCoder input generator</title>
      </Head>
      <Heading as={'h2'} size={'2xl'} mt={24}>
        AtCoder input generator
      </Heading>
      <Text fontSize={'2xl'} textAlign={'center'} mt={7}>
        Generate input source code automaticly.
        <br />
        Paste "Input" statement to textbox to generate.
      </Text>
    </Container>
  );
}

export default Index;
