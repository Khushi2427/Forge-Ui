export default function VersionHistory({ versions, onRollback }) {
    return (
      <div className="bg-gray-900 text-white p-4 h-full overflow-auto">
        <h2 className="text-lg font-semibold mb-4">Version History</h2>
  
        {versions.length === 0 && (
          <p className="text-gray-400">No versions yet</p>
        )}
  
        {versions.map((version, index) => (
          <div
            key={index}
            className="mb-3 p-3 bg-gray-800 rounded-md"
          >
            <p className="text-sm text-gray-400">
              Version {index + 1}
            </p>
  
            <button
              onClick={() => onRollback(index)}
              className="mt-2 text-xs bg-indigo-600 px-2 py-1 rounded-md"
            >
              Rollback
            </button>
          </div>
        ))}
      </div>
    );
  }