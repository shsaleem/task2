import React from "react";
import { useRemoveNoteMutation } from "../store";

const Note = ({ note }) => {
  const [deleteNote] = useRemoveNoteMutation();

  const handleDeleteNote = (note) => {
    deleteNote(note);
  };

  return (
    <div className="note">
      <p className="note-title">{note.title}</p>
      <button className="btn" onClick={() => handleDeleteNote(note)}>
        Remove
      </button>
    </div>
  );
};

export default Note;
