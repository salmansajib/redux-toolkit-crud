import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

function MovieInput() {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie) {
      dispatch(addMovie(newMovie.trim().replace(/\s+/g, " ")));
      setNewMovie("");
    }
  };

  return (
    <form onSubmit={handleAddMovie}>
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1"
      />
      <button className="ml-2 bg-gray-900 text-neutral-50 px-3 py-1 rounded-md">
        Add Movie
      </button>
    </form>
  );
}

export default MovieInput;
