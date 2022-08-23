import {
    Box,
    Text,
    Heading,
    Button,
    EditablePreview,
    EditableInput,
    Editable
  } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

const request = require('request-promise');
const BASE_URL = `https://cmfqddlolbxx.execute-api.eu-west-2.amazonaws.com/default`

function Hero() {
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
    const [addresses, setAddresses] = useState("");
    
    return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14}}
        py={{ base: 20, md: 36}}>
          <Heading
          fontWeight={700}
          fontSize={{base: '4xl', sm: '5xl', md: '6xl'}}
          lineHeight={'110%'}>
            Bringing next generation debt markets<br />
            <Text as={'span'} fontWeight="extrabold" bgGradient="linear(to-l, purple.600,pink.900)"
  bgClip="text">
             using blockchain 
            </Text>
          </Heading>
          <Text color = {'blue.900'}>
            We provide tooling and infrastructure for high-growth companies to access more efficient global debt markets. <br/>
            Enjoy blockchain efficiency and transparency without being a so-called crypto-expert
          </Text>
          <Stack 
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
              <Text color = {'purple.700'} fontWeight="extrabold">
                Are you a business looking for debt financing? <br/>
      Get in touch!
              </Text>
              <Editable 
              bgColor="white"
              rounded={'full'}
              placeholder="Your email"
              isDisabled={isWaitingForResponse}
              startWithEditView={true}
              onChange={(e) => setAddresses(e)}>
                <EditablePreview />
                <EditableInput />
              </Editable>
              <Button 
              isLoading={isWaitingForResponse}
              loadingText="Loading..."
              colorScheme={'purple'}
              bg={'purple.800'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.400'
              }}>
               Contact me! 
              </Button>
              <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                About us 
            </Button> 
        </Stack>
      </Stack>
    </>)
}

export default Hero;
