
import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard({ movie, onClick }) {
  return (
    <div
      onClick={() => onClick?.(movie)}
      className="
        group
        relative
        shrink-0
        w-[120px]
        sm:w-[140px]
        md:w-[180px]
        lg:w-[200px]
        cursor-pointer
        overflow-hidden
        rounded-xl
        bg-gray-900
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
      "
    >
      {/* Poster */}
      <img
        src={
          movie?.poster_path
            ? IMAGE_BASE_URL + movie.poster_path
            : "/placeholder-movie.jpg"
        }
        alt={movie?.title || "Movie"}
        className="
          w-full
          aspect-[2/3]
          object-cover
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      {/* Dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Hover information */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          translate-y-3
          p-3
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <h3 className="line-clamp-2 text-sm font-semibold text-white">
          {movie?.title || movie?.name}
        </h3>

        <div className="mt-1 flex items-center gap-2 text-xs text-gray-300">
          <span>⭐ {movie?.vote_average?.toFixed(1)}</span>
          <span>{movie?.release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
}



// import React from 'react'
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

// export default function MovieCard({movie}) {

//     // console.log("ehllo")
//     // console.log(movie)


//   return (
//     <>
//           <img src={IMAGE_BASE_URL+movie.poster_path} 
//         className='w-[110px] md:w-[200px] rounded-lg
//         hover:border-[3px] border-gray-400 cursor-pointer
//         hover:scale-110 transition-all duration-150 ease-in'/>
//         {/* movieCard */}
//     </>
//   )
// }


// export default function MovieCard({ movie }) {

//     console.log("MovieCard received:", movie);

//     return (
//         <div>
//             movieCard
//         </div>
//     )
// }