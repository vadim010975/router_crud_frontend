import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAdd, Post } from "../components/service";

const AddPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>();

  const handleUpdatePostField: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.currentTarget;
    setPost(post => {
      return {
        ...post,
        [name]: value
      } as Post
    });
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await fetchAdd(post as Post);
    navigate('/');
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