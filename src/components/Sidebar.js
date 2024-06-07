import React from 'react'
import Image from 'next/image'
import { ImUsers } from "react-icons/im";
import SidebarItem from './SidebarItem';
import {MdGroup} from "react-icons"
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { useSession } from 'next-auth/react';
const Sidebar = () => {
  const {data: session } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
        <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image 
            src={session?.user.image}
            height={40}
            width={40}
            className="rounded-full cursor-pointer"></Image>
            <p className="hidden sm:inline-flex font-medium">{session?.user.name}</p>
        </div>
        <SidebarItem Icon={ImUsers} value="Friends"/>
        <SidebarItem Icon={HiUserGroup} value="Groups"/>
        <SidebarItem Icon={AiOutlineShop} value="Marketplace"/>
        <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch"/>
        <SidebarItem Icon={BsStopwatch} value="Memories"/>
        <SidebarItem Icon={MdExpandMore} value="See More"/>
    </div>
  )
}

export default Sidebar