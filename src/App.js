import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import List from "./components/List";
import Note from "./components/Note";
import notesJson from "./notes";
import uuid from "uuid";

function App() {
  const [showNote, setShowNote] = useState(false);
  const [notes, setNotes] = useState(notesJson);
  const [note, setNote] = useState({});
  const [filterText, setFilterText] = useState("");
  const [id, setId] = useState(uuid());
  const [noteInput, setNoteInput] = useState({
    title: "",
    author: "",
    content: ""
  });

  const toggleNote = () => {
    setShowNote(!showNote);
  };

  const handleDelete = id => {
    const deleteNote = notes.filter(item => item.id !== id);
    setNotes(deleteNote);
  };

  const handleChange = e => {
    const value = e.target.value;
    setNoteInput({
      ...noteInput,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const getDate = new Date();
    const year = getDate.getFullYear();
    const month = getDate.getMonth() + 1;
    const day = getDate.getDate();
    const getDateSubmit = year + "/" + month + "/" + day;

    const newNote = {
      id: id,
      date: getDateSubmit,
      noteInput: {
        title: noteInput.title,
        author: noteInput.author,
        content: noteInput.content
      }
    };

    const updateNotes = [...notes, newNote];

    if (
      noteInput.title.length > 0 &&
      noteInput.author.length > 0 &&
      noteInput.content.length > 0
    ) {
      setNotes(updateNotes);
      setId(uuid());
      setNoteInput({
        title: "",
        author: "",
        content: ""
      });
      setShowNote(false);
    } else {
      alert("Fill in all fields");
    }
  };

  const sortNote = key => {
    const dateSort = notes.sort((a, b) => a.date < b.date);
    setNotes(dateSort);
    console.log(dateSort);
  };

  const filterNote = e => {
    setFilterText(e.target.value);
  };

  const handleChangeBox = id => {
    const updateBox = notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          status: !note.status
        };
      }
      return { ...note };
    });
    setNotes(updateBox);
  };

  return (
    <div>
      <Nav toggleNote={toggleNote} showNote={showNote} />
      {showNote ? (
        <Note
          note={note}
          noteInput={noteInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <Filter filterText={filterText} filterNote={filterNote} />
          <Sort sortNote={() => sortNote(note.id)} />
          <List
            notes={notes}
            filterText={filterText}
            handleDelete={handleDelete}
            handleChangeBox={handleChangeBox}
          />
        </div>
      )}
    </div>
  );
}

export default App;
