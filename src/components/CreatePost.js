import Image from 'next/image'
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { React, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { addPost, selectPost } from "../../public/src/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatePost = () => {
    const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
  
    const handleClick = () => {
      hiddenFileInput.current.click();
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!inputRef.current.value) return;
      const newPost = {
        id: Date.now(), // or any unique identifier
        post: inputRef.current.value,
        name: "James Sun",
        email: "chuwen.sun@yahoo.com",
        profilePic: "https://pics.craiyon.com/2023-09-23/c5378dbcded44eb4897d9a7fc7e58863.webp",
        image: imageToPost,
      };

      inputRef.current.value = "";
      removeImage();
      dispatch(addPost(newPost));
      console.log(response.data);


    };
  
    const addImageToPost = (e) => {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          setImageToPost(e.target.result);
        };
      }
    };
  
    const removeImage = () => {
      setImageToPost(null);
    };
  
    return (
      <div className="bg-white rounded-md shadow-md text-gray-500 p-2 divide-y">
        <div className="flex p-4 space-x-2 items-center">
          <Image
            src="https://pics.craiyon.com/2023-09-23/c5378dbcded44eb4897d9a7fc7e58863.webp"
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
          />
          <form className="flex flex-1">
            <input
              className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
              type="text"
              ref={inputRef}
              placeholder={"What's on your mind, James Sun?"}></input>
            <button hidden onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
            <img src={imageToPost} className="h-10 object-contain" />
            <MdDeleteForever className="h-8 hover:text-red-500" />
          </div>
        )}
        <div className="flex justify-evenly py-2">
          <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
            <HiOutlineVideoCamera className="text-red-500" size={20} />
            <p className="font-semibold text-gray-600">Live Video</p>
          </div>
          <div
            onClick={handleClick}
            className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
            <MdPhotoLibrary className="text-green-500" size={20} />
            <p className="font-semibold text-gray-600">Photo/Video</p>
            <input
              ref={hiddenFileInput}
              onChange={addImageToPost}
              type="file"
              accept="image/*"
              hidden
            />
          </div>
          <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
            <FaRegFaceSmileBeam className="text-yellow-400" size={20} />
            <p className="font-semibold text-gray-600">Feeling/Activity</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreatePost;