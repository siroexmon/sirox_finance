import {
    Grid,
  Center
  } from '@chakra-ui/react';

function Body() {
    return (
        <Grid minW="100wh" paddingTop={5}>
      <Center>
      {/*<Heading paddingTop={{base:'10px', md:'15px'}} textColor={'teal.900'} fontFamily="">SIROEXMON LABS</Heading>*/}
            <img src="fence_logo.png" paddingTop={{base:'10px', md:'15px'}} width="350px" maxW={'75vw'} alt="SIROX FINANCE" justifySelf="center"/>
      </Center>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Grid>
    )
}

export default Body;
