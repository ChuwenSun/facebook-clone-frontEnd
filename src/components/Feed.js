import React from 'react'
import CreatePost from './CreatePost'
import Posts from "./Posts"
const Feed = () => {
  return (
    // flex-grow use maximum space in the middle between both side bars, height 100vh, scrollable down
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
        {/* size different based on screen */}
        <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
            {/* Create Post Box */}
            <CreatePost />
            {/* Posts */}
            <Posts />
        </div>
    </div>
  )
}

export default Feed