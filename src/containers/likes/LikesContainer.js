import React from "react";
import DisplayLikes from "../../components/likes/DisplayLikes";
import LikeButton from "../../components/likes/LikeButton";

export default function LikesContainer(props) {
  return (
    <div>
      <DisplayLikes likes={props.likes} />
      <LikeButton
        likeCollection={props.likeCollection}
        collectionId={props.collectionId}
        likes={props.likes}
      />
    </div>
  );
}
