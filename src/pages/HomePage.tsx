import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const _URL = "http://localhost:7070/posts";

type Post = {
  id: string,
  created: string,
  content: string,
}

export default function HomePage() {

  const [listPosts, setListPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      void fetchPosts()
    }
  }, [location.pathname])

  const fetchPosts = async() => {
    const r = await fetch(_URL);
    const response = await r.json();
    setListPosts(response);
  } 


  const handlerClick = () => {

  }

  return (
    <div className="home-page">
      <button onClick={handlerClick} className="home-page__btn">Создать пост</button>
      <ul className="home-page__list">
        <h3 className="home-page__title">Список:</h3>
        {listPosts.map(item => (
          <div className="post" key={item.id}>
            <div className="post__created">{item.created}</div>
            <div className="post__content">{item.content}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}