import { Box, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <Box as={'footer'}>
      <Link
        isExternal
        href={'https://github.com/itta611/atcoder-input-templates'}
        ml={'auto'}
        fontSize={'lg'}
        p={3}
        pt={10}
        pl={10}
        w={'min-content'}
        color={'white'}
        display={'block'}
        background={'linear-gradient(315deg, #333 50%, transparent 50%)'}
      >
        <FaGithub />
      </Link>
    </Box>
  );
}

export default Footer;
