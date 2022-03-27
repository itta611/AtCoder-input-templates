import {
  FormControl,
  FormLabel,
  Switch,
  Textarea,
  HStack,
  Select,
} from '@chakra-ui/react';

function InputArea() {
  return (
    <FormControl mt={20} mb={5}>
      <HStack>
        <FormLabel htmlFor={'input-area'} mt={'auto'} flex={1}>
          Input
        </FormLabel>
        <Select variant='outline' w={40} mb={'5px!important'}>
          <option>Python</option>
          <option>C++</option>
        </Select>
      </HStack>
      <Textarea id={'input-area'} resize={'none'} h={40} />
      <HStack mt={5}>
        <FormLabel htmlFor={'copy-switch'} mb={0} flex={1}>
          Copy to clipboard automaticly
        </FormLabel>
        <Switch id={'copy-switch'} marginRight={3} isChecked />
      </HStack>
    </FormControl>
  );
}

export default InputArea;
