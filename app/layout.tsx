import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { geistMono, geistSans } from "~/font";

export const metadata: Metadata = {
  title: "Next AI Chatbot",
  description: "Playground for various kinds and models of chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
