// import React from 'react'
import React, { useRef, useEffect, useState } from 'react';

import GlobalApi from '../services/GlobalApi.jsx'
import MovieCard from './MovieCard.jsx'
// import useEffect from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from './HrMovieCard.jsx';
export default function MovieList({genreId, index_}) {

  // console.log("MovieList rendered");
  // console.log("genreId:", genreId);

  const [movieList, setMovieList] = useState([]);
    const screenWidth = window.innerWidth;

    useEffect(()=>{
        getMovieByGenreId()

    },[])

    const elementRef=useRef();

      const sliderRight=(element)=>{
        element.scrollLeft += screenWidth-110;
    }
    const sliderLeft=(element)=>{
      console.log("elementRef.current:", elementRef.current);
        element.scrollLeft -= screenWidth-110;
    }


    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then((res) => {

        setMovieList(res.data.results);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
    }


  return (
    <div className='relative'>
                <HiChevronLeft className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `} onClick={() => sliderLeft(elementRef.current)} />
    
      <div ref={elementRef} className='flex overflow-x-scroll gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5'>
              {/* <h1>MovieList Component</h1> */}

       {movieList.map((item, index) => (
        index_ % 3 === 0
          ? <HrMovieCard key={index} movie={item} />
          : <MovieCard key={index} movie={item} />
      ))}
    
    </div>


                    <HiChevronRight className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`} onClick={() => sliderRight(elementRef.current)} />
      

    
    </div>
    
  )
}
