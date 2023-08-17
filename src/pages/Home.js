import React, { useEffect, useState } from "react";
import { useFetchNotesQuery } from "../store";
import { useNavigate } from "react-router-dom";
import Note from "../components/Note";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Home = () => {
  const { data, error, isFetching } = useFetchNotesQuery();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setNotes(data);
  }, [data]);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) {
      return;
    }
    const reorderedNotes = Array.from(notes);
    const [movedNote] = reorderedNotes.splice(source.index, 1);
    reorderedNotes.splice(destination.index, 0, movedNote);
    setNotes(reorderedNotes);
  };

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error Loading Notes</div>;
  } else {
    content = (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="notes-list" direction="vertical">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {notes?.map((note, index) => (
                <Draggable key={note.id} draggableId={note.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Note key={note.id} note={note} />;
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
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
