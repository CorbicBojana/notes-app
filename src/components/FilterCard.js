import React from "react";

function FiterCard(props) {
  const { note, handleChangeBox } = props;

  return (
    <div className="note-card-container">
      <div className="note-card-title">{note.noteInput.title}</div>
      <div className="note-card-content">{note.noteInput.content}</div>
      <input
        type="checkbox"
        checked={!note.status && true}
        onChange={handleChangeBox}
      />
      <span className="note-card-author">{note.noteInput.author}</span>
      <span className="note-card-date">{note.date}</span>
    </div>
  );
}

export default FiterCard;
