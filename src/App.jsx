import articles from './data/articles.json';

function App() {
  return (
    <>
      {articles.map(article => <li key={article.id}>{article.title}</li>)}
    </>
  );
}

export default App;
