import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const _URL = "http://localhost:7070/posts";


type Post = {
  id: number,
  created: string,
  content: string,
}

export default function HomePage() {

  const location = useLocation();
  const navigate = useNavigate();
  const [listPosts, setListPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  
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
    navigate('/new');
  }

  const handleClick = (post: Post) => {
    navigate('/' + id);
  }

  return (
    <div className="home-page page">
      <ul className="home-page__list">
      <button onClick={handlerClick} className="home-page__btn">Создать пост</button>
        <h3 className="home-page__title">Список постов:</h3>
        {listPosts.map(item => (
          <div className="post" key={item.id} onClick={() => {handleClick(item)}}>
            <div className="post__content">{item.content}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}