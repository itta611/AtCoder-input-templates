import { Box, createStandaloneToast } from '@chakra-ui/react';
import CardTitle from './CardTitle';
import CardInput from './CardInput';
import codes from './codes';
import { TemplateContext } from '../TemplateMenu';
import { useContext } from 'react';

const toast = createStandaloneToast();

function handleClick(code, lang) {
  let langCode;
  if (lang === 'Python') langCode = 'python';
  else if (lang === 'C++') langCode = 'cpp';
  navigator.clipboard.writeText(codes[langCode][code]);
  toast({
    title: 'Copied to Clipboard!',
    status: 'success',
    duration: 2000,
  });
}

function Card(props) {
  const lang = useContext(TemplateContext);
  return (
    <Box
      borderRadius={'md'}
      borderWidth={1}
      borderColor={'gray.200'}
      p={6}
      mb={4}
      boxShadow={'sm'}
      cursor={'pointer'}
      onClick={() => {
        handleClick(props.code, lang);
      }}
      {...props}
    />
  );
}

export default Card;
export { CardTitle, CardInput };
