import {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
    }
  }
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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizantalScrollBar data={bodyParts} />
      </Box>
    </Stack>

  )
}
export default SearchExercises
