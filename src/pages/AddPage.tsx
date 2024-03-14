import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const _URL = "http://localhost:7070/posts";

type Post = {
  id: number,
  created: string,
  content: string,
}

const AddPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>();

  const handleUpdatePostField: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.currentTarget
    setPost(post => {
      return {
        ...post,
        [name]: value
      } as Post
    }
    )
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    fetchAdd(post as Post);
    navigate('/');
  }

  const fetchAdd = async (post: Post) => {
    await fetch(_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }

  const handleCancel = () => {
    navigate('/');
  }

  return (
    <div className="add-page page">
      <form onSubmit={handleSubmit} className="add-form">
        <h3 className="add-form_title">Карточка сосздания</h3>
        <textarea className="add-form__input" placeholder='напишите текст' value={post?.content ?? ''} name='content' onInput={handleUpdatePostField} />
        <button onClick={handleCancel} type="button" className="add-form__btn_cancel">X</button>
        <button type="submit" className="add-form__btn_submit">Опубликовать</button>
      </form>
    </div>
  );
}

export default AddPage;