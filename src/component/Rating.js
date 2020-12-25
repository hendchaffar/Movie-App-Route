import React from 'react';

const Rating = ({ RateFilter, setRateFilter }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span  key={i} onClick={()=>setRateFilter(i) } >
            ★
          </span>
       
        );
      } else {
        starsArray.push(
          <span key={i} onClick={() => setRateFilter(i)}>
            ☆
          </span>
        );
       
      }
    }
    return starsArray;
  };
  return <div>{stars(RateFilter)}</div>;
};

Rating.defaultProps = {
  setRateFilter: () => {},
  RateFilter:1,
};
export default Rating;