import {Stack, Typography} from '@mui/material'
import icon from '../assets/icons/gym.png'

const BodyParts = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      <img src={icon} alt='Gym' styles={{width: '40px', height: '40px'}} />
    </Stack>
  )
}
export default BodyParts
