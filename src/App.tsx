import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { v4 as uuid } from "uuid";

export interface Note {
  id: string;
  title: string;
  content: string;
  modDate: number;
}

function App() {
  const initNotes: Note[] = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes")!)
    : [];
  const [notes, setNotes] = useState<Note[]>(initNotes);
  const [activeNote, setActiveNote] = useState<string>(notes[0].id);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const getActiveNote: () => Note | undefined = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote: Note) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDelete={onDelete}
        notes={notes}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
