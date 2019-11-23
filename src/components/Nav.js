import React from "react";

function Nav(props) {
  const { toggleNote, showNote } = props;

  return (
    <div className="nav-container">
      <div className="nav-logo">Notes</div>
      <button className="button" onClick={toggleNote}>
        {showNote ? "Cancel" : "+ Note"}
      </button>
    </div>
  );
}

export default Nav;
