import React, { use, useEffect,useState } from "react";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// Ensure the API key is loaded correctly

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  },
};
// Ensure the API options are set up correctly


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[movieList, setMovieList] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
  try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      // throw new Error("Network response was not ok");
      
      if(!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if(data.response === "False") {
        setErrorMessage(data.Error||'No movies found');
        setMovieList([]);
        return;
      }
      setMovieList(data.results||[]);
  }catch (error) {
    console.error("Error fetching movies:", error);
    setErrorMessage("Failed to fetch movies. Please try again later.");
} finally {
    setIsLoading(false);
  }
}
  useEffect(() => {
    fetchMovies();
  },[]);

  return (
    <main>
      <div className="pattern">

        <div className="wrapper">
          <header>
            <img src="./hero-img.png" alt="hero banner" />
          
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without Hassle</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
        </header>
        <section className="all-movies">
              <h2 className="mt-[40px]">All Movies</h2>

              {isLoading ? (
                <p className="text-white">Loading movies...</p>
              ) : 
              errorMessage ? (
                <p className="text-white">{errorMessage}</p>
              ) : (
                <ul>
                  {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </ul>
              )}
              {errorMessage && (
                <p className="text-white">{errorMessage}</p>
              )}
            </section>
        </div>
      </div>
    </main>
  );
}

export default App;