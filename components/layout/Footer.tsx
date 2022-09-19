import NextLink from 'next/link'
import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from 'components/common/Logo';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={6}>
          <NextLink href={'/'} passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href={'collections'} passHref>
            <Link>Collections</Link>
          </NextLink>
          <NextLink href={'#'} passHref>
            <Link>About</Link>
          </NextLink>
          <NextLink href={'#'} passHref>
            <Link>Contact</Link>
          </NextLink>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'center'}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 NFTLaunchKit(Test Task). All rights reserved</Text>

        </Container>
      </Box>
    </Box>
  );
}
export default Footer;