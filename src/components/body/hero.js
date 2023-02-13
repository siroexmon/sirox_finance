import {
    Box,
    Text,
    Heading,
    Divider,
    Image,
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
        spacing={{ base: 4, md: 8}}
        py={{ base: 10, md: 'md'}}>
      <Heading
          fontWeight={700}
          fontSize={{base: '4xl', md: '6xl'}}
          lineHeight={'110%'}
      color = {'#003157' }>
            The OS for <br/>
            <Text as={'span'} fontWeight="extrabold" bgGradient="linear(to-l, #016db6,#003157)" bgClip="text">
              asset-backed debt facilities
            </Text>
      </Heading>
      <Box marginLeft="auto" marginRight="auto">
      <Text fontSize={{base:'md'}} width={"75vw"} maxWidth={"800px"} marginLeft="auto" marginRight="auto" paddingBottom={{base:"0", xs:'5'}}>
      We are transforming Debt Facilities’ spreadsheets and PDFs into standard and reusable pieces of code to automate capital and asset flows, reducing 70% of the operating costs and providing real-time monitoring
       </Text>
      </Box>
     <Center direction='column'> 
      <Stack spacing={5} direction={{base:'column', md:'row'}} >
          <Box width='xs' boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='290px' display='flex' flexDirection="column" alignItems="center" paddingBottom={1}>
              <Image src={"https://icon-library.com/images/lower-price-icon/lower-price-icon-8.jpg"} maxHeight='150px' alt={""} paddingTop={'5'} paddingBottom={'3'}/>
            <Text paddingTop={1} paddingBottom={1} fontWeight='bold'>LOWER COSTS</Text>
              <Divider orientation='horizontal'/>
            <Text fontSize={{base: 'sm', sm: 'sm', md:'sm'}} paddingLeft={2} paddingRight={2}>Forget the long list of agents, Spreadsheets and PDFs. Say hello to accounting and payments enforced by blockchain.</Text>
          </Box>
          <Box width='xs'  boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' borderRadius='md' height='290px' display='flex' overflow='hidden' flexDirection="column" alignItems="center" paddingBottom={1}>
              <Image src={"https://cdn-icons-png.flaticon.com/512/2463/2463956.png"} maxHeight='150px' alt={""} paddingTop={'5'} paddingBottom={'3'}/>
              <Text paddingTop={1} paddingBottom={1} fontWeight='bold'>BETTER TERMS</Text>
              <Text as={'span'} fontSize={{base: 'sm', sm: 'sm', md:'sm'}} paddingLeft={2} paddingRight={2}>Global access and lower collaboration costs means that borrowers can access to a wider set of lenders, reducing lenders' bargaining power</Text>
          </Box>
          <Box width='xs' boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='290px' display='flex' flexDirection="column" alignItems="center" paddingBottom={'1'}>
              <Image src={"https://cdn0.iconfinder.com/data/icons/web-hosting-technicons-vol-1/256/Fast_Processing-512.png"} height='150px' alt={""} paddingTop={'5'} paddingBottom={'3'}/>
          <Text paddingTop={1} paddingBottom={1} fontWeight='bold'>FASTER EXECUTION</Text>
          <Text fontSize={{base: 'sm', sm: 'sm', md:'sm'}} paddingLeft={2} paddingRight={2}>Debt facility standarization and programmability allows us to set you up in a matter of days, instead of months</Text>
      </Box>
    </Stack>
      </Center>
        <Stack 
          direction={'column'}
          spacing={1}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
              <Text color = {'#003157'} fontWeight="extrabold">
      Join us!
              </Text>
               <Text color = {'#016db6'} fontWeight="extrabold">
                hey@fence.finance
              </Text>
        </Stack>
      </Stack>
    </>)
}

export default Hero;
