import React, { useState, useEffect, useRef } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { HiPlay } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Slider() {

    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef(null);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()
            .then((res) => {
                console.log("Trending Movies:", res.data.results);
                setMovieList(res.data.results);
            })
            .catch((error) => {
                console.error("Trending API Error:", error);
            });
    };

    const sliderRight = () => {
        elementRef.current?.scrollBy({
            left: window.innerWidth,
            behavior: "smooth",
        });
    };

    const sliderLeft = () => {
        elementRef.current?.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">

            {/* Left Arrow */}
            <button
                onClick={sliderLeft}
                aria-label="Previous slide"
                className="
                    hidden md:flex
                    absolute
                    left-2
                    top-1/2
                    -translate-y-1/2
                    z-20
                    h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-black/50
                    text-white
                    hover:bg-black/80
                    transition
                "
            >
                <HiChevronLeft className="text-3xl" />
            </button>


            {/* Right Arrow */}
            <button
                onClick={sliderRight}
                aria-label="Next slide"
                className="
                    hidden md:flex
                    absolute
                    right-2
                    top-1/2
                    -translate-y-1/2
                    z-20
                    h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-black/50
                    text-white
                    hover:bg-black/80
                    transition
                "
            >
                <HiChevronRight className="text-3xl" />
            </button>


            {/* Slider */}
            <div
                ref={elementRef}
                className="
                    flex
                    w-full
                    overflow-x-auto
                    scroll-smooth
                    scrollbar-none
                    snap-x
                    snap-mandatory
                "
            >

                {movieList.map((movie) => {

                    const title = movie.title || movie.name || "Trending";

                    const description =
                        movie.overview ||
                        "Watch this trending movie now.";

                    return (
                        <div
                            key={movie.id}
                            className="
                                relative
                                min-w-full
                                shrink-0
                                snap-start
                                px-2
                                sm:px-4
                                md:px-6
                            "
                        >

                            {/* Movie Image */}
                            <img
                                src={
                                    movie.backdrop_path
                                        ? IMAGE_BASE_URL + movie.backdrop_path
                                        : "/placeholder-movie.jpg"
                                }
                                alt={title}
                                className="
                                    w-full
                                    h-[180px]
                                    sm:h-[250px]
                                    md:h-[350px]
                                    lg:h-[450px]
                                    object-cover
                                    object-center
                                    rounded-md
                                "
                            />


                            {/* Dark Gradient Overlay */}
                            <div className="
                                absolute
        inset-0
        rounded-md
        bg-gradient-to-t
        from-black
        via-black/40
        to-transparent
                            " />


                            {/* Movie Information */}
                            <div className="
                                absolute
                                bottom-6
                                sm:bottom-10
                                md:bottom-14
                                left-6
                                sm:left-10
                                md:left-14
                                max-w-[75%]
                                md:max-w-[550px]
                                text-white
                            ">

                                {/* Title */}
                                <h1 className=" text-[24px]
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-bold
    mb-2">
                                    {title}
                                </h1>


                                {/* Rating + Date */}
                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                    text-xs
                                    sm:text-sm
                                    text-gray-300
                                    mb-2
                                ">
                                    <span>
                                        ⭐ {movie.vote_average?.toFixed(1)}
                                    </span>

                                    <span>
                                        {movie.release_date?.slice(0, 4)}
                                    </span>
                                </div>


                                {/* Description */}
                                <p className="
                                    hidden
                                    sm:block
                                    text-xs
                                    md:text-sm
                                    text-gray-300
                                    line-clamp-2
                                    mb-4
                                ">
                                    {description}
                                </p>


                                {/* Buttons */}
                                <div className="flex gap-3 mt-2">

                                    <button
    className="
        group
        flex
        items-center
        gap-2
        rounded-md
        bg-white
        px-5
        py-2.5
        text-sm
        font-semibold
        text-black
        shadow-lg
        transition-all
        duration-200
        hover:scale-105
        hover:bg-gray-200
        active:scale-95
    "
>
    <HiPlay className="text-lg transition-transform group-hover:scale-110" />
    <span>Play</span>
</button>

                                    <button className="
                                        rounded-md
                                        bg-gray-600/80
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        text-white
                                        hover:bg-gray-500
                                        transition
                                    ">
                                        + Watchlist
                                    </button>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}