import MovieCard from './MovieCard';
const MovieList = ({ title, movies }) => {
    return (
        movies && (
            <div className=''>
                <h1 className='text-lg text-white font-semibold mb-2 bg-none'>{title}</h1>
                <div className='overflow-x-scroll no-scrollbar'>
                    <div className='flex'>
                        <div className='flex'>

                            {movies.map((movie) => (
                                <MovieCard key={movie.id} posterPath={movie.poster_path} description={movie.overview} genresIds={movie.genre_ids} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};
export default MovieList;
