import type { Note } from "../App";
import "./Sidebar.css";

interface Props {
  onAddNote: () => void;
  onDelete: (id: string) => void;
  notes: Note[];
  setActiveNote: (id: string) => void;
  activeNote: string | undefined;
}

const Sidebar = ({
  onAddNote,
  onDelete,
  notes,
  setActiveNote,
  activeNote,
}: Props) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${activeNote === note.id && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDelete(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
