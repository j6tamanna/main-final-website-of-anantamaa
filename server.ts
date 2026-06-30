import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables for local development
dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON body parsing
app.use(express.json());

// Initialize the GoogleGenAI client (safe on server, with correct User-Agent headers)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// 1. AI Stylist API Endpoint
app.post("/api/stylist", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Verify API key is configured
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
      return res.json({
        response: `**[System Note: AI Stylist is in preview mode]**

I would be absolutely delighted to help you style your outfit! However, my advanced styling brain is currently waiting for your **Gemini API Key** to be configured. 

To enable my live AI styling suggestions, please add your \`GEMINI_API_KEY\` in the **Settings > Secrets** panel in the AI Studio UI!

In the meantime, as your ANANTAमाँ Heritage Stylist, I highly recommend our signature **Veda Convertible Kurti** in Sage Green paired with minimal antique gold earrings, or the structural **Noor Corset Kurti** for an architectural, modern royal statement.`
      });
    }

    // Prepare system instructions for our luxury brand
    const systemInstruction = `You are the official Senior Heritage Stylist and Couture Consultant for the luxury house of ANANTAमाँ. 
ANANTAमाँ represents: Timeless Indian Luxury, Soft Femininity, Architectural Silhouettes, Quiet Luxury, and Modern Heritage. 
Our color palette revolves around earthy, natural tones: Sage Green, Matcha, Turf Green, Midnight Blue, Soft Blush Pink, Ivory, and Stone. We strictly avoid loud, bright reds/golds and crowded graphics.
Our fabric materials are premium: Chanderi silk, Belgian organic linen, Habotai silk, fine mulmul cotton, and Bemberg georgette.

When interacting with our client:
1. Maintain a highly sophisticated, serene, poetic, and professional tone. Think of an editor from Vogue or a lead designer at a luxury couture house.
2. Refer to our specific design divisions:
   - Modern Maharani (structural, bold, royal - featuring Noor Corset Kurti, Devika Cape Kurti, Zaara Bustier Set)
   - Heritage Romantic (delicate, resham thread, hand-craft - featuring Resham Straight Kurti, Tara Embroidered Kurti)
   - Effortless Edit (minimalist, relaxed, European organic linen - featuring Mira Coord Set, Iris Coord Set, Sana Coord Set)
   - Drama Architect (voluminous motion, bias-cuts - featuring Sahar Flare Suit, Anaya Godet Suit, Roohi Anarkali)
   - Rule Breaker (modular, transformative, multi-way convertible garments - featuring Veda Convertible Kurti, Kiran Layered Set, Inaya Asymmetric Hybrid)
   - Refined Edge (avant-garde construction, pleats, negative space - featuring Cutout Corset Kurti, Origami Pleat Kurti)
3. Direct customers to specific pieces and suggest cohesive drapes, minimal antique gold accessories, and care instructions.
4. Output response using beautiful, clean Markdown formatting with clear line breaks. Keep paragraphs spacious and elegant.`;

    // Map client-side chat history to a formatted prompt including context
    let formattedPrompt = `Client request: "${message}"\n\n`;
    if (history && history.length > 0) {
      formattedPrompt += `Previous conversation history:\n`;
      history.forEach((h: { sender: string; text: string }) => {
        formattedPrompt += `${h.sender === 'user' ? 'Client' : 'Stylist'}: ${h.text}\n`;
      });
      formattedPrompt += `\nProvide the next styling response following your design philosophy:`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize, my creative senses are momentarily resting. Please allow me a moment to gather my draping recommendations.";
    res.json({ response: reply });

  } catch (error: any) {
    console.error("Gemini API Error in server:", error);
    res.status(500).json({ error: "Failed to connect to the styling network. " + error.message });
  }
});

// 2. Mock checkout processing API
app.post("/api/checkout", (req, res) => {
  const { cart, address, paymentMethod } = req.body;
  if (!cart || cart.length === 0) {
    return res.status(400).json({ error: "Cart is empty." });
  }
  
  const orderId = "ANANTA-" + Math.floor(100000 + Math.random() * 900000);
  const trackingNumber = "SR-" + Math.floor(10000000 + Math.random() * 90000000) + "-IN";
  const daysToAdd = 7;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + daysToAdd);

  res.json({
    success: true,
    orderId,
    trackingNumber,
    deliveryTimeline: deliveryDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    message: "Thank you for shopping with ANANTAमाँ. Your bespoke order has been sent to our master tailors."
  });
});

// 3. Integrate Vite Middleware in Dev or serve static files in Prod
async function startViteServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Integrating Vite in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static production assets from dist/...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ANANTAमाँ e-commerce server active on http://0.0.0.0:${PORT}`);
  });
}

startViteServer();
