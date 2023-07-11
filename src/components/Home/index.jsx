import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../MovieCard";
import "./Home.css";

export default function Home() {
  const API_KEY = "ddaa7eab8ddef7d961e6e7ac18ca6ccb";
  const URL_API =
    "https://api.themoviedb.org/3/movie/popular?api_key=ddaa7eab8ddef7d961e6e7ac18ca6ccb";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(URL_API).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  console.log(movies);
  return (
    <main>
      <h1>Peliculas play</h1>
      <section className="movies-list">
        {movies.length &&
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                tittle={movie.title}
                image={movie.poster_path}
                description={movie.overview}
              />
            );
          })}
      </section>
    </main>
  );
}
