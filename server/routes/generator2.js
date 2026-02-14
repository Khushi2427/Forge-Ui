import express from "express";
import { planner } from "../agents/planner.js";
import { generator2 } from "../agents/generator2.js";
import { explainer } from "../agents/explainer.js";
import { injectionGuard } from "../middleware/injectionGuard.js";
import { validateGeneratedCode } from "../middleware/validator.js";

const router = express.Router();

/*
Expected Request Body:
{
  message: string,
  previousPlan?: string,
  previousCode?: string
}
*/

router.post("/generate2", injectionGuard, async (req, res) => {
  const { message, previousPlan, previousCode } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      error: "Invalid request",
      reason: "Message is required."
    });
  }

  try {
    console.log("🧠 Starting ForgeUI Agent Pipeline...");

    /* ------------------ 1️⃣ Planner ------------------ */

    const plan = await planner(message, previousPlan);

    if (!plan) {
      return res.status(500).json({
        error: "Planner failed",
        reason: "No plan generated."
      });
    }

    /* ------------------ 2️⃣ Generator ------------------ */

    const code = await generator2(plan, previousCode);

    if (!code) {
      return res.status(500).json({
        error: "Generator failed",
        reason: "No code generated."
      });
    }

    /* ------------------ 3️⃣ Validation ------------------ */


    /* ------------------ 4️⃣ Explainer ------------------ */

    const explanation = await explainer(message, plan, code);

    if (!explanation) {
      return res.status(500).json({
        error: "Explainer failed",
        reason: "No explanation generated."
      });
    }

    console.log("✅ ForgeUI pipeline completed successfully.");

    /* ------------------ Final Response ------------------ */

    return res.json({
      success: true,
      data: {
        plan,
        code,
        explanation
      }
    });

  } catch (err) {
    console.error("🔥 Pipeline Error:", err);

    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message
    });
  }
});

export default router;