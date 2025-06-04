import type { Note } from "../App";
import "./Main.css";

interface Props {
  activeNote: Note | undefined;
}

const Main = ({ activeNote }: Props) => {
  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea name="" id="" placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote?.title}</h1>
        <div className="markdown-preview">{activeNote?.content}</div>
      </div>
    </div>
  );
};

export default Main;
