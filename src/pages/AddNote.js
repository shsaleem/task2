import React, { useState } from "react";
import { useAddNoteMutation } from "../store";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const [addNote] = useAddNoteMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(noteText);
    setNoteText("");
  };

  return (
    <div>
      <h1>Add Note</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
