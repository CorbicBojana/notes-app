import React from "react";
import NoteCard from "./NoteCard";
import FilterCard from "./FilterCard";

function List(props) {
  const { notes, filterText, handleDelete, handleChangeBox } = props;

  const cards = notes.map(note => {
    return (
      <NoteCard
        key={note.id}
        note={note}
        handleDelete={() => handleDelete(note.id)}
      />
    );
  });

  const filterCards = notes
    // .filter(note => {
    // return note.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    //})
    .map(note => {
      return (
        <FilterCard
          key={note.id}
          note={note}
          handleChangeBox={() => handleChangeBox(note.id)}
        />
      );
    });

  return (
    <div className="list-container">
      {filterText === "" ? cards : filterCards}
    </div>
  );
}

export default List;
