import { useState } from "react";

export default function ChatPanel({ onGenerate, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onGenerate(input);
    setInput("");
  };

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">ForgeUI Chat</h2>

      <textarea
        className="flex-1 bg-gray-800 p-3 rounded-md resize-none outline-none"
        placeholder="Describe the UI you want..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate UI"}
      </button>
    </div>
  );
}