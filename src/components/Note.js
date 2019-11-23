import React from "react";

function Note(props) {
  const { handleChange, handleSubmit, noteInput } = props;

  return (
    <div className="note-container">
      <br />
      <br />
      <form className="note-form" onSubmit={handleSubmit}>
        <div className="note-title">
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Title..."
            name="title"
            value={noteInput.title}
            onChange={handleChange}
          />
        </div>
        <div className="note-title">
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Author..."
            name="author"
            value={noteInput.author}
            onChange={handleChange}
          />
        </div>
        <div className="note-textarea-container">
          <textarea
            className="note-textarea"
            type="text"
            placeholder="Type Here..."
            name="content"
            value={noteInput.content}
            onChange={handleChange}
          />
        </div>
        <button className="note-button">+ Note</button>
      </form>
    </div>
  );
}

export default Note;
