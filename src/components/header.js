import {
    Grid,
  Center
  } from '@chakra-ui/react';

function Body() {
    return (
        <Grid minW="100wh">
      <Center>
      {/*<Heading paddingTop={{base:'10px', md:'15px'}} textColor={'teal.900'} fontFamily="">SIROEXMON LABS</Heading>*/}
            <img src="siroex.png" paddingTop={{base:'10px', md:'15px'}} width="500px" maxW="75wh" alt="SIROX FINANCE" justifySelf="center"/>
      </Center>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Grid>
    )
}

export default Body;
