import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./MovieDetail.css";

export default function MovieDetail() {
  const location = new URLSearchParams(useLocation().search);
  const movieId = location.get("movie_id");
  const URL_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ddaa7eab8ddef7d961e6e7ac18ca6ccb&movie_id=453395`;

  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    axios.get(URL_API).then((res) => setMovieDetail(res.data));
  }, [movieId]);

  console.log(movieDetail);
  return (
    <main className="MovieDetail">
      {movieDetail && (
        <section className="cover">
          <div className="cover__image">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              alt=""
            />
          </div>
          <div className="cover__details">
            <h1>{movieDetail.title}</h1>
            <h4>{movieDetail.release_date}</h4>
            <h5>
              {movieDetail.genres.map((genre) => (
                <span>{genre.name}</span>
              ))}
            </h5>
            <p>{movieDetail.overview}</p>
            <div>algun datos mas</div>
          </div>
        </section>
      )}
    </main>
  );
}
