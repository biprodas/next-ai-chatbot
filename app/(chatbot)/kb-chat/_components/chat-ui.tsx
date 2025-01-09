"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { LuBot, LuLoaderCircle, LuUser } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { botConfig } from "~/config/bot";

interface ChatUIProps {
  botId: string;
  kbId: string;
}

const CHAT_EXPERIMENT_SESSION_ID = "1145b837-114e-4205-9dd5-adfd3d705c59";

const ChatUI = ({ botId, kbId }: ChatUIProps) => {
  const [_sessionId, setSessionId] = useState("");
  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    api: `${botConfig.apiBaseUrl}/v1/chat/completions?bot_id=${botId}&kb_id=${kbId}&use_v2=true`,
    headers: {
      "Content-Type": "application/json",
      "Secret-Key": botConfig.secretKey!,
    },
    body: {
      session_id: CHAT_EXPERIMENT_SESSION_ID, //sessionId,
      stream: true,
    },
    maxSteps: 5,
    streamProtocol: "text",
  });

  const msgContainerRef = useRef<HTMLDivElement>(null);

  // console.log("Messages:", messages);

  useEffect(() => {
    // console.log("ChatUI Mounted:", sessionId, botId, kbId);
    setSessionId(uuidv4());
    setMessages([]);
  }, [botId, kbId]);

  // Auto-scroll effect
  useEffect(() => {
    const scrollToBottom = () => {
      if (msgContainerRef.current) {
        const { scrollHeight, clientHeight } = msgContainerRef.current;
        msgContainerRef.current.scrollTop = scrollHeight - clientHeight;
      }
    };

    scrollToBottom();

    // Add smooth scrolling during message streaming
    if (isLoading) {
      const intervalId = setInterval(scrollToBottom, 100);
      return () => clearInterval(intervalId);
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[80vh] border rounded-lg bg-white">
      <div
        ref={msgContainerRef}
        className="flex-1 p-4 overflow-y-auto rounded-t-lg bg-zinc-50 space-y-4"
      >
        {!messages.length && (
          <div className="flex flex-col h-[50vh] justify-center items-center">
            <div className="text-gray-700 font-semibold">No messages yet</div>
            <p className="text-gray-500">
              Start a conversation by typing below
            </p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className="flex space-x-2 whitespace-pre-wrap">
            {msg.role === "user" ? (
              <div>
                <div className="rounded-full p-2 bg-slate-200">
                  <LuUser className="text-slate-700" />
                </div>
              </div>
            ) : (
              <div>
                <div className="rounded-full p-2 bg-emerald-100">
                  <LuBot className="text-emerald-800" />
                </div>
              </div>
            )}
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="border-t p-4 bg-white">
        <div className="flex items-center space-x-3">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
            className="w-full"
            disabled={!kbId || isLoading}
          />
          <Button onClick={handleSubmit} disabled={!kbId || isLoading}>
            {isLoading ? <LuLoaderCircle className="animate-spin" /> : "Send"}
          </Button>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <Input
          id="chat_2_input"
          name="propmt"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="fixed bottom-0 w-full max-w-md mb-8"
        />
      </form> */}
    </div>
  );
};

export default ChatUI;
