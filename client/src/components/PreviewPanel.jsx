export default function PreviewPanel({ code }) {
    return (
      <div className="h-full bg-white p-4 overflow-auto">
        <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
  
        <div
          className="border rounded-md p-4 min-h-[400px]"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    );
  }