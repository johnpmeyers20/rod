import React from 'react'

export default function CatsEdit(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.editSubmit(props.catId);
      }}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={props.formData.name}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="breed">breed</label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={props.formData.breed}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="img_url">image url</label>
        <input
          type="text"
          name="img_url"
          id="img_url"
          value={props.formData.img_url}
          onChange={props.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
