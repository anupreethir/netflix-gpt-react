import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlaying);
    if (!movies) return null;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoBackground movieId={id}>
                <VideoTitle title={original_title} overview={overview} />
            </VideoBackground>
        </div>
    );
};

export default MainContainer;
