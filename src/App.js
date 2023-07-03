import React from 'react';
import { ChakraProvider, theme, Box, Flex} from '@chakra-ui/react'
//import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer';
import PDFDownload from './components/PDFDownload';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" marginBottom={'0px'}>
        <Flex minH="100vh" flexDirection="column" justifyContent="space-between" bgColor="#f3f3f3" color="#003157">
          <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/privacy" element={<PDFDownload href="https://fence-assets.s3.eu-central-1.amazonaws.com/t%26c_privacy/fence_privacy_policy_20230703.pdf" />} />
        <Route path="/terms" element={<PDFDownload href="https://fence-assets.s3.eu-central-1.amazonaws.com/t%26c_privacy/fence_t%26c_20230703.pdf" />} />
        <Route path="/cookie" element={<PDFDownload href="https://fence-assets.s3.eu-central-1.amazonaws.com/t%26c_privacy/fence_cookie_20230703.pdf" />} />
      </Routes>
    </Router>
          <Footer/>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
