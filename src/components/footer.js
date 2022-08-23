import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  

function Footer() {
    return (
    <Box
      maxH={'md'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
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
          justify={{ base: 'center' }}
          align={{ base: 'center' }}>
          <Text fontSize={{base: 'sm'}}>© 2022 SIROEXMON LABS. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
    )
}

export default Footer;
