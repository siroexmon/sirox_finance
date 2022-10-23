import React from 'react';
import { ChakraProvider, theme, Box, Flex} from '@chakra-ui/react'
import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" marginBottom={'0px'}>
        <Flex minH="100vh" flexDirection="column" justifyContent="space-between" bgGradient="linear(to-tr, gray.50, #f3f3f3)" color="#003157">
          <Header/>
          <Body/>
          <Footer/>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
