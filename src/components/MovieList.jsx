import { useSelector } from "react-redux";

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-900">Movie List</h1>

      {movies.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  );
}

export default MovieList;
