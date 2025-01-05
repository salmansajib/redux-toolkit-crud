import { useSelector } from "react-redux";

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-semibold text-gray-900">Movie List</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
