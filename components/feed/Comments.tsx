import React from "react";
import CommentList from "./CommentList";
import prisma from "@/lib/client";

const Comments = async ({ postId }: { postId: string }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });

  return (
    <div>
      <CommentList postId={postId} comments={comments} />
    </div>
  );
};

export default Comments;
