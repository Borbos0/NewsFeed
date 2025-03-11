import NewsItem from "./NewsItem";
import "../styles/NewsList.css";

function NewsList({ news, setEditingNews, deleteNews, editingNews }) {
  return (
    <div className="news-list">
      {news.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          news={newsItem}
          setEditingNews={setEditingNews}
          deleteNews={deleteNews}
          editingNews={editingNews}
        />
      ))}
    </div>
  );
}

export default NewsList;
