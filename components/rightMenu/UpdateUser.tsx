"use client";

import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import UpdateButton from "./UpdateButton";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleClose = () => {
    console.log('close')
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            }
            className="p-8 bg-white rounded-lg shadow-md flex flex-col gap-4 w-11/12 max-w-md md:max-w-lg lg:max-w-xl relative mt-12 mb-12"
          >
            {/* TITLE */}
            <h1 className="text-lg font-semibold">Update Profile</h1>
            <div className="text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </div>
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => {
                setCover(result?.info);
              }}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-1"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            {/* FORM FIELDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* INPUT */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xs text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder={user.name || "John"}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm outline-blue-500"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="surname" className="text-xs text-gray-500">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder={user.surname || "Doe"}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm outline-blue-500"
                  name="surname"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="description" className="text-xs text-gray-500">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder={user.description || "Life is beautiful..."}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm outline-blue-500"
                  name="description"
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="website" className="text-xs text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  placeholder={user.website || "lama.dev"}
                  className="ring-1 ring-gray-300 p-3 rounded-md text-sm outline-blue-500"
                  name="website"
                />
              </div>
            </div>
            <UpdateButton />
            {state.success && (
              <span className="text-green-500">Profile has been updated!</span>
            )}
            {state.error && (
              <span className="text-red-500">Something went wrong!</span>
            )}
            <div
              className="absolute text-xl right-4 top-4 cursor-pointer"
              onClick={handleClose}
            >
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
