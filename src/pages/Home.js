import React from "react";
import { useFetchNotesQuery } from "../store";
import NoteList from "../components/NoteList";

const Home = () => {
  const { data, error, isFetching } = useFetchNotesQuery();
  console.log(data);
  return (
    <div>
      <h1>Notes App</h1>
    </div>
  );
};

export default Home;
