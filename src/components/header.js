import {
    Grid,
    Heading,
  } from '@chakra-ui/react';

function Body() {
    return (
        <Grid minW="100wh">
            <Heading paddingTop={{base:'10px', md:'15px'}} textColor={'purple.900'} fontFamily="">SIR0X FINANCE</Heading>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Grid>
    )
}

export default Body;
