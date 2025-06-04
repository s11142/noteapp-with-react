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
      <Sidebar onAddNote={onAddNote} onDelete={onDelete} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
