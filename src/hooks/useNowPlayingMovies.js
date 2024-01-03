import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const isNowPlayingMovies = useSelector((store) => store.movies.nowPlaying);
    const getMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
        !isNowPlayingMovies && getMovieList();
    }, []);
}

export default useNowPlayingMovies;