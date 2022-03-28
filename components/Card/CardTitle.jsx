import { Heading } from '@chakra-ui/react';
function CardTitle(props) {
  return <Heading as={'h3'} mb={3} fontSize={'md'} {...props} />;
}

export default CardTitle;
