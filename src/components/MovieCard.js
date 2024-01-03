import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { genre } from "../utils/genre";

const MovieCard = ({ posterPath, description, genresIds }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (!posterPath) return null;

    const getGenresByIds = (ids) => {
        return genre.genres
            .filter((genre) => ids.includes(genre.id))
            .map((genre) => genre.name);
    };

    const genres = getGenresByIds(genresIds);
    const genresWithDots = genres.join(" • ");

    return (
        <div
            className={`group relative overflow-hidden w-[190px] pr-[10px] my-[0.5%] transition-transform transform-gpu ${isHovered ? "scale-125  z-20 mx-[0.5%] h-[300px]" : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img
                    className="max-w-none object-cover w-full transition-transform duration-300"
                    src={IMG_CDN_URL + posterPath}
                    alt="Movie Poster"
                />
                {isHovered && (
                    <div className="absolute bottom-0 left-0 right-0 w-full p-[2%] bg-black bg-opacity-80 text-white overflow-visible">
                        <div className="flex flex-col h-full">
                            <p className="text-[0.6rem] text-left mb-1">{description}</p>
                            <div className="flex-grow"></div>
                            <div className="text-[0.7rem] font-medium">{genresWithDots}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
