import { NavLink, Route } from "react-router-dom/cjs/react-router-dom.min";
import MovieDetails from "../MovieDetails/index";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Route path="/movies/:movieId">
        <MovieDetails movies={movies} />
      </Route>
    </div>
  );
}

export default Movies;
