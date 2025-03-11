import "../styles/NewsItem.css";

function NewsItem({ news, setEditingNews, deleteNews, editingNews }) {
  const isEditing = editingNews?.id === news.id;

  return (
    <div className="news-item">
      <h3 className="news-title">{news.title}</h3>
      <p className="news-content">{news.content}</p>
      <small className="news-date">{news.date}</small>
      <div className="news-buttons">
        <button className="edit-button" onClick={() => setEditingNews(news)}>
          Редактировать
        </button>
        <button
          className="delete-button"
          onClick={() => deleteNews(news.id)}
          disabled={isEditing}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default NewsItem;
