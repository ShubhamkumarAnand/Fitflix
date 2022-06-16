import {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'

const SearchExercises = () => {
  return (
      <Stack justifyContent='center' p='20px' mt='37px' alignItems='center'>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', sm: '30px'}}} mb='50px' textAlign='center' >
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box position='relative' mb='72px'>
          <TextField
            sx={{
              input: {
                border: 'none',
                borderRadius: '4px',
                fontWeight: '700'
              },
              width: {
                lg: '800px', sm: '350px'
              },
              backgroundColor: '#fff',
              borderRadius: '40px'
            }}
            height='76px'
            value=''
            onChange={(e) => {}}
            placeholder='Search Exercises'
            type='text'
          />
          <Button className='search-btn'
            sx={{
              backgroundColor: '#ff2625',
              color: '#fff',
              textTransform: 'none',
              height: '62px',
              pos: 'absolute',
              right: '0',
              width: {lg: '175px', sm: '80px'},
              fontSize: {lg: '20px', sm: '14px'}
            }}
          >
            Search
          </Button>
        </Box>
      </Stack>

  )
}
export default SearchExercises
