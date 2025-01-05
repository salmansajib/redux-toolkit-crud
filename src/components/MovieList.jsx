import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleDeleteMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-semibold text-gray-900">Movie List</h1>

      <ul className="space-y-2">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex items-center justify-between bg-green-100 px-2 py-1 rounded-md border border-gray-200"
          >
            <span className="text-gray-900">{movie.name}</span>
            <button
              onClick={() => handleDeleteMovie(movie.id)}
              className="text-[12px]"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
