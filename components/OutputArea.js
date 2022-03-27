import {
  FormControl,
  FormLabel,
  Switch,
  Textarea,
  HStack,
} from '@chakra-ui/react';

function OutputArea() {
  return (
    <FormControl mt={5}>
      <FormLabel htmlFor={'input-area'}>Output</FormLabel>
      <Textarea id={'input-area'} resize={'none'} h={40} readOnly />
    </FormControl>
  );
}

export default OutputArea;
