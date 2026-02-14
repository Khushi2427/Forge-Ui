const allowedComponents = [
    "Button",
    "Card",
    "Input",
    "Modal",
    "Navbar",
    "Sidebar",
    "Table",
    "Chart"
  ];
  
  // Detect JSX component usage
  function extractJSXTags(code) {
    const tagRegex = /<([A-Z][A-Za-z0-9]*)\b/g;
    const matches = [...code.matchAll(tagRegex)];
    return matches.map(match => match[1]);
  }
  
  export function validateGeneratedCode(code) {
    if (!code || typeof code !== "string") {
      return { valid: false, error: "Generated code is empty or invalid." };
    }
  
    // 🚫 Block inline styles
    if (/style\s*=/i.test(code)) {
      return { valid: false, error: "Inline styles are not allowed." };
    }
  
    // 🚫 Block className usage
    if (/className\s*=/i.test(code)) {
      return { valid: false, error: "Custom className usage is not allowed." };
    }
  
    // 🚫 Block raw HTML tags
    if (/<(div|span|section|article|header|footer|main)\b/i.test(code)) {
      return { valid: false, error: "Raw HTML elements are not allowed. Use system components only." };
    }
  
    // 🚫 Block imports/exports
    if (/import\s|export\s/i.test(code)) {
      return { valid: false, error: "Import/export statements are not allowed." };
    }
  
    // 🚫 Block function/component definitions
    if (/function\s+[A-Z]/.test(code)) {
      return { valid: false, error: "Defining new components is not allowed." };
    }
  
    // ✅ Extract used components
    const usedComponents = extractJSXTags(code);
  
    for (let component of usedComponents) {
      if (!allowedComponents.includes(component)) {
        return {
          valid: false,
          error: `Component "${component}" is not allowed.`
        };
      }
    }
  
    return { valid: true };
  }