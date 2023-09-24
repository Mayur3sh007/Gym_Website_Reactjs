import React from 'react'
import {useEffect, useState } from 'react'
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData' //These are functions we imported
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => { 

  const [search, setSearch] = useState(''); //useState-1 is intially kept empty here && Now we goto Text field and change the value

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => { //We will send this data to a box inside return using (bodyPartsData)

    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]); //Show the body parts---> inside the brackets is all predefined dont worry
    }

    fetchExercisesData();

  }, [])
  
  const handleSearch = async () => { 
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions); //Get all Exercises
                                        //copy this url from Raid API and just modify last part of url to exercises

      const searchedExercises = exerciseData.filter(
        (exercise) => 
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
        //All these to specify what user's search
        //Here in this searchedExercises only 'search' is a function defined by us rest all is preDefined in Rapid Api thingy
      );

      setSearch(''); //Make search Empty
      setExercises(searchedExercises);  //Show search results
    }
  };
  //using async func usally means we have to wait for something In this case Its for Fetching data

  return (
    <Stack alignItems="center"
    mt="37px"
    justifyContent = "center"
    padding= "20px">
      
      <Typography fontWeight={700}
      sx ={{fontSize:{lg:'44px',xs:'30px'}}}
      mb='50px' textAlign='center'>
        Awesome Exercises you<br/>
        Should know...
      </Typography>

      <Box position='relative' mb = "72px">

        <TextField
        sx = {{
          input:{fontWeight:'700',border:'none',borderRadius:'4px'},
          width:{lg:'800px',xs:'350px'},
          backgroundColor:'#fff', borderRadius:'40px'
        }}
        height= '76px'
        value ={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())} //so that 'Squat' & 'squat' give same results on search
        placeholder='Search Exercises'
        type='text'/>

        <Button className="search-btn"
        sx = {{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'20px',xs:'14px'},
          height:'56px',
          position:'absolute',  //After this our button was slightly offcentered and went a bit to Right
          right:'0'             //So we did Right:'0' to balance it out
        }}
        
        onClick={handleSearch}>
            Search
        </Button>
      </Box>

      <Box sx = {{position:'relative', width:'100%',p:'20px'}}>
        <HorizontalScrollbar
        data = {bodyParts}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
        isBodyParts
        />
      </Box>

    </Stack>
  )
}

export default SearchExercises