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
          lineHeight={'110%'}
      color = {'blue.900' }>
            Exploring the overlap between<br />
            <Text as={'span'} fontWeight="extrabold" bgGradient="linear(to-l, green.600,teal.600)"
  bgClip="text">
            zk-tech and financial marketplaces 
            </Text>
          </Heading>
          <Text color = {'blue.900'}>
            Currently building the tooling and infrastructure for high-growth companies to access more efficient global debt markets. <br/>
          </Text>
          <Stack 
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
              <Text color = {'teal.700'} fontWeight="extrabold">
      Get in touch!
              </Text>
               <Text color = {'gray.700'} fontWeight="extrabold">
                hey@siroexmon.xyz
              </Text>
 
               <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                About us 
            </Button> 
        </Stack>
      </Stack>
    </>)
}

export default Hero;
