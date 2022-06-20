import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl ='https://exercisedb.p.rapidapi.com/'
    }
    fetchExercisesData()
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>)
}
export default ExerciseDetail
