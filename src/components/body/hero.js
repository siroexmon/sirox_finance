import {
    Box,
    Text,
    Heading,
    Divider,
    AspectRatio,
    SimpleGrid,
    Image,
    HStack,
    Center,
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
        py={{ base: 20, md: 'md'}}>
          <Heading
          fontWeight={700}
          fontSize={{base: '4xl', md: '6xl'}}
          lineHeight={'110%'}
      color = {'blue.900' }>
            Exploring the overlap between<br />
            <Text as={'span'} fontWeight="extrabold" bgGradient="linear(to-l, green.600,teal.600)"
  bgClip="text">
            crypto and financial markets
            </Text>
          </Heading>
      <Center> 
      <Stack spacing={5} direction={{base:'column', md:'row'}} >
          <Box width='xs' boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='300px' display='flex' flexDirection="column" alignItems="center">
              <Image src={"/sir0x_logo.png"} alt={"logo"} width='80%'/>
              <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>SIROX FINANCE</Text>
              <Divider orientation='horizontal'/>
              <Text as={'span'} fontSize={{base: 'md', sm: 'md', md:'md'}} paddingLeft={2} paddingRight={2}>Building the infrastructure for next-generation debt facilities.</Text>
          </Box>
          <Box width='xs'  boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' borderRadius='md' height='300px' display='flex' overflow='hidden' flexDirection="column" alignItems="center">
              <Image src={"https://public.bnbstatic.com/static/academy/uploads/50a9e07a73cd4117a4979e78b8409913.png"} maxHeight='150px' alt={"logo"} width='100%'/>
            <Text paddingTop={1} paddingBottom={3}fontWeight='bold'>YIELD FARMING</Text>
            <Text fontSize={{base: 'md', sm: 'md', md:'md'}} paddingLeft={2} paddingRight={2}>We build our own smart contracts and tooling to extract yield from markets.</Text>
          </Box>

          <Box width='xs' boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='300px' display='flex' flexDirection="column" alignItems="center">
              <Image src={"https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2018/04/illustration.png"} height='150px' alt={"logo"} width='80%'/>
          <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>ANGEL INVESTING</Text>
          <Text fontSize={{base: 'md', sm: 'md', md:'md'}} paddingLeft={2} paddingRight={2}>We provide angel tickets in interesting projects where our experience might be valuable.
      Currently interested in on-chain options and verifiable computation</Text>
      </Box>
    </Stack>
      </Center>
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
