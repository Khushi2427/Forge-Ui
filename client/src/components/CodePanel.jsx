export default function CodePanel({ code, setCode }) {
    return (
      <div className="h-full bg-gray-950 text-green-400 p-4 overflow-auto">
        <h2 className="text-lg font-semibold text-white mb-4">Generated Code</h2>
  
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-[90%] bg-gray-900 p-4 rounded-md font-mono text-sm outline-none resize-none"
        />
      </div>
    );
  }