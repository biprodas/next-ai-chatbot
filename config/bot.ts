const botApiUrl = process.env.NEXT_PUBLIC_CHAT_BOT_API_URL;
const botSecretKey = process.env.NEXT_PUBLIC_CHAT_BOT_SECRET_KEY;

export const botConfig = {
  title: "Next AI Chatbot",
  description: "Playground for various kinds and models of Chatbot",
  apiBaseUrl: botApiUrl,
  secretKey: botSecretKey
};

export type botConfig = typeof botConfig;
