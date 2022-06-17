import {useEffect, useState} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Pagination} from '@mui/material/Pagination'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard.js'

const Exercises = ({exercises, setExercises, bodyParts}) => {
  console.log(exercises);
  return (
    <Box id='exercises'
      sx={{mt: {lg: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row' flexWrap='wrap' justifyContent='center' sx={{gap: {lg: '110px', sx: '50px'}}}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}
export default Exercises
