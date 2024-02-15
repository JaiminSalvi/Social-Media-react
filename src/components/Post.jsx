import { useContext, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

import { RiDeleteBin6Line } from "react-icons/ri";
import { PostList } from "../store/post-list-store";
/* eslint-disable react/prop-types */

const Post = ({ data }) => {
  const { deletePost } = useContext(PostList);

  const [liked, setLiked] = useState(false);
  const [reactions, setReactions] = useState(data.reactions);
  const handleLikeClick = () => {
    if (liked == true) {
      setReactions(reactions - 1);
    } else {
      setReactions(reactions + 1);
    }
    setLiked(!liked);
  };
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {data.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(data.id)}
            style={{ cursor: "pointer" }}
          >
            <RiDeleteBin6Line />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{data.body}</p>
        {data.tags.map((item) => (
          <span
            className="badge rounded-pill text-bg-primary hashtag"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <div>
        {liked ? (
          <FcLike className="like-button" onClick={handleLikeClick} style={{scale:"1.2"}} />
        ) : (
          <FcLikePlaceholder
            className="like-button"
            onClick={handleLikeClick}
          />
        )}
        {"  " + reactions}
      </div>
    </div>
  );
};

export default Post;
