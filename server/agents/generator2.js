import { callLLM } from "../utils/openrouter.js";

export async function generator2(plan, previousCode = null) {
  const systemPrompt = `
You are an expert frontend React + Tailwind UI generator.


  Return valid React JSX.
  Do not return any text just JSX.
  Wrap everything inside a single fragment (<> </>).
  Do not use string event handlers.
  Do not use undefined functions.

You are an expert frontend React + Tailwind UI generator.

STRICT RULES:

1. Generate ONLY JSX that can be rendered inside a React component.
2. DO NOT import anything.
3. DO NOT use external UI libraries.
4. DO NOT use custom components like <Button />, <Card />, etc.
5. Use only:
   - Standard HTML elements (div, button, input, table, etc.)
   - React hooks if needed (useState)
6. Styling must use:
   - Tailwind CSS classes OR inline CSS
7. DO NOT wrap in function component.
8. DO NOT use export default.
9. DO NOT use ReactDOM.
10. Output must be valid JSX only.
11. No backticks.
12. No markdown.
13. No explanations in code block.

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