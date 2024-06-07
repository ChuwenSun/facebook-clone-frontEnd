import React from 'react'
import { IoIosMore, IoIosVideocam } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Contacts from "./Contacts";
const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
            <p className="flex text-lg font-semibold flex-grow">Contacts</p>
            <div className="flex space-x-1 px-2">
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"><IoIosVideocam /></div>
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"><IoIosSearch /></div>
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"><IoIosMore /></div>
            </div>
        </div>
        <Contacts src="https://www.craiyon.com/image/pmlZFe-ATVuQEDHDYfsTwg" name="Adelaide Buchanan" status="Online"/>
        <Contacts src="https://www.craiyon.com/image/ZtVEv-w-Ssq7kptQjtV99w" name="Savannah Poole" status="Online"/>
        <Contacts src="https://www.craiyon.com/image/wWjBmnoXSLCZVoZllu5DYA" name="Yasin Whitney" status="Offline"/>
        <Contacts src="https://www.craiyon.com/image/5v6cm2xGRemZergApbs7nQ" name="Flora Foley" status="Online"/>
    </div>
  )
}

export default RightSidebar