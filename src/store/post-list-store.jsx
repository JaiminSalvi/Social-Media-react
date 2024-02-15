/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "delete") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "add_initial_post") {
    newPostList = action.payload.posts;
  } else {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = ({ userId, title, content, tags }) => {
    dispatchPostList({
      type: "add",
      payload: {
        id: Date.now(),
        userId,
        title,
        reactions: Math.floor(Math.random() * 100),
        content,
        tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "add_initial_post",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "delete",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;