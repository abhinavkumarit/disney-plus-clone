import React from 'react'

export default function HeaderItems({name,Icon}) {
  return (
    <div className='flex items-center gap-3 text-white text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'>
      <Icon/>
      <p className=''>{name}</p>
    </div>
  )
}
