import { useState } from 'react';

const GEMINI_API_KEY = (import.meta as any).env.GEMINI_API_KEY || "";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function generateContent(prompt: string, systemInstruction?: string) {
  if (!GEMINI_API_KEY) {
    // Return a mock response if no key is present for the preview
    return "I'm EcoBot, your industrial oil assistant. Please configure the GEMINI_API_KEY to enable real AI responses. For now, I can tell you that we offer premium Virgin Base Oils (SN 150, SN 500) and Bitumen 60/70 exported globally from Dubai.";
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        systemInstruction: systemInstruction ? {
          parts: [{ text: systemInstruction }]
        } : undefined
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      console.error("Gemini API Error:", data.error);
      throw new Error(data.error.message || "Failed to fetch from Gemini");
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Request Failed:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
}
