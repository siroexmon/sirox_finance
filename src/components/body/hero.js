import {
    Box,
    Text,
    Heading,
    Divider,
    SimpleGrid,
    Button
  } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

function Hero() {
    
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
      <SimpleGrid columns={5} spacing={5} className='my-box'> 
          <Box bg='clear' height='120px'> </Box>
          <Box boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='250px'>
              <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>SIROX FINANCE</Text>
              <Divider orientation='horizontal'/>
              <Text as={'span'}>Building the infrastructure for next-generation debt facilities</Text>
          </Box>
          <Box boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='250px'>
            <Text paddingTop={1} paddingBottom={3}fontWeight='bold'>YIELD FARMING</Text>
            <Text>We build our own smart contracts and tooling to extract yield from markets </Text>
          </Box>
          <Box boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='250px'>
          <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>ANGEL INVESTING</Text>
          <Text>We provide angel tickets in interesting projects where our experience might be valuable.
      Currently interested in on-chain options and verifiable computation</Text>
      </Box>
          <Box bg='clear' height='120px'> </Box>
      </SimpleGrid>
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
