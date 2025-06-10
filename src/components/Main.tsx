import type { Note } from "../App";
import "./Main.css";
import Markdown from "react-markdown";

interface Props {
  activeNote: Note | undefined;
  onUpdateNote: (updatedNote: Note) => void;
}

const Main = ({ activeNote, onUpdateNote }: Props) => {
  const onEditNote = (key: "title" | "content", value: string): void => {
    if (!activeNote) {
      throw new Error("アクティブなノートが存在していません.");
    }
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          placeholder="新しいノートのタイトル"
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote?.title}</h1>
        <div className="markdown-preview">
          <Markdown>{activeNote?.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Main;
