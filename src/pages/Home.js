import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all'); //Initially show all body Parts
  const [exercises, setExercises] = useState([]); //Empty Array for useState
  return (
  <Box>
    <HeroBanner/>
    
    {/*We are sending these props all throught the pages  */}
    <SearchExercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
     />

    <Exercises
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
     />
  </Box>
  )
}

export default Home