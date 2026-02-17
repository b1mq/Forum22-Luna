
import { GoogleGenAI } from "@google/genai";

export async function askGeminiAboutMovies(message: string, history: {role: string, parts: string}[] = []): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "Du bist der 'Movie Concierge' für Forum 22 (Bad Urach) und Luna (Metzingen). Sei elegant, cineastisch und hilfsbereit. Du kennst dich mit Arthouse und Blockbustern aus. Antworte immer auf Deutsch. Wenn jemand nach dem Programm fragt, verweise ihn freundlich auf die Programm-Seiten im Menü.",
      },
    });

    // We use generateContent for simpler stateless calls if needed, 
    // but here we keep it robust for the floating chat.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "Du bist der 'Movie Concierge' für Forum 22 (Bad Urach) und Luna (Metzingen). Antworte auf Deutsch."
      }
    });

    return response.text || "Entschuldigung, ich konnte das nicht verarbeiten.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ich habe gerade eine kleine Projektionspause. Bitte versuchen Sie es gleich noch einmal.";
  }
}
