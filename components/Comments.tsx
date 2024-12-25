import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div>
        {/* WRITE */}
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <div
            className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
            />
            <button>Submit</button>
          </div>
        </div>

        <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
            {/* AVATAR */}
            <Image
              src="/noAvatar.png"
              alt=""
              width={20}
              height={20}
              className="w-6 h-6 rounded-full"
            />
            {/* DESC */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="font-medium">
                kevin
              </span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus.</p>
              <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/like.png"
                    alt=""
                    width={12}
                    height={12}
                    className="cursor-pointer w-4 h-4"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">0 Likes</span>
                </div>
                <div className="">Reply</div>
              </div>
            </div>
            {/* ICON */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer w-4 h-4"
            ></Image>
          </div>
      </div>
    </div>
  )
}

export default Comments