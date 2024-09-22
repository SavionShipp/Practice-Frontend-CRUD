import { PostIndex } from "./PostIndex";
import { PostShow } from "./PostShow";
import { axios } from "axios";
import { Modal } from "./Modal";
import { useState, useEffect } from 'react'


export function PostPage() { 
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsVisible] = useState(false);

  const getPostData = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data)
    })
  }
//   const handleIndex = () => {
//   axios.get("http://localhost:3000/posts.json").then((response) => {
//     console.log(response.data);
//     setPosts(response.data);
//   });
// };

const showModal = (post) => {
  console.log(post);
  setIsPostsVisible(true);
};

const closeModal = () => {
  setIsPostsVisible(false);
}
useEffect(getPostData, []);


  return (
    <div>
      <PostShow />
      <PostIndex posts={posts} onShow={showModal} />
      <Modal show={isPostsShowVisible} onClose={closeModal}>

      </Modal>
    </div>
  )
}


