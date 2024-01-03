import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerUi from "./ShimmerUi";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log(movies, "movies");
    if (!movies) return <ShimmerUi></ShimmerUi>;
    return (
        <div className="bg-black ">
            <div className=" -mt-[5%] sm:-mt-[7%] md:-mt-[5%] lg:-mt-[8%]  z-10 px-10 relative">
                <MovieList title={"Latest Release"} movies={movies.nowPlaying} />
                <MovieList title={"Top Rated Movies"} movies={movies.topRated} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            </div>
        </div>
    )
}
export default SecondaryContainer;