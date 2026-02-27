import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/sections/Header';
import PostsList from './components/PostsList';
import Paginator from './components/Paginator';
import CreatePost from './components/CreatePost';

const API_BASE_URL = 'https://699eb24878dda56d396b04ab.mockapi.io/api/v1';
const POSTS_URL = `${API_BASE_URL}/posts`;
const limit = 3;

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  // Переделать limit на состояние (для выбора кол-ва отображаемых постов)
  // Сделать sortBy (orderBy) состоянием (для сортировки по разным полям)
  // Сделать search (filter) состоянием (для поиска)
  // Сделать field_name состоянием

  const fetchPosts = async (
    urlString,
    page = false,
    limit = false,
    sortBy = 'createdAt',
    order = 'desc',
  ) => {
    try {
      const url = new URL(urlString);
      url.searchParams.append('sortBy', sortBy);
      url.searchParams.append('order', order);

      if (page !== 1 && Boolean(limit) !== false) {
        url.searchParams.append('page', page);
        url.searchParams.append('limit', limit);

        const response = await axios.get(url);
        console.log(response);
        setPosts(response.data);
        return;
      }

      const response = await axios.get(url);
      console.log(response);

      setTotalPosts(response.data.length);
      setPosts(response.data.slice(0, limit));
    } catch (error) {
      console.error('Ошибка при загрузке постов:', error);
    }
  };

  // const fetchPosts = async (url) => {
  //   const response = await axios.get(url);
  //   console.log(response);
  //   setPosts(postsSort(response.data));
  // };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      console.log(response);
      fetchPosts(POSTS_URL, page, limit);
    } catch (error) {
      console.error('Ошибка при удалении поста:', error);
    }
  };

  const createPost = async (data) => {
    try {
      const response = await axios.post(POSTS_URL, data);
      console.log(response);
      setPage(1);
      fetchPosts(POSTS_URL, page, limit);
    } catch (error) {
      console.error('Ошибка при создании поста:', error);
    }
  };

  useEffect(() => {
    fetchPosts(POSTS_URL, page, limit);
  }, [page]);

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
            <Paginator page={page} setPage={setPage} limit={limit} totalPosts={totalPosts} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
