import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/postsSlice';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Challenge TCIT - Gestor de Posts</h1>
        <p>React + Redux + Node.js + PostgreSQL</p>
      </header>

      <main className="app-main">
        <div className="section">
          <PostFilter />
        </div>

        <div className="section">
          <PostList />
        </div>

        <div className="section">
          <PostForm />
        </div>
      </main>

      <footer className="app-footer">
        <p>Desarrollado por Angelo Aste</p>
      </footer>
    </div>
  );
}

export default App;
