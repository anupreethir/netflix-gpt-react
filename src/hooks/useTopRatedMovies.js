import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const isTopRated = useSelector((store) => store.movies.topRated);

    const getMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
        console.log(json);
    };
    useEffect(() => {
        !isTopRated && getMovieList();
    }, []);
}

export default useTopRatedMovies;