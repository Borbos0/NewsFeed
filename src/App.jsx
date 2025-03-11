import { useState, useEffect } from "react";
import NewsForm from "./components/NewsForm";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  useEffect(() => {
    const savedNews = localStorage.getItem("news");
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    }
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      localStorage.setItem("news", JSON.stringify(news));
    }
  }, [news]);

  const addNews = (title, content) => {
    const newNews = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setNews([...news, newNews]);
  };

  const updateNews = (id, title, content) => {
    setNews(news.map((n) => (n.id === id ? { ...n, title, content } : n)));
    setEditingNews(null);
  };

  const deleteNews = (id) => {
    setNews(news.filter((n) => n.id !== id));
  };

  return (
    <div className="container">
      <h1>Новостная лента</h1>
      <NewsForm
        addNews={addNews}
        editingNews={editingNews}
        updateNews={updateNews}
      />
      <NewsList
        news={news}
        setEditingNews={setEditingNews}
        deleteNews={deleteNews}
      />
    </div>
  );
}

export default App;
