import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const isTrailerVideo = useSelector((store) => store.movies.trailer);
    const getTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + `${movieId}` + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterTrailer = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        !isTrailerVideo && getTrailer();
    }, []);
}
export default useTrailerVideo;