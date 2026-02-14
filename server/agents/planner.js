import { callLLM } from "../utils/openrouter.js";

export async function planner(userInput) {
  const messages = [
    {
      role: "system",
      content: `
You are a UI Planning Agent.

Allowed components:
Button, Card, Input, Modal, Navbar, Sidebar, Table, Chart

Output JSON only.
Do not explain.
`
    },
    {
      role: "user",
      content: userInput
    }
  ];

  return await callLLM(messages);
}