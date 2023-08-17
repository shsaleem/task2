import React from "react";
import { useFetchNotesQuery } from "../store";
import { useNavigate } from "react-router-dom";
import Note from "../components/Note";

const Home = () => {
  const { data, error, isFetching } = useFetchNotesQuery();
  const navigate = useNavigate();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error Loading Albums</div>;
  } else {
    content = data.map((note) => {
      return <Note key={note.id} note={note} />;
    });
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Notes App</h1>
      <button className="btn" onClick={() => navigate("/add")}>
        Add Note
      </button>
      <div className="note-list">{content}</div>
    </div>
  );
};

export default Home;
