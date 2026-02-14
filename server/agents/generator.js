import { callLLM } from "../utils/openrouter.js";

export async function generator(plan, previousCode = null) {
  const systemPrompt = `
You are a STRICT React UI Code Generator.

CRITICAL RULES:
- You may ONLY use these components:
  Button, Card, Input, Modal, Navbar, Sidebar, Table, Chart

  Return valid React JSX.
  Wrap everything inside a single fragment (<> </>).
  Do not use string event handlers.
  Do not use undefined functions.

- DO NOT create new components.
- DO NOT use HTML tags like div, span, section, header, footer.
- DO NOT use inline styles.
- DO NOT use className.
- DO NOT use Tailwind or CSS.
- DO NOT include import or export statements.
- DO NOT define functions.
- DO NOT wrap output in markdown.
- Output ONLY valid JSX.

You must return JSX that can be directly rendered inside a React component.

If previousCode is provided:
- Modify the existing structure incrementally.
- Preserve unchanged components.
- Do NOT rewrite everything unless absolutely necessary.
`;

  let userPrompt = `
Layout Plan:
${plan}

Generate the corresponding JSX UI.
`;

  if (previousCode) {
    userPrompt += `

Previous Existing JSX:
${previousCode}

Modify the existing JSX according to the new layout plan.
Preserve unchanged parts.
`;
  }

  const messages = [
    {
      role: "system",
      content: systemPrompt
    },
    {
      role: "user",
      content: userPrompt
    }
  ];

  const rawOutput = await callLLM(messages);

  if (!rawOutput) {
    throw new Error("Generator returned empty output.");
  }

  // Remove accidental markdown formatting if LLM adds it
  const cleaned = rawOutput
    .replace(/```jsx/g, "")
    .replace(/```/g, "")
    .trim();

  return cleaned;
}