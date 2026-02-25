import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/sections/Header';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import postsSort from './utils/postsSort';

const API_BASE_URL = 'https://699eb24878dda56d396b04ab.mockapi.io/api/v1';
const POSTS_URL = `${API_BASE_URL}/posts`;

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (url) => {
    const response = await axios.get(url);

    setPosts(postsSort(response.data));
  };

  const deletePost = async (id) => {
    await axios.delete(`${POSTS_URL}/${id}`);
    fetchPosts(POSTS_URL);
  };

  const createPost = async (data) => {
    const response = await axios.post(POSTS_URL, data);
    fetchPosts(POSTS_URL);
  };

  useEffect(() => {
    fetchPosts(POSTS_URL);
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1 className="container">React Practice 10</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Блог</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <PostsList posts={posts} onDelete={deletePost} />
              <CreatePost onCreate={createPost} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
