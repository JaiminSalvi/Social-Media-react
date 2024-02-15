import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [activeItems, setActiveItems] = useState(["Home"]);
  const handleOnClick = (item) => {
    if (!activeItems.includes(item)) {
      setActiveItems([item]);
      //   setActiveItems([...activeItems.filter((i) => i !== item)]);
      //means all elements except the item are filtered and item is filtered out
    }
  };
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            activeItems={activeItems}
            handleOnClick={handleOnClick}
          ></Sidebar>
          <div className="content">
            <Header></Header>
            <CreatePost activeItems={activeItems}></CreatePost>
            <PostList activeItems={activeItems}></PostList>
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
