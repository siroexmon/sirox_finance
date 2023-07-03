import React from 'react';
import { ChakraProvider, theme, Box, Flex } from '@chakra-ui/react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';
import PrivacyPage from './components/PrivacyPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" marginBottom={'0px'}>
          <Flex minH="100vh" flexDirection="column" justifyContent="space-between" bgColor="#f3f3f3" color="#003157">
            <Header />
            <Switch>
              <Route exact path="/" component={Body} />
              <Route
                  path="/privacy"
                  component = {PrivacyPage}
                />
            </Switch>
            <Footer />
          </Flex>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
