import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
/* eslint-disable react/prop-types */
const CreatePost = ({ activeItems }) => {
  const { addPost } = useContext(PostList);
  const userId = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({
      userId: userId.current.value,
      title: postTitle.current.value,
      content: postContent.current.value,
      tags: postTags.current.value.split(" "),
    });
    userId.current.value = "";
    postTitle.current.value = "";
    postContent.current.value = "";
    postTags.current.value = [];
  };

  const flag = activeItems[0] === "CreatePost" ? true : false;
  return flag ? (
    <form className="createpost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          UserId
        </label>
        <input
          type="text"
          ref={userId}
          className="form-control"
          id="UserId"
          placeholder="Enter your userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitle}
          className="form-control"
          id="title"
          placeholder="How are you Feeling Today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postContent}
          className="form-control"
          id="body"
          placeholder="Tell us More About it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={postTags}
          className="form-control"
          id="tags"
          placeholder="Please Enter your tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  ) : null;
};

export default CreatePost;
