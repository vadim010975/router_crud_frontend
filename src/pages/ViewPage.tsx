import localforage from 'localforage';
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const _URL = "http://localhost:7070/posts";

type Post = {
  id: number,
  created: string,
  content: string,
}

const ViewPage = () => {

  const [post, setPost] = useState<Post>();

  const postId = Number(useParams().id);
  if (Number.isNaN(postId)) {
    return;
  }
  useEffect(() => {
    getPostById(postId).then(res => {
      if(res) {
        setPost(res);
      }
    })

  }, [postId])

  const getPostById = async(id: number) => {
    const posts = await localforage.getItem<Post[]>('posts');
    if (!posts) {
      return;
    }
    const post = posts.find(item => item.id === id);
    if (!post) {
      return;
    }
    return post;
  }

  return (
    <div className="view-page page">

    </div>
  );
}

export default ViewPage;