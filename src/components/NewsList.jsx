import NewsItem from "./NewsItem";
import "../styles/NewsList.css";

function NewsList({ news, setEditingNews, deleteNews }) {
  return (
    <div className="news-list">
      {news.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          news={newsItem}
          setEditingNews={setEditingNews}
          deleteNews={deleteNews}
        />
      ))}
    </div>
  );
}

export default NewsList;
