import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDelete, getPostById, Post } from "../components/service";

const ViewPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>();

  const postId = Number(useParams().id);

  useEffect(() => {
    if (postId && !Number.isNaN(postId)) {
      getPostById(postId).then(res => {
        if (res) {
          setPost(res);
        }
      });
    }
  }, [postId])

  const handleRemove = () => {
    if (!post?.id) {
      return;
    }
    fetchDelete(post.id);
    navigate('/');
  }

  const handleEdit = () => {
    if (!post?.id) {
      return;
    }
    navigate('/edit/' + post.id);
  }

  return (
    <div className="view-page page">
      <div className='view-card'>
        <h3 className='view-card__title'>Страница просмотра</h3>
        <div className='view-card__content'>{post?.content ?? ''}</div>
        <div className='view-card__btns'>
          <button onClick={handleEdit} className='view-card__btn_edit'>Изменить</button>
          <button onClick={handleRemove} className='view-card__btn_remove'>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;