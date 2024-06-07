import Image from 'next/image'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePeopleOutline, MdOutlineOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { CgMenuGridO } from "react-icons/cg";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { HiBell } from "react-icons/hi2";
import { signOut, useSession } from 'next-auth/react';
const Header = () => {
    const {data: session} = useSession();
    return (
    <div className=" bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
        {/* Left */}
        <div className="flex min-w-fit">
            <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
            height={40}
            width={40}
            ></Image>
        </div>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
            <IoIosSearch size={20} />
            <input className="hidden lg:inline-flex bg-transparent focus:outline-none" type="text" placeholder="search Facebook"></input>
        </div>
        {/* Center */}
        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <AiOutlineHome className="mx-auto" size={25} />
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <MdOutlinePeopleOutline className="mx-auto" size={25} />
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <MdOutlineOndemandVideo className="mx-auto" size={25} />
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <CiShop className="mx-auto" size={25} />
                </div>
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <GrGroup className="mx-auto" size={25} />
                </div>
            </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end min-w-fit space-x-2">
            <CgMenuGridO size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" />
            <BiSolidMessageRoundedDots size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" />
            <HiBell size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" />
            <Image 
                onClick={signOut}
                src={session?.user.image}
                height={40}
                width={40}
                className="rounded-full cursor-pointer"
                ></Image>
            <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">{session?.user.name.split(" ")[0]}</p>
        </div>
    </div>
  )
}

export default Header