import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchLoad, Post, setLocalForage } from "../components/service"

export default function HomePage() {

  const location = useLocation();
  const navigate = useNavigate();
  const [listPosts, setListPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (location.pathname === '/') {
      fetchLoad().then(res => {
        setListPosts(res);
        setLocalForage(res);
      });
    }
  }, [location.pathname]);
  
  const handleAdd = () => {
    navigate('/new');
  }

  const handleViewing = (id: number) => {
    navigate('/' + id);
  }

  return (
    <div className="home-page page">
      <ul className="home-page__list">
      <button onClick={handleAdd} className="home-page__btn">Создать пост</button>
        <h3 className="home-page__title">Список постов:</h3>
        {listPosts.map(item => (
          <div className="post" key={item.id} onClick={() => {handleViewing(item.id)}}>
            <div className="post__content">{item.content}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}