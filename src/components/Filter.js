import React from "react";

function Filter(props) {
  const { filterText, filterNote } = props;

  return (
    <input
      className="note-filter-input"
      type="text"
      placeholder="Note filter..."
      name="filterText"
      value={filterText}
      onChange={filterNote}
    />
  );
}

export default Filter;
