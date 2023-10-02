import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import Image from 'mui-image'

const Company = () => {
  return (
    <>
        <Container>
            <Typography variant="h5" sx={{textAlign:"center", mt:10}}>Our Company</Typography>
            <Typography variant="h4" sx={{textAlign:"center", mt:1, mb:10}}>Let's get to know each other</Typography>
        </Container>
        <Grid container>
            <Container>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <center>
                        <Image src="/images/ourCompany.jpg" height={600}></Image>
                    </center>
                    <Typography variant="h3" compoenent="h3" sx={{mt:5,color:"#47d7ac"}}>About</Typography>
                    <Typography variant="p" component="p" sx={{mt:2, textAlign:"justify"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra porttitor libero ac tincidunt. Nam tincidunt, tortor sit amet sagittis pretium, leo lectus venenatis turpis, nec volutpat felis sem eget erat. Donec fermentum libero vel nibh ullamcorper, a elementum nisl euismod. Maecenas eget faucibus elit. Aliquam nec mollis massa. Sed eget finibus augue. Quisque sed velit id lacus blandit pretium eu sed erat. Nulla sollicitudin magna sit amet ligula porta facilisis. In consectetur nulla sed tellus malesuada pharetra. Nulla egestas venenatis arcu, eu fermentum lorem aliquet eget. Donec elementum feugiat orci eu congue. Phasellus tortor leo, dignissim nec mi sit amet, venenatis aliquam arcu.
                    </Typography><br/>
                    <Typography variant="p" compoenent="p" sx={{textAlign:"justify"}}>
                        Mauris consectetur tortor vitae dolor faucibus accumsan. Maecenas euismod scelerisque nisl, sed tempor augue volutpat porta. Nam eget neque enim. Duis ex ligula, imperdiet at ante sed, tincidunt malesuada sapien. Ut et urna non diam fringilla commodo. Curabitur laoreet at magna vel imperdiet. Phasellus a facilisis leo.
                    </Typography><br/><br/>
                    <Typography variant="p" compoenent="p" sx={{textAlign:"justify"}}>
                        Vivamus bibendum, nulla sed laoreet bibendum, ligula purus suscipit velit, id malesuada ipsum enim non tellus. Nunc a neque sit amet nisl feugiat lobortis. Ut quis viverra tellus. Praesent iaculis neque nec ornare sodales. Duis non tincidunt erat. Fusce volutpat cursus dignissim. Curabitur ultrices erat nec sem tempus, in porttitor orci tristique. Aliquam erat volutpat. Vivamus tempus ultrices lacus, at pellentesque diam varius ut. Quisque mauris ante, convallis et purus quis, consectetur cursus justo. Aenean iaculis volutpat lacinia.
                    </Typography><br/><br/>
                    <Typography variant="p" compoenent="p" sx={{textAlign:"justify"}}>
                        Curabitur semper, eros a facilisis pharetra, ipsum nulla convallis nibh, nec fringilla quam neque venenatis libero. Nulla pulvinar eleifend mauris, id eleifend urna mollis sed. Cras consequat convallis felis, eget luctus orci feugiat a. Proin tempus magna quis tellus tempus aliquam. Nam quis massa est. Phasellus a laoreet ligula. Donec consectetur eleifend quam id sodales. Suspendisse laoreet tincidunt sapien, sed consequat elit dignissim sit amet.
                    </Typography>
                </Grid> 
            </Container>
        </Grid>  
    </>
  )
}

export default Company