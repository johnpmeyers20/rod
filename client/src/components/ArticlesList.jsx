import React from 'react'
import { Link } from 'react-router-dom';

export default function ArticlesList(props) {
  return (
    <div>
      {props.cats.map(cat => (
        <React.Fragment key={cat.id}>
          <Link to={`/cats/${cat.id}`}><h3>{cat.name}</h3></Link>
        </React.Fragment>
      ))}
      <Link to="/cats/new"><button>Add an cat</button></Link>
    </div>
  )
};
