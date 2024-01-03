// import useTrailerVideo from "../hooks/useTrailerVideo";
// import { useSelector } from 'react-redux';

// const VideoBackground = ({ movieId }) => {
//     useTrailerVideo(movieId);
//     const trailerVideo = useSelector((store) => store.movies?.trailer);

//     return (

//         <div className="overflow-hidden">
//             <iframe className="w-[100%] bg-[70%]-center  aspect-video"
//                 src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
//             </iframe>
//         </div>
//     )
// }
// export default VideoBackground;


import React from 'react';
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, children }) => {
    useTrailerVideo(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailer);

    return (
        <div className=" z-10 relative overflow-hidden">
            <iframe
                className="w-full bg-[70%]-center aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            {children}
        </div>
    );
};

export default VideoBackground;
