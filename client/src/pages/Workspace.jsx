import React, { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview, LiveError } from "react-live";

// System Components
import Button from "../components/system/Button";
import Card from "../components/system/Card";
import Input from "../components/system/Input";
import Modal from "../components/system/Modal";
import Navbar from "../components/system/Navbar";
import Sidebar from "../components/system/Sidebar";
import Table from "../components/system/Table";
import Chart from "../components/system/Chart";

export default function Workspace() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [plan, setPlan] = useState("");
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");

  const [versions, setVersions] = useState([]);
  const [currentVersion, setCurrentVersion] = useState(null);

  /* -------------------- GENERATE -------------------- */

  const generateUI = async (isRegenerate = false) => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/generate",
        {
          message,
          previousPlan: isRegenerate ? null : plan || null,
          previousCode: isRegenerate ? null : code || null
        }
      );

      const { plan: newPlan, code: newCode, explanation: newExplanation } =
        response.data.data;

      setPlan(newPlan);
      setCode(newCode);
      setExplanation(newExplanation);

      const newVersion = {
        plan: newPlan,
        code: newCode,
        explanation: newExplanation,
        timestamp: new Date().toLocaleTimeString()
      };

      setVersions((prev) => {
        const updated = [...prev, newVersion];
        setCurrentVersion(updated.length - 1);
        return updated;
      });
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.reason ||
          error.response?.data?.error ||
          "Generation failed"
      );
    }

    setLoading(false);
  };

  /* -------------------- ROLLBACK -------------------- */

  const rollback = (index) => {
    const selected = versions[index];
    if (!selected) return;
  
    // Restore selected version
    setPlan(selected.plan);
    setCode(selected.code);
    setExplanation(selected.explanation);
    setCurrentVersion(index);
  
    // 🔥 Remove all versions after selected index
    setVersions((prev) => prev.slice(0, index + 1));
  };

  /* -------------------- LIVE SCOPE -------------------- */

  const scope = {
    React,
    useState: React.useState,
    Button,
    Card,
    Input,
    Modal,
    Navbar,
    Sidebar,
    Table,
    Chart
  };

  /* -------------------- SAFE WRAP CODE -------------------- */

  const wrappedCode = `
    function GeneratedComponent() {
      return (
        ${code || "<div />"}
      )
    }
    render(<GeneratedComponent />)
  `;

  return (
    <div className="h-screen flex bg-gray-950 text-white overflow-hidden">
      
      {/* ================= LEFT PANEL ================= */}
      <div className="w-1/4 border-r border-gray-800 p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">ForgeUI</h2>

        <textarea
          className="bg-gray-800 p-3 rounded-lg resize-none h-32 text-sm focus:outline-none"
          placeholder="Describe your UI..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={() => generateUI(false)}
          disabled={loading}
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate / Modify"}
        </button>

        <button
          onClick={() => generateUI(true)}
          disabled={loading}
          className="mt-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition disabled:opacity-50"
        >
          Regenerate From Scratch
        </button>

        {/* -------- Version History -------- */}
        <div className="mt-6 h-48 overflow-y-auto">
          <h3 className="text-sm text-gray-400 mb-2">Versions</h3>

          <div className="space-y-2">
            {versions.map((v, index) => (
              <button
                key={index}
                onClick={() => rollback(index)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                  currentVersion === index
                    ? "bg-indigo-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <div>Version {index + 1}</div>
                <div className="text-xs text-gray-400">
                  {v.timestamp}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* -------- Explanation -------- */}
        {explanation && (
          <div className="mt-4 text-sm text-gray-400 overflow-auto border-t border-gray-800 pt-4">
            <h3 className="text-white font-semibold mb-2">
              AI Explanation
            </h3>
            <p className="whitespace-pre-line">{explanation}</p>
          </div>
        )}
      </div>

      {/* ================= CODE EDITOR ================= */}
      <div className="w-2/5 border-r border-gray-800">
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            wordWrap: "on"
          }}
        />
      </div>

      {/* ================= LIVE PREVIEW ================= */}
      <div className="w-2/5 p-6 overflow-auto">
        <LiveProvider code={wrappedCode} scope={scope} noInline>
          <div className="bg-white text-black p-6 rounded-lg min-h-[300px] shadow-lg">
            <LivePreview />
          </div>
          <LiveError className="text-red-500 mt-4 text-sm" />
        </LiveProvider>
      </div>
    </div>
  );
}