import { Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';

function Index() {
  return (
    <Container maxW={'xl'}>
      <Head>
        <title>Atcoder input generator</title>
      </Head>
      <Heading as={'h2'} size={'2xl'} mt={24}>
        AtCoder input generator
      </Heading>
    </Container>
  );
}

export default Index;
