import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function callLLM(messages) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "meta-llama/llama-3-70b-instruct",
      messages
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.choices[0].message.content;
}