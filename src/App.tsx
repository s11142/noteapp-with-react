import { useState } from "react";
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
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<string>();

  const getActiveNote: () => Note | undefined = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
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
      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
