import React,{useState} from 'react'
import MovieCard from './MovieCard'


function MovieList({movie,RateFilter,TitleFilter}) {

    return (
        <div className='liste'>
    {movie
    .filter(el=> el.title.toUpperCase().includes(TitleFilter.toUpperCase().trim()) && el.rate >= RateFilter ).map((el,i)=> <MovieCard el={el} key={i}/>)}
        </div>
    )
}

export default MovieList
