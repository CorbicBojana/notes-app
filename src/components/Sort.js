import React from "react";

function Sort(props) {
  const { sortNote } = props;

  return (
    <button className="button button-sort" onClick={sortNote}>
      Sort
    </button>
  );
}

export default Sort;
