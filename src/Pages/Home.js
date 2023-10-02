import React from 'react'
// import { Box, Container, Typography} from '@mui/material'
// import { TypeAnimation } from 'react-type-animation'
import Banner from './home/Banner'



const Home = () => {
  return (
   <React.Fragment>
    {/* <Box component="div" sx={{textAlign:"center",pt:30, pb:10, backgroundImage:"url('')"}}>
      <Container>
      <Typography variant="h2">
        Empowering Your Buisness with 
      </Typography>
      <Typography variant="h3">
        <TypeAnimation
          sequence={[
            'Artificial Intelligence',1500,
            'Customized Aplication',1500,
            '24 x 7 Support', 1500,
          ]}
          speed={50}
          repeat={Infinity}
          style={{color:"#E74C3C"}}
        />
        </Typography>
      </Container>
    </Box> */}
    <Banner/>
   </React.Fragment>
  )
}

export default Home

