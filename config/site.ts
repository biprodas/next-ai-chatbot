const siteUrl = process.env.NEXT_PUBLIC_APP_URL;
const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const siteConfig = {
  title: "Next AI Chatbot",
  description: "Playground for various kinds and models of chatbot",
  siteUrl,
  apiBaseUrl,
  robots: "noindex, nofollow",
  author: {
    name: "Biprodas Roy",
    website: "https://biprodas.me",
  },
  links: {
    linkedIn: "https://www.linkedin.com/in/biprodas-roy",
    github: "https://github.com/biprodas/next-ai-chatbot",
  },
};

export type SiteConfig = typeof siteConfig;
