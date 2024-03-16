import localforage from 'localforage';
const _URL = "http://localhost:7070/posts";

export type Post = {
  id: number,
  created: string,
  content: string,
};

export const fetchAdd = async (post: Post) => {
  await fetch(_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

export const fetchLoad = async() => {
  const r = await fetch(_URL);
  const response = await r.json();
  return response;
}

export const fetchDelete = async (id: number) => {
  await fetch(_URL + "/" + id, {
    method: "DELETE",
  });
}

export const getPostById = async (id: number) => {
  if (!id || Number.isNaN(id)) {
    return;
  }
  const posts = await localforage.getItem<Post[]>('posts') as Post[];
  if (!posts) {
    return;
  }
  const post = posts.find(item => item.id === id);
  if (!post) {
    return;
  }
  return post;
}

export const fetchEdit = async (post: Post) => {
  await fetch(_URL + "/" + post.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

export const setLocalForage = async (posts: Post[]) => {
  await localforage.setItem('posts', posts);
}