import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'

const ExerciseDetail = () => {
  return <Box>
    <Detail />
    <ExerciseVideos />
    <SimilarExercises />
  </Box>
}
export default ExerciseDetail
