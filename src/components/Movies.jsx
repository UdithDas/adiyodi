import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';

const Movies = () => {
    const color = blue[400];
    const color2 = blueGrey[900];
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    var [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3006/movies")
            .then(response => {
                console.log(response.data)
                setMovies(movies = response.data)
            })
            .catch(err => console.log(err))
    })
    // const deleteStudent=(id)=>{
    //     console.log("delete clicked"+id);
    //     axios.delete("http://localhost:3005/students/"+id)
    //     .then(response=>{
    //         alert("Deleted")
    //         window.location.reload(false)
    //     })
    
    
  return (
    <div>
      <br></br>
            <Typography variant='h3'>Movies</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Year</StyledTableCell>
                            <StyledTableCell>Genre</StyledTableCell>
                            <StyledTableCell>Rating</StyledTableCell>
                            <StyledTableCell>Director</StyledTableCell>
                            <StyledTableCell>Producer</StyledTableCell>
                            <StyledTableCell>Cast</StyledTableCell>
                            <StyledTableCell>Update</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.movie}</TableCell>
                                <TableCell>{value.year}</TableCell>
                                <TableCell>{value.genre}</TableCell>
                                <TableCell>{value.rating}</TableCell>
                                <TableCell>{value.director}</TableCell>
                                <TableCell>{value.producer}</TableCell>
                                <TableCell>{value.cast}</TableCell>
                                <TableCell>
                                    <Button variant='contained' >Update</Button>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
    
    </div>
  )
                    }

export default Movies