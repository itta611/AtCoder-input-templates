import { Box } from '@chakra-ui/react';
import CardTitle from './CardTitle';
import CardCode from './CardCode';
import CardInput from './CardInput';

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
      {...prop}
    />
  );
}

export default Card;
export { CardTitle, CardCode, CardInput };
