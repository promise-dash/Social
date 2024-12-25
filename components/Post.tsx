import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">john123</span>
        </div>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/15838266/pexels-photo-15838266/free-photo-of-camping-among-trees-with-city-behind-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          maxime nulla accusantium alias odit soluta, sunt velit aliquam at
          nisi.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <div>
              <button>
                <Image
                  src="/liked.png"
                  width={16}
                  height={16}
                  alt=""
                  className="cursor-pointer"
                />
              </button>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              10
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
