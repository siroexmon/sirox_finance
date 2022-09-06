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
            Enabling pre-Series C startups to raise debt facilities by <br/>
            <Text as={'span'} fontWeight="extrabold" bgGradient="linear(to-l, purple.800,blue.400)"
  bgClip="text">
            leveraging blockchain infrastructure
            </Text>
          </Heading>
      <Center> 
      <Stack spacing={5} direction={{base:'column', md:'row'}} >
          <Box width='xs' boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='300px' display='flex' flexDirection="column" alignItems="center" paddingBottom={'3'}>
              <Image src={"https://icon-library.com/images/lower-price-icon/lower-price-icon-8.jpg"} maxHeight='150px' alt={""} paddingTop={'5'} paddingBottom={'3'}/>
            <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>LOWER COSTS</Text>
              <Divider orientation='horizontal'/>
            <Text fontSize={{base: 'md', sm: 'md', md:'md'}} paddingLeft={2} paddingRight={2}>Forget the long list of agents, Spreadsheets and PDFs. Say hello to accounting and payments enforced by blockchain.</Text>
          </Box>
          <Box width='xs'  boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' borderRadius='md' height='300px' display='flex' overflow='hidden' flexDirection="column" alignItems="center" paddingBottom={'3'}>
              <Image src={"https://cdn-icons-png.flaticon.com/512/2463/2463956.png"} maxHeight='150px' alt={""} paddingTop={'5'} paddingBottom={'3'}/>
              <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>BETTER TERMS</Text>
              <Text as={'span'} fontSize={{base: 'md', sm: 'md', md:'md'}} paddingLeft={2} paddingRight={2}>Global access and lower collaboration costs means that borrowers can access to a wider set of lenders, reducing lenders' bargaining power</Text>
          </Box>

          <Box width='xs' boxShadow='xl' _hover={{boxShadow: '2xl'}} bg='gray.200' rounded={10} height='300px' display='flex' flexDirection="column" alignItems="center" paddingBottom={'3'}>
              <Image src={"https://cdn0.iconfinder.com/data/icons/web-hosting-technicons-vol-1/256/Fast_Processing-512.png"} height='150px' alt={""} paddingTop={'5'} paddingBottom={'3'}/>
          <Text paddingTop={1} paddingBottom={3} fontWeight='bold'>FASTER EXECUTION</Text>
          <Text fontSize={{base: 'md', sm: 'md', md:'md'}} paddingLeft={2} paddingRight={2}>Debt facility standarization and programmability allows us to set you up in a matter of days, instead of months</Text>
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
                hey@sirox.finance
              </Text>
               <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                About us 
            </Button> 
        </Stack>
      </Stack>
    </>)
}

export default Hero;
