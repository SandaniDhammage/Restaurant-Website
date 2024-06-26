import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Paper, TableCell, TableContainer, TableHead, Typography,TableRow,Table, TableBody}from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import contact from '../images/contact.jpg'

const Contact = () => {
  return (
    <Layout>
        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          my: -1,
          p: 2,
          textAlign: 'left',
          alignItems: 'center',
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: { xs: '1.5rem', md: '2rem' },
          },
          '& p': {
            textAlign: 'justify',
            fontFamily: 'Gill Sans',
          },
        }}
      >
        <Box
          component="img"
          src={contact}
          alt="contactUs"
          sx={{
            width: { xs: '100%', md: '40%' },
            mr: { md: 2 },
            mb: { xs: 2, md: 0 },
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            transform: 'rotateY(-10deg) rotateX(10deg)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'rotateY(0deg) rotateX(0deg)',
            },
          }}
        />
        <Box
          sx={{
            flex: 1,
            
            p: 2,
            mt: { xs: 0, md: 2 },
            "@media (max-width:600px)": {
            width: "300px",
          },
          }}
        ></Box>
    <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p >
            Designed to be the Culinary epicenter, We try to uphold the traditions of the Local Household <br></br>
            while bringing out the flavours of Sri Lanka with a bounty of fresh seasonal ingredients. <br></br>
            We take extra care to deliver fresh farm produce to a local classy table cuisine with an emphasis on seasonal <br></br>
            & locally sourced ingredients and with the freshest Seafood. <br></br>
            May it be the ery hot curries or the soothing buffalo curd, We enjoy bringing the most sought after dishes<br></br>
            with a little twist of our own. Just as we take pride in supporting local farm communities in Sri Lanka,<br></br> 
            We take pride & joy in bringing you the homely ambiance along with your food. <br></br>
            Our interior is designed to bring you the olden day Walawwa Experience while you’re dining with us.<br></br>
            The Colonial space that we have opened for you has its modern & vintage touch, <br></br>
            inviting you to a feel at home experience while you dine . <br></br>
            Our mural wall has harmoniously incorporated the colonial architecture style to show you a cultural infusion. <br></br>
            We want you to sit down and enjoy your meal just like the way you enjoy your homemade dishes! <br></br>
            We have embarked on this journey and e are glad that you have taken the time off of your schedule to know our story <br></br>
            to experience our experience. We couldn’t have done it without you
        </p>

    </Box>
    </Box>
    <Box sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}>
        <TableContainer component={Paper}>
        <Table aria-label="contact table">
            <TableHead>
                <TableRow>
                    <TableCell sx={{ bgcolor: "black", color: "white" }}
                  align="center">Contact Details</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <SupportAgentIcon sx={{ color: "red", pt: 1 }}/>1224 (tollfree)
                    </TableCell>
                    
                </TableRow>
                <TableRow>
                <TableCell>
                        <EmailIcon sx={{ color: "skyblue", pt: 1 }}/>fenix@gmail.com
                    </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                        <CallIcon sx={{ color: "green", pt: 1 }}/>0112567895
                    </TableCell>

                </TableRow>
            </TableBody>
            </Table>

        </TableContainer>
    </Box>
    
    </Layout>
  )
}

export default Contact