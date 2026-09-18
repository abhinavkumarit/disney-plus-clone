import { useState } from 'react';

import logo from '../assets/logo.png';
import avatarIcon from '../assets/avatar-icon.png';

import HeaderItems from './HeaderItems';

import {
    HiTv,
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle
} from "react-icons/hi2";

import {
    HiPlus,
    HiOutlineDotsVertical
} from "react-icons/hi";


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
    ];


    const [toggle, setToggle] = useState(false);


    return (

        <header className="
            sticky
            top-0
            z-50
            w-full
            bg-[#090909]/95
            backdrop-blur-md
            border-b
            border-gray-800
        ">

            <div className="
                flex
                items-center
                justify-between
                px-4
                py-3
                sm:px-6
                md:px-10
                lg:px-16
            ">


                {/* LEFT SIDE */}
                <div className="flex items-center gap-5 md:gap-8">

                    {/* Logo */}
                    <img
                        src={logo}
                        className="
                            w-[70px]
                            sm:w-[85px]
                            md:w-[115px]
                            object-contain
                            shrink-0
                        "
                        alt="Disney Plus"
                    />


                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">

                        {menu.map((item) => (

                            <HeaderItems
                                key={item.name}
                                name={item.name}
                                Icon={item.icon}
                            />

                        ))}

                    </nav>


                    {/* MOBILE MENU */}
                    <nav className="flex md:hidden items-center gap-2">

                        {/* First 3 Icons */}
                        {menu.slice(0, 3).map((item) => (

                            <HeaderItems
                                key={item.name}
                                name=""
                                Icon={item.icon}
                            />

                        ))}


                        {/* More Button */}
                        <div className="relative">

                            <button
                                onClick={() => setToggle(!toggle)}
                                aria-label="More menu options"
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    p-2
                                    text-gray-300
                                    hover:bg-white/10
                                    hover:text-white
                                    transition
                                "
                            >
                                <HiOutlineDotsVertical className="text-xl" />
                            </button>


                            {/* Dropdown */}
                            {toggle && (

                                <div className="
                                    absolute
                                    left-0
                                    top-full
                                    mt-2
                                    w-44
                                    overflow-hidden
                                    rounded-lg
                                    border
                                    border-gray-700
                                    bg-[#121212]
                                    shadow-2xl
                                ">

                                    {menu.slice(3).map((item) => (

                                        <div
                                            key={item.name}
                                            onClick={() => setToggle(false)}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                px-4
                                                py-3
                                                text-gray-300
                                                hover:bg-white/10
                                                hover:text-white
                                                transition
                                            "
                                        >

                                            <item.icon className="text-lg" />

                                            <span className="text-sm">
                                                {item.name}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                    </nav>

                </div>


                {/* RIGHT SIDE - USER */}
                <button
                    aria-label="User profile"
                    className="
                        shrink-0
                        rounded-full
                        transition
                        duration-200
                        hover:scale-105
                        focus:outline-none
                        focus:ring-2
                        focus:ring-white/50
                    "
                >

                    <img
                        src={avatarIcon}
                        className="
                            h-8
                            w-8
                            sm:h-9
                            sm:w-9
                            md:h-10
                            md:w-10
                            rounded-full
                            object-cover
                        "
                        alt="User profile"
                    />

                </button>

            </div>

        </header>
    );
}

export default Header;