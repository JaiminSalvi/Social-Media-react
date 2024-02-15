/* eslint-disable react/prop-types */
import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
const PostList = ({ activeItems }) => {
  const flag = activeItems[0] === "Home" ? true : false;
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();   // used for cleanup means  if the component is unmounted before it finishes its request then we will stop that request
    };
  }, []);
  return flag ? (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <center>
          <h1 className="empty">There are no posts.</h1>
        </center>
      )}
      {postList.map((post) => {
        return <Post key={post.id} data={post} />;
      })}
    </>
  ) : null;
};

export default PostList;
