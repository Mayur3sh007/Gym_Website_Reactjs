import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';   
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';


const Exercises = ({ exercises, setExercises, bodyPart }) => { // Make sure to destructure the props properly({xxx})

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); //pass it in 2nd last stack

  const paginate = (e,value)=>{  //accepts event and Value
      setCurrentPage(value);  //The name entered in Search bar IG

      window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async() =>{
      let exercisesData = [];

      if(bodyPart === 'all')  //At start its set to all by default
      {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); //all body Exercises
      }
      else
      {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart]); //Recall this everytime BodyPart Changes
  

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: '109px' } }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise,index) => (
          <ExerciseCard key={index} exercise = {exercise} /> 
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination              //To limit the amt of content we see on a screen at a time
          color="standard"
          shape='rounded'
          defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}  //Each page will contain 9 exercises
          size='large'
          //Functions
          page={currentPage}
          onChange={paginate}
          />
        )}

      </Stack>
    </Box>
  );
};

export default Exercises;
