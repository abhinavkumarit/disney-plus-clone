import React from 'react';
import GenresList from '../constant/GenresList.jsx';
import MovieList from './MovieList.jsx';

export default function GenreMovieList() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16">

      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <section key={item.id} className="mb-8">

              {/* Genre heading */}
              <div className="mb-2 flex items-center justify-between">
                <h2 className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  text-white
                ">
                  {item.name}
                </h2>

                <button className="
                  text-sm
                  text-gray-400
                  hover:text-white
                  transition
                ">
                  View All →
                </button>
              </div>

              {/* Movies */}
              <MovieList
                genreId={item.id}
                index_={index}
              />

            </section>
          )
      )}

    </div>
  );
}