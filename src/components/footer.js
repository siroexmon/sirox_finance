import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  

function Footer() {
    return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      height={"50px"}
      marginBottom={0}>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={3}
          direction={{ base: 'column', md: 'row' }}
          spacing={2}
          justify={{ base: 'center' }}
          align={{ base: 'center' }}>
          <Text fontSize={{base: 'sm'}}>© 2022 SIROEXMON LABS. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
    )
}

export default Footer;
