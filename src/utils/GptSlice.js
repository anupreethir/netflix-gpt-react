import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GptSlice",
    initialState: {
        showGptSearch: false,
        movieTitle: null,
        movieResult: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptResults: (state, action) => {
            const { movieTitle, movieResult } = action.payload;
            state.movieResult = movieResult;
            state.movieTitle = movieTitle;
        }

    }
})
export const { toggleGptSearch, addGptResults } = GptSlice.actions;
export default GptSlice.reducer;
