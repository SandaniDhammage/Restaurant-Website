import React from 'react';
import Layout from '../components/Layout/Layout';
import {Box, Typography} from '@mui/material'
import about from '../images/about.jpg'

const About = () => {
  return (
    <Layout>
       <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          my: 2,
          p: 2,
          textAlign: 'left',
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: { xs: '1.5rem', md: '2rem' },
          },
          '& p': {
            textAlign: 'justify',
            fontFamily: 'Gill Sans',
          },
        }}>
            <Box
          component="img"
          src={about}
          alt="about"
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
          }}>
        
        <Typography variant="h4">Welcome To Fenix Resturant</Typography>
        <p>Designed to be the Culinary epicenter, We try to uphold the traditions of the Local Household <br></br>
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
            to experience our experience. We couldn’t have done it without you</p>
            <br></br>
            <p>Designed to be the Culinary epicenter, We try to uphold the traditions of the Local Household <br></br>
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
            to experience our experience. We couldn’t have done it without you</p>
        </Box>
      </Box>
    </Layout>
  )
}

export default About