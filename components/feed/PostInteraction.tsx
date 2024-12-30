"use client";

import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React, { useOptimistic, useState, useEffect } from "react";

const PostInteraction = ({
  postId,
  likes,
  comments,
}: {
  postId: string;
  likes: string[];
  comments: number;
}) => {
  const { isLoaded, userId } = useAuth();

  const [likeState, setLikeState] = useState<null | { likeCount: number; isLiked: boolean }>(null);

  useEffect(() => {
    if (isLoaded && userId) {
      setLikeState({
        likeCount: likes.length,
        isLiked: likes.includes(userId),
      });
    }
  }, [isLoaded, userId, likes]);

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState || { likeCount: 0, isLiked: false },
    (state) => ({
      likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
      isLiked: !state.isLiked,
    })
  );

  const likeAction = () => {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLikeState((state) => ({
        likeCount: state!.isLiked ? state!.likeCount - 1 : state!.likeCount + 1,
        isLiked: !state!.isLiked,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between text-sm my-4">
      {!isLoaded || !likeState ? (
        // Skeleton Loader
        <div className="animate-pulse flex items-center justify-between w-full">
          <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-xl w-32 h-10" />
            <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-xl w-32 h-10" />
          </div>
          <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-xl w-20 h-10" />
        </div>
      ) : (
        // Main Component
        <>
          <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
              <form action={likeAction}>
                <button>
                  <Image
                    src={optimisticLike.isLiked ? "/liked.png" : "/like.png"}
                    width={16}
                    height={16}
                    alt=""
                    className="cursor-pointer"
                  />
                </button>
              </form>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                {optimisticLike.likeCount}
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
              <span className="text-gray-500"> {comments}
                <span className="hidden md:inline"> Comments</span>
              </span>
            </div>
          </div>
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
        </>
      )}
    </div>
  );
};

export default PostInteraction;
