import { useState } from 'react';
import articles from './data/articles.json';

function App() {

  const [article, setArticle] = useState(articles);
  const [newArticle, setNewArticle] = useState('');

  const updateArticles = e => {
    e.preventDefault();

    const newObjArticle = {
      id: article.at(-1).id + 1,
      title: newArticle
    };

    setArticle([...article, newObjArticle]);
    setNewArticle('');
  };

  const removeArticle = i => {
    const update = article.filter(obj => {
      return obj.id !== i;
    });
    setArticle(update);

  };

  return (
    <>
      <ul>
        {article.map(article =>
          <li key={article.id}>
            {article.title}
            <button onClick={() => removeArticle(article.id)}>Delete</button>
          </li>)}
      </ul>

      <form onSubmit={updateArticles}>
        <input type="text" value={newArticle} onChange={e => setNewArticle(e.target.value)} />
        <button>Aggiungi Articolo</button>
      </form>
    </>
  );
}

export default App;
