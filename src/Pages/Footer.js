import { AppBar, Box, Grid, Typography, Container } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'

// const navItems =[
//     {
//         id:1,
//         text:"Work",
//         link:"/"
//     },
//     {
//         id:2,
//         text:"Method",
//         link:"/method"
//     },
//     {
//         id:3,
//         text:"Services",
//         link:"/services"
//     },
//     {
//         id:4,
//         text:"Company",
//         link:"/company"
//     },
//     {
//         id:5,
//         text:"Contact",
//         link:"/contact"
//     }
// ]

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];


  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Footer = () => {
  return (
    <Box sx={{display:"flex",mt:10}}>
        <AppBar position="static" sx={{backgroundColor:"#13294b",p:5}}>
            {/* <Container>
                <Grid container rowSpacing={3} sx={{textAlign:"center"}}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant='h4' fontWeight={4} >
                            Tesys
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Box
                            sx={{display:{sm:"block"}}}
                            >
                                {navItems.map((item)=>(
                                    <Button key={item.id} sx={{color:"#fff", mr:4}} component={Link} to={item.link}>
                                        {item.text}
                                    </Button>
                                ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container> */}

             {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                    }}
                >
                    <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom sx={{color:"#fff"}}>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                            <li key={item}>
                                <Link href="#" variant="subtitle1" sx={{color:"#fff"}}>
                                {item}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </Grid>
                    ))}
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            {/* End footer */}
        </AppBar>
    </Box>
  )
}

export default Footer