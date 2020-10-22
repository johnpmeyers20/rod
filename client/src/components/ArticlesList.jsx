import React from 'react'
import { Link } from 'react-router-dom';

export default function ArticlesList(props) {
  return (
    <div>
      {props.articles.map(article => (
        <React.Fragment key={article.id}>
          <Link to={`/articles/${article.id}`}><h3>{article.title}</h3></Link>
        </React.Fragment>
      ))}
      <Link to="/articles/new"><button>Add an article</button></Link>
    </div>
  )
};
