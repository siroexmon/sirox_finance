import React from 'react';
import { ChakraProvider, theme, Box, Flex } from '@chakra-ui/react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';
import PrivacyPage from './components/PrivacyPage';
import CookiePage from './components/CookiePage';
import TermsPage from './components/TermsPage';

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
              <Route
                  path="/terms"
                  component = {TermsPage}
                />
              <Route
                  path="/cookie"
                  component = {CookiePage}
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
