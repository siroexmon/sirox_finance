import {
    Grid,
    Heading,
  } from '@chakra-ui/react';

function Body() {
    return (
        <Grid minW="100wh">
            <Heading paddingTop={{base:'10px', md:'15px'}} textColor={'teal.900'} fontFamily="">SIROEXMON LABS</Heading>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Grid>
    )
}

export default Body;
