import React , {useEffect , useState} from 'react'
import Movie from "./Components/Movie";
import ReactLoading from 'react-loading';


const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=31e97290a9c7ef2f3b7ca180465c44dc";


const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=31e97290a9c7ef2f3b7ca180465c44dc&query="
function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [done, setDone] = useState(undefined)

  const getMovies= (API)=>{
    fetch(API).then((res)=>res.json())
        .then((data)=>{
          console.log("==>>" , data.results)
          setMovies(data.results)
        })
  }

  useEffect(()=>{
    setTimeout(() => {
      getMovies(FEATURED_API)
      setDone(true)
    }, 2000);
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(search){
      getMovies(SEARCH_API + search)
    }
    }

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <>
    {!done ?
      <div className="loading">
          <span className="loading-head">🎬 React-Movie-App</span>
          <ReactLoading type={"cylon"} color={"white"} height={100} width={100}/>
      </div>
    :
      <div>
        <header>
        <span className="head">  
        <img  className="main-image" src="http://api.whealthylife.in/static/1620884512636-movie.png"/><span className="head-span">Movie-App</span>
        </span>
        <form onSubmit={handleSubmit}>
          <input className="search" type="text" placeholder="Search..." value={search} onChange={handleChange}/>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie =>
        <Movie key={movie.id} {...movie}/>
        )}
    </div>
      </div>
    }      
    </>
  );
}

export default App;
