const forbiddenPatterns = [
  /ignore previous/i,
  /disregard instructions/i,
  /override system/i,
  /change system prompt/i,
  /bypass restriction/i
];
  
  export function injectionGuard(req, res, next) {
    const { message } = req.body;
  
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Invalid input message"
      });
    }
  
    for (let pattern of forbiddenPatterns) {
      if (pattern.test(message)) {
        return res.status(400).json({
          error: "Potential prompt injection detected.",
          reason: "Input violates system constraints."
        });
      }
    }
  
    next();
  }