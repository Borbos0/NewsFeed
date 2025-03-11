import { useState, useEffect } from "react";
import "./styles/NewsForm.css";

function NewsForm({ addNews, editingNews, updateNews }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({ title: "", content: "" });

  useEffect(() => {
    if (editingNews) {
      setTitle(editingNews.title);
      setContent(editingNews.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { title: "", content: "" };
    if (title.trim() === "") {
      newErrors.title = "Заголовок не может быть пустым";
    }
    if (content.trim() === "") {
      newErrors.content = "Текст новости не может быть пустым";
    }

    if (newErrors.title || newErrors.content) {
      setErrors(newErrors);
      return;
    }

    if (editingNews) {
      updateNews(editingNews.id, title, content);
    } else {
      addNews(title, content);
    }

    setTitle("");
    setContent("");
    setErrors({ title: "", content: "" });
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <input
        className={`news-input ${errors.title ? "error" : ""}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
      />
      {errors.title && <p className="error-message">{errors.title}</p>}

      <textarea
        className={`news-textarea ${errors.content ? "error" : ""}`}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Текст новости"
      />
      {errors.content && <p className="error-message">{errors.content}</p>}

      <button className="news-button" type="submit">
        {editingNews ? "Сохранить" : "Добавить"}
      </button>
    </form>
  );
}

export default NewsForm;
