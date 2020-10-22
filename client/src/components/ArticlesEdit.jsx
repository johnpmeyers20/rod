import React from 'react'

export default function ArticlesEdit(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.editSubmit(props.articleId);
      }}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={props.formData.title}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="author">author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={props.formData.author}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="publication_date">publication date</label>
        <input
          type="text"
          name="publication_date"
          id="publication_date"
          value={props.formData.publication_date}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="body">body</label>
        <input
          type="body"
          name="body"
          id="body"
          value={props.formData.body}
          onChange={props.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}