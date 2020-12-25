import React,{useState} from 'react';
import Rating from './Rating'

const Filter = ({ setTitleFilter, setRateFilter,RateFilter}) => {
    return (
    
            <div className='filter'>
        <input type="text" placeholder="Search for a movie..." 
        onChange={(e) => setTitleFilter(e.target.value)}/> 
        <Rating RateFilter={RateFilter} setRateFilter={setRateFilter}   />
    
            </div>
           
       
    )
}

export default Filter