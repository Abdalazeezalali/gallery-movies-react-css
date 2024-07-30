import React, { useState } from 'react'
import { useEffect } from 'react'
import MovieCard from "./MovieCard"
import './App.css'
import searchIcon from './search.svg'
const API__URl='https://www.omdbapi.com?apikey=36bdfcf3'
const movie1={
    Poster: "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    ,Title: "Italian Spiderman"
    ,Type: "movie"
    ,Year: "2007"
    ,imdbID: "tt2705436"
}
const App = () => {
    const [movies,setMovies]=useState([])
    const [searchTerm,setSearchTerm]=useState("")
    const searchMovies=async (title)=>{
        const response=await fetch(`${API__URl}&s=${title}`)
        const data=await response.json()
        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovies('spiderman')
    },[])
    return (
    <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input type="" name="" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search for movies' />
            <img src={searchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
        </div>
        {
            movies?.length>0 ?(
                <div className='container'>
                {movies.map((movie,index)=>(
                    <MovieCard movie1={movie} key={index}/>
                ))}
        </div>
            ):(
                <div className='empty'>
                <h2>No movies found</h2>
                </div>
            )
        }
    </div>
    )
}

export default App
