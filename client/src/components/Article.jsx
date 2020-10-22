import React from 'react'

export default function Article(props) {
  const { currentArticle } = props;
  return (
    <div>
      {currentArticle && (
        <>
          <h1>{currentArticle.title}</h1>
          <h3>{currentArticle.author}</h3>
          <h5>{currentArticle.publication_date}</h5>
          <br />
          <p>{currentArticle.text}</p>
          <br />
          <button onClick={() => {
            props.removeArticle(currentArticle.id)
          }}>Delete</button>
          <button onClick={() => {
            props.setEdit(currentArticle);
          }}>Edit</button>
        </>
      )}
    </div>
  )
}
