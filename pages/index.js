import { Container, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import TemplateMenu from '../components/TemplateMenu';

function Index() {
  return (
    <Container maxW={'2xl'}>
      <Head>
        <title>AtCoder Input Templates</title>
      </Head>
      <Heading
        as={'h2'}
        size={'2xl'}
        mt={24}
        background={'-webkit-linear-gradient(0deg, #05a7ff, #ff05f7)'}
        backgroundClip={'text'}
        pb={1}
        textAlign={'center'}
      >
        AtCoder Input Templates
      </Heading>
      <Text fontSize={'2xl'} mt={7} textAlign={'center'}>
        Input source code templates for AtCoder.
        <br />
        Click item to copy to your clipboard.
      </Text>
      <TemplateMenu />
    </Container>
  );
}

export default Index;
