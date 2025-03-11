import NewsItem from "./NewsItem";
import "./styles/NewsList.css";

function NewsList({ news, setEditingNews, deleteNews }) {
  return (
    <div className="news-list">
      {news.map((n) => (
        <NewsItem
          key={n.id}
          news={n}
          setEditingNews={setEditingNews}
          deleteNews={deleteNews}
        />
      ))}
    </div>
  );
}

export default NewsList;
