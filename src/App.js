
import './App.css';
import React,{useState} from 'react';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './component/Filter';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Trailer from './component/Trailer';



function App() {

  const [TitleFilter, setTitleFilter] = useState('')
  const [RateFilter, setRateFilter] = useState(0)

  const [movie,setMovie]=useState([
    {
    title:"Batman",
    rate:5, 
    posterUrl:'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg',
    description:"Justice Society of America, All-Star Squadron. Bruce Wayne, alias Batman, est un super-héros de fiction appartenant à l'univers de DC Comics. ... Malgré sa réputation de héros solitaire, il sait s'entourer d'alliés, comme Robin, son majordome Alfred Pennyworth ou encore le commissaire de police James Gordon."
    ,
    trailerLink:'https://www.youtube.com/embed/HsWlgInAdu0',
  },
  {
    title:'La la Land',
    rate: 3,
    posterUrl:'https://www.movies.ch/db_data/movies/lalaland/artwrk/ki_l/510_01_-_OV_705x1015_4f.jpg',
    description:' is a 2016 American musical romantic drama film written and directed by Damien Chazelle. It stars Ryan Gosling as a jazz pianist and Emma Stone as an aspiring actress, who meet and fall in love while pursuing their dreams in Los Angeles.',
    trailerLink:'https://www.youtube.com/embed/vOBtJWG_KlI',
  }, 
  {
    title:'Joker',
    rate: 2,
    posterUrl:'https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/421a4e4c-1931-4907-906b-06946a6b1c5d/1200x680_joker.jpg',
    description:" Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors qu'il ère dans les rues de la ville déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
    trailerLink:'https://www.youtube.com/embed/OoTx1cYC5u8',
  },
])

const handleAdd=(newmovie)=>{
  setMovie([...movie,newmovie]);
}

  return (
    <div className='app'>
      <Router>
      <Route exact path='/'>
      <AddMovie handleAdd={handleAdd} />
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} RateFilter={RateFilter}  />
      <MovieList  movie={movie} TitleFilter={TitleFilter} RateFilter={RateFilter}/>
      </Route>
      
      <Route path='/Trailer/:title' render={(props) => <Trailer movie={movie} {...props} />}  />
      
       </Router>
    
      
     
     </div>
    
  );
}


export default App;
