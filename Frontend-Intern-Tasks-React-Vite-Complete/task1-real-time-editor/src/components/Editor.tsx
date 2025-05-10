import React, { useState, useEffect } from "react";

type EditorProps = {
  username: string;
};

const Editor: React.FC<EditorProps> = ({ username }) => {
  const [content, setContent] = useState("");

  // Define user colors for attribution
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#a0c4ff"];

  const getUserColor = (name: string) => {
    const index = name.length % colors.length;
    return colors[index];
  };

  // Load previous content from localStorage (temporary persistence)
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) setContent(savedContent);
  }, []);

  useEffect(() => {
    localStorage.setItem("editorContent", content);
  }, [content]);

  return (
    <div className="border p-4">
      <h2 className="font-bold">Live Editor</h2>
      <textarea
        className="w-full p-2 border rounded"
        style={{ backgroundColor: getUserColor(username) }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export default Editor;
