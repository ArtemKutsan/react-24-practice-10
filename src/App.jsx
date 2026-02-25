import './App.css';
import Header from './components/sections/Header';
import PostsList from './components/PostsList';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="container">React Practice 10</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Блог</h2>
            <PostsList />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
