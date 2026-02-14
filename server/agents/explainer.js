import { callLLM } from "../utils/openrouter.js";

export async function explainer(userInput, plan, generatedCode) {
  const messages = [
    {
      role: "system",
      content: `
You are an AI UI Explanation Agent.

Your job:
- Explain WHY each component was selected
- Explain layout structure decisions
- Reference the user's intent
- Be clear and structured
- Do NOT generate new UI
- Do NOT modify code
- Do NOT output JSON

Keep explanation concise but informative.
`
    },
    {
      role: "user",
      content: `
User Intent:
${userInput}

Generated Layout Plan:
${plan}

Generated React Code:
${generatedCode}

Explain the decisions clearly.
`
    }
  ];

  const explanation = await callLLM(messages);

  return explanation;
}