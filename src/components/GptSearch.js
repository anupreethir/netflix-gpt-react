import GptSearchBar from './GptSearchBar';
import login_bg from "../assests/login_bg.jpg";
import GptMovieList from './GptMovieList';

const GptSearch = () => {
    return (
        <div className=''>
            <div className="fixed">
                <img src={login_bg} alt="login-background" className="w-screen bg-opacity-80 bg-gradient-to-b from-black z-[-30] h-screen object-cover" />
            </div>
            <GptSearchBar></GptSearchBar>
            <GptMovieList></GptMovieList>

        </div>
    )
}
export default GptSearch;