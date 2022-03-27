import {
  FormControl,
  FormLabel,
  Switch,
  Textarea,
  HStack,
} from '@chakra-ui/react';

function InputArea() {
  return (
    <FormControl mt={20} mb={5}>
      <FormLabel htmlFor={'input-area'}>Input</FormLabel>
      {/* TODO: add lang select box */}
      <Textarea id={'input-area'} resize={'none'} h={40} />
      <HStack mt={5}>
        <FormLabel htmlFor={'copy-switch'} mb={0} flex={1}>
          Copy to clipboard automaticly
        </FormLabel>
        <Switch id={'copy-switch'} marginRight={3} />
      </HStack>
    </FormControl>
  );
}

export default InputArea;
