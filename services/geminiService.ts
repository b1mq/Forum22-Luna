
import { GoogleGenAI } from "@google/genai";

export async function askGeminiAboutMovies(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the AI Concierge for 'Forum 22 Bad Urach', a boutique cinema. Be helpful, polite, and use a cinematic, slightly poetic tone. Answer in German unless asked otherwise."
      }
    });
    return response.text || "Entschuldigung, ich konnte keine Antwort finden.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Es gab ein Problem bei der Verbindung zum Film-Orakel.";
  }
}
