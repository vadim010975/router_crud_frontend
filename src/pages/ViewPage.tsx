import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const _URL = "http://localhost:7070/posts";

type Post = {
  id: number,
  created: string,
  content: string,
}

const ViewPage = () => {

  // const [postId, setPostId] = useState()

  const { id: postId } = useParams()
  useEffect(() => {
    if (postId) {
      fetchPost(postId)
    }
  }, [postId])

  const fetchPost = async (postId: number) => {
    const r = await fetch(_URL);
    const response = await r.json();
    setListPosts(response);
  }

  return (
    <div className="view-page page">

    </div>
  );
}

export default ViewPage