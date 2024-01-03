import { addGptResults } from "../utils/GptSlice";
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from "react-redux";
import { useState } from "react";

const useTmdbMovieFetch = (searchTextRef) => {
    const dispatch = useDispatch();
    const [shimmer, setShimmer] = useState(false);

    const fetchTmdbMovie = async (movieName) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results.filter(movie => movie.title === movieName);
    }
    const handleGptSearch = async () => {
        setShimmer(true);
        const gptQuery = 'Act as a movie recommendation system and suggest some movies for the query' + searchTextRef.current.value + '. only give me names of 5 movies, comma seperated like the example result given. Example Result: Bombay,Uyire,leo,kaapa,Elemental'
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResult, "gpt result")
        if (!gptResult.choices) {
            setShimmer(false);
            <h1>No movies found</h1>
            return;
        };
        const gptMovies = gptResult.choices[0]?.message?.content.split(', ');
        const PromiseArray = gptMovies.map((movie) => fetchTmdbMovie(movie));
        const tmdbResults = await Promise.all(PromiseArray);
        dispatch(addGptResults({ movieTitle: gptMovies, movieResult: tmdbResults }));
        // show shimmer ui while loading
        setShimmer(false);
        console.log(tmdbResults);
    }
    return { handleGptSearch, shimmer };
}
export default useTmdbMovieFetch;