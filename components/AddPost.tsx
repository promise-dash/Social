"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/actions";

const AddPost = () => {
  const { isLoaded, user } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="w-10 h-10 object-cover rounded-full"
      />

      <div className="flex-1">
        <form
          className="flex gap-4"
          action={(formData) => {
            addPost(formData, img?.secure_url || "");
          }}
        >
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2 outline-none"
            name="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <AddPostButton />
        </form>

        <div className="flex items-center gap-10 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result?.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addImage.png" alt="" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" alt="" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
