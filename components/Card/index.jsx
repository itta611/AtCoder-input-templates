import { Box, createStandaloneToast } from '@chakra-ui/react';
import CardTitle from './CardTitle';
import CardCode from './CardCode';
import CardInput from './CardInput';
import pythonCodes from './pythonCodes';

const toast = createStandaloneToast();

function handleClick(code) {
  navigator.clipboard.writeText(pythonCodes[code]);
  toast({
    title: 'Copied to Clipboard!',
    status: 'success',
    duration: 2000,
  });
}

function Card(props) {
  return (
    <Box
      borderRadius={'md'}
      borderWidth={1}
      borderColor={'gray.200'}
      p={6}
      mb={4}
      boxShadow={'sm'}
      cursor={'pointer'}
      onClick={(e) => {
        handleClick(props.code);
      }}
      {...props}
    />
  );
}

export default Card;
export { CardTitle, CardCode, CardInput };
