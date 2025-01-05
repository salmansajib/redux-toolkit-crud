import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, name: "Iron Man 3" },
    { id: 2, name: "The Avengers" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const lastMovie = state.movies[state.movies.length - 1];
      const newId = lastMovie ? lastMovie.id + 1 : 1;
      const newMovie = { id: newId, name: action.payload };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {},
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
