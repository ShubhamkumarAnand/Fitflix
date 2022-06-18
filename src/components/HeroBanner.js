import {Box,  Typography, Button} from '@mui/material'
import HeroBannerImg from '../assets/images/banner.png'

// The Homepage banner is shown here with Button and Banner Image
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', sm: '40px'}}} mb='23px' mt='30px' >
        Sweat, Smile <br/> And Repeat
      </Typography>
      <Typography fontFamily="Alegreya" fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most Effective Exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises'
        sx={{
          backgroundColor: '#ff2625', padding: '10px'
      }}
      >Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: 0.1,
          display: {lg: 'block', sm: 'none'}
        }}
        fontSize='220px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}
export default HeroBanner
