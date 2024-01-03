import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieList = () => {
    const { movieTitle, movieResult } = useSelector((store) => store.gpt);
    if (!movieResult) return null;
    return (
        <div className="absolute top-[20%] mx-[4%] bg-black bg-opacity-60 my-[4%] w-[90vw] h-[70vh]">
            {
                movieTitle.map((movie, index) => <MovieList className="relative" key={movie} title={movie} movies={movieResult[index]} />)
            }
        </div>
    )
}
export default GptMovieList;