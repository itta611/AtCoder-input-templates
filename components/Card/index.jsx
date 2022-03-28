import { Box, createStandaloneToast } from '@chakra-ui/react';
import CardTitle from './CardTitle';
import CardCode from './CardCode';
import CardInput from './CardInput';

const toast = createStandaloneToast();

function handleClick() {
  toast({
    title: 'Copied to Clipboard!',
    status: 'success',
    duration: 2000,
  });
}

function Card(prop) {
  return (
    <Box
      borderRadius={'md'}
      borderWidth={1}
      borderColor={'gray.200'}
      p={6}
      mb={4}
      boxShadow={'sm'}
      cursor={'pointer'}
      onClick={handleClick}
      {...prop}
    />
  );
}

export default Card;
export { CardTitle, CardCode, CardInput };
