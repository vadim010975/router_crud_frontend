import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEdit, getPostById, Post } from "../components/service";

const EditPage = () => {
  const navigate = useNavigate();

  const postId = Number(useParams().id);

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    getPostById(postId).then(res => {
      if (res) {
        setPost(res);
      }
    });
  }, [postId]);

  const handleUpdatePostField: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {

    const { name, value } = event.currentTarget;

    setPost(post => {
      return {
        ...post,
        [name]: value
      } as Post
    });
  }

  const handleCancel = () => {
    navigate('/');
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await fetchEdit(post as Post);
    navigate('/');
  }

  return (
    <div className="add-page page">
      <form onSubmit={handleSubmit} className="add-form">
        <h3 className="add-form_title">Редактировать публикацию</h3>
        <textarea className="add-form__input" placeholder='напишите текст' value={post?.content ?? ''} name='content' onInput={handleUpdatePostField} required/>
        <button onClick={handleCancel} type="button" className="add-form__btn_cancel">X</button>
        <button type="submit" className="add-form__btn_submit">Сохранить</button>
      </form>
    </div>
  );
}

export default EditPage;