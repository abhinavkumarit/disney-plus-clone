import pixar from '../assets/pixar.png';
import marvel from '../assets/marvel.png';
import disney from '../assets/disney.png';
import starwars from '../assets/starwar.png';
import nationalGeographic from '../assets/nationalG.png';

import pixarV from '../videos/pixar.mp4';
import marvelV from '../videos/marvel.mp4';
import disneyV from '../videos/disney.mp4';
import starwarsV from '../videos/star-wars.mp4';
import nationalGeographicV from '../videos/national-geographic.mp4';

export default function ProductionHouse() {

    const productionHouseList = [
        {
            id: 1,
            image: pixar,
            video: pixarV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: disney,
            video: disneyV
        },
        {
            id: 4,
            image: starwars,
            video: starwarsV
        },
        {
            id: 5,
            image: nationalGeographic,
            video: nationalGeographicV
        }
    ];

    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-6">

            {/* Section Heading */}
            <h2 className="
                mb-4
                text-lg
                sm:text-xl
                md:text-2xl
                font-bold
                text-white
            ">
                Explore Disney
            </h2>


            {/* Production Houses */}
            <div className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-5
                gap-3
                sm:gap-4
                md:gap-5
            ">

                {productionHouseList.map((item) => (

                    <div
                        key={item.id}
                        className="
                            group
                            relative
                            aspect-video
                            overflow-hidden
                            rounded-xl
                            border-2
                            border-gray-700
                            bg-gray-900
                            cursor-pointer
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:border-gray-400
                            hover:shadow-2xl
                        "
                    >

                        {/* Background Video */}
                        <video
                            src={item.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                                opacity-0
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                            "
                        />


                        {/* Dark Overlay */}
                        <div className="
                            absolute
                            inset-0
                            z-10
                            bg-black/20
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                        " />


                        {/* Production House Logo */}
                        <div className="
                            relative
                            z-20
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            bg-gray-900
                            transition-all
                            duration-500
                            group-hover:bg-transparent
                            group-hover:opacity-80
                        ">
                            <img
                                src={item.image}
                                alt="Production house"
                                className="
                                    w-[70%]
                                    max-h-[70%]
                                    object-contain
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}