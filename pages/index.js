import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import InputArea from '../components/InputArea';

function Index() {
  return (
    <Container maxW={'2xl'} centerContent>
      <Head>
        <title>AtCoder input generator</title>
      </Head>
      <Heading as={'h2'} size={'2xl'} mt={24}>
        AtCoder input generator
      </Heading>
      <Text fontSize={'2xl'} mt={7}>
        Generate input source code automaticly.
        <br />
        Paste "Input" statement to textbox to generate.
      </Text>

      <InputArea />
    </Container>
  );
}

export default Index;
