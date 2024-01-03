import SearchIcon from '@mui/icons-material/Search';
import useTmdbMovieFetch from '../hooks/useTmdbMovieFetch';
import { useRef } from 'react';
import ShimmerUi from './ShimmerUi';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const { handleGptSearch, shimmer } = useTmdbMovieFetch(searchText);
    return (
        <div className='absolute w-[100%] z-20 top-[5%] lg:top-[10%] md:top-[7%] sm:top-[4%]'>
            <div className="mt-5 mb-5 flex w-full justify-center items-center z-20">
                <SearchIcon className="text-red relative left-7" />
                <input
                    className="input w-1/2 shadow-md md:pl-10 md:p-3 pl-8 p-2 sm:pl-9 md:text-lg sm:p-  rounded-lg focus-visible:outline-none "
                    type="search"
                    ref={searchText}
                    placeholder="How can Netflix GPT help you today?"
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            handleGptSearch();
                        }
                    }}
                />
            </div>
            {shimmer && <ShimmerUi></ShimmerUi>}
        </div>
    )
}
export default GptSearchBar;