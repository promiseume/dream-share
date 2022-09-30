import React from "react";
import "./dreamShare.css";

export default function DreamShare({ movies }) {
  return (
    <section className="dream-share">
      <h3>How Dreamshare works?</h3>
      <div className="movies">
        {movies &&
          movies.map((movie) => (
            <div className="movie">
              <img src={movie.posterURLs.original} alt={movie.originalTitle} />
              <div className="content">
                <p>{movie.tagline}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
