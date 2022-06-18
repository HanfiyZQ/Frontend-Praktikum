// import createSlice
import { createSlice } from '@reduxjs/toolkit';
import data from "../../utils/constants/data";

/**
 * Buat slice: untuk mengenerate action dan reducer
 * menerima param object: name, initialState, reducers.
 */

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload);
        },
        // membuat reducer updateMovies untuk update movies
        updateMovies(state, action) {
            state.movies = action.payload;
        },
    },


});

// generate action dan reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, updateMovies };