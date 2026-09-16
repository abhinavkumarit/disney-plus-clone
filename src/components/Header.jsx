import { useState } from 'react';
import logo from '../assets/logo.png'
import HeaderItems from './HeaderItems'
import { HiTv, HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle } from "react-icons/hi2";
import { HiPlus, HiOutlineDotsVertical } from "react-icons/hi";
import avatarIcon from '../assets/avatar-icon.png'
function Header() {

    

    const menu = [
        {
            name: 'Home',
            icon: HiHome
        },
        {
            name: 'Search',
            icon: HiMagnifyingGlass
        },
        {
            name: 'Watch List',
            icon: HiPlus
        },
        {
            name: 'Originals',
            icon: HiStar
        },
        {
            name: 'Movies',
            icon: HiPlayCircle
        },
        {
            name: 'Series',
            icon: HiTv
        },
    ]


    const [toggle, setToggle] = useState(false);


    return (
        <div className='flex justify-between items-center p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} className="w-[80px] md:w-[115px] object-cover" alt="Logo" />
                {/* <HeaderItems /> */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        <HeaderItems key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-3'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItems key={index} name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiOutlineDotsVertical} />
                        {toggle ?(
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 underline-offset-8'>
                            {menu.map((item, index) => index < 3 && (
                                <HeaderItems key={index} name={item.name} Icon={item.icon} />
                            ))}

                        </div>
                        ):null}
                    </div>
                </div>

            </div>
            <img src={avatarIcon} className="w-[40px] rounded-full" alt="" />
        </div>
    )
}

export default Header
