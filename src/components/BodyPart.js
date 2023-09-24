import React from 'react'
import { Stack,Topography, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png';

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack
    type ="button"
    align-items="center"
    justifyContent="center"
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625 ': '', //if body part matches item we make it lit else its normal
        backgroundColor: '#fff',
        borderBottomLeftRadius: "20px",
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
       }}
       
       //This will send us to Home-->Exercises Component
    onClick={() => {
      setBodyPart(item);  //On clicking on our scroll Bar
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' }); //We should go to that exercises on click
    }}
    >

        <img src={Icon} alt ="dumbbell" style= {{width:'40px', height:'40px'}}/>

      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography> {/*Render item*/}

    </Stack>
  )
}

export default BodyPart