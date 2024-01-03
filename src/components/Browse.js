import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch"
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const showGptButton = useSelector((store) => store.gpt.showGptSearch);
    return (
        <div>
            <Header></Header>
            {showGptButton ? (<GptSearch />) : <>
                <MainContainer></MainContainer>
                <SecondaryContainer></SecondaryContainer>
            </>}

        </div>
    )
};
export default Browse;