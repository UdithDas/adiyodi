import {Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovie = () => {
   var [movies,setMovies]=useState({
    movie:"",
    year:"",
    genre:"",
    rating:"",
    director:"",
    producer:"",
    cast:""
   })
   const handleChange=(e)=>{
    const {name,value}=e.target
    setMovies({...movies,[name]:value})
    console.log(movies)
   }
   const saveData=()=>{
    console.log("Button clicked");
    axios.post("http://localhost:3006/movies",movies)
    .then(response=>{
        alert("successfully added")
    })
    .catch(error=>{
        alert("failed")
    })
   }
  return (
        <div>     
      <Typography variant='h5'>ADD MOVIE</Typography><br></br>
      <TextField label='id' variant='outlined' name='id' value={movies.id} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='movie' variant='outlined' name='movie' value={movies.movie} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='year' variant='outlined' name='year' value={movies.year} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='genre' variant='outlined' name='genre' value={movies.genre} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='rating' variant='outlined' name='rating' value={movies.rating} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='director' variant='outlined' name='director' value={movies.director} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='producer' variant='outlined' name='producer' value={movies.producer} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='cast' variant='outlined' name='cast' value={movies.cast} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='success' onClick={saveData}>SUBMIT</Button>
      </div>
    
  )
}

export default Addmovie