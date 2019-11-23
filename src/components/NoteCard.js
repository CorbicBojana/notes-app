import React from "react";

function NoteCard(props) {
  const { note, handleDelete } = props;

  return (
    <div className="note-card-container">
      <div className="note-card-title">
        {note.title || note.noteInput.title}
      </div>
      <div className="note-card-content">
        {note.content || note.noteInput.content}
      </div>
      <span className="note-card-author">
        {note.author || note.noteInput.author}
      </span>
      <span className="note-card-delete" onClick={handleDelete}>
        <i className="material-icons">close</i>
      </span>
    </div>
  );
}

export default NoteCard;
