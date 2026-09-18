import React from 'react'; 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780/"; 
export default function HrMovieCard({ movie, onClick }) { 
  return ( 
  <div onClick={() => onClick?.(movie)} className=" group relative shrink-0 w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-all duration-300 hover:scale-105 " > 
  <img src={ movie?.backdrop_path ? IMAGE_BASE_URL + movie.backdrop_path : "/placeholder-movie.jpg" } alt={movie?.title || "Movie"} className=" h-[125px] sm:h-[145px] md:h-[180px] lg:h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110 " /> 
  {/* Gradient */} <div className=" absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent " /> 
  {/* Movie information */} <div className="absolute bottom-0 left-0 right-0 p-3"> 
    <h2 className="line-clamp-1 text-sm sm:text-base font-bold text-white"> {movie?.title || movie?.name} </h2> 
    <div className="mt-1 flex items-center gap-2 text-xs text-gray-300"> 
      <span>⭐ {movie?.vote_average?.toFixed(1)}</span> <span>{movie?.release_date?.slice(0, 4)}</span> 
      </div> 
      </div> 
      </div> 
      ); 
    }


















// import React from 'react'
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
// function HrMovieCard({movie}) {
//   return (
//        <section className='hover:scale-110 transition-all duration-150 ease-in'>
//           <img src={IMAGE_BASE_URL+movie.backdrop_path} 
//         className='w-[110px] md:w-[260px] rounded-lg
//         hover:border-[3px] border-gray-400 cursor-pointer
//         '/>
//         {/* movieCard */}
//         <h2 className='text-white w-[110px] md:w-[260px] font-bold mt-2'>{movie.title}</h2>
//     </section>
//   )
// }

// export default HrMovieCard



