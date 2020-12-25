import React from 'react'
import Rating from './Rating'
import './movieCard.css'
import {Link} from 'react-router-dom'
function MovieCard({el}) {

    return (
        <div className='card'>
            <Link to={`/Trailer/${el.title}`} >
            <h2>{el.title}</h2>
            </Link>
            <Rating RateFilter={el.rate} />
            <img style={{width:'200px' }} src={el.posterUrl} />
          
            <br/>
            <p style={{width:'95%'}}>{el.description}</p>
            
        </div>
    )
}

export default MovieCard
