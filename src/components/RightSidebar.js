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
        <Contacts src="https://pics.craiyon.com/2023-11-02/de36503b85074684ae64e3eda0d93a07.webp" name="Adelaide Buchanan" status="Online"/>
        <Contacts src="https://pics.craiyon.com/2023-10-22/6e333c19a5b04f52bf1933df96ed677f.webp" name="Savannah Poole" status="Online"/>
        <Contacts src="https://pics.craiyon.com/2023-10-14/5e672f76894a48bba8209213a20c4c98.webp" name="Yasin Whitney" status="Offline"/>
        <Contacts src="https://pics.craiyon.com/2023-09-28/e15881b0e430469da6271ef87dc6736a.webp" name="Flora Foley" status="Online"/>
    </div>
  )
}

export default RightSidebar