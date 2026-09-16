import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import GlobalApi from '../services/GlobalApi';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Slider() {

    const [movielist, setMovieList] = useState([]);

    const elementRef=useRef();

    const screenWidth = window.innerWidth;
    
    useEffect(() => {
        getTrendingMovies();
    }, []);



    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos().then((res) => {
            console.log(res.data);
            setMovieList(res.data.results);

        });
    };

    const sliderRight=(element)=>{
        element.scrollLeft += screenWidth-110;
    }
    const sliderLeft=(element)=>{
        element.scrollLeft -= screenWidth-110;
    }


    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
              <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-scroll w-full px-16 py-4 scroll-smooth scrollbar-none' ref={elementRef}>
                {movielist.map((movie) => (
                    <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ))}
            </div>
          

        </div>

    );
}