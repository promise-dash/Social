import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            src="https://images.pexels.com/photos/9888555/pexels-photo-9888555.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            alt=""
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">John</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
