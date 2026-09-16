// import React from 'react'
import pixar from '../assets/pixar.png'
import marvel from '../assets/marvel.png'
import disney from '../assets/disney.png'
import starwars from '../assets/starwar.png'
import nationalGeographic from '../assets/nationalG.png'   
import pixarV from '../videos/pixar.mp4'
import marvelV from '../videos/marvel.mp4'
import disneyV from '../videos/disney.mp4'
import starwarsV from '../videos/star-wars.mp4'
import nationalGeographicV from '../videos/national-geographic.mp4'


export default function ProductionHouse() {

    const productionHouseList=[
        {
            id:1,
            image:pixar,
            video:pixarV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:disney,
            video:disneyV
        },
        {
            id:4,
            image:starwars,
            video:starwarsV
        },
        {
            id:5,
            image:nationalGeographic,
            video:nationalGeographicV
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transation-all duration-300 ease-in-out cursor-pointer'>
            <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 z-0 rounded-md opacity-0 hover:opacity-50' />
            <img src={item.image} alt="production-house" className='w-full z-[1] opacity-100' />
        </div>
      ))}
    </div>
  )
}
