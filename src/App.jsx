import articles from './data/articles.json';

function App() {
  return (
    <>
      {articles.map(article => <li key={article.id}>{article.title}</li>)}
      <form>
        <input type="text" />
      </form>
    </>
  );
}

export default App;
