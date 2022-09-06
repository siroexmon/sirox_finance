import React from 'react';
import { ChakraProvider, theme, Box, Grid } from '@chakra-ui/react'
import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" bgGradient="linear(to-tr, gray.50, blue.400)">
          <Header/>
          <Body/>
          <Footer/>

        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
