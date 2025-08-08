'use client'

import { useChat } from 'ai/react';

const ChatPage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: `/api/chat/completion`,
    maxSteps: 5,
  });
  
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.toolInvocations ? (
            <pre>{JSON.stringify(m.toolInvocations, null, 2)}</pre>
          ) : (
            <p>{m.content}</p>
          )}
        </div>
      ))}


      <form onSubmit={handleSubmit} className='fixed bottom-0 w-full max-w-md '>
        {error && <div className="text-red-500">{error.message}</div>}
        <input
          className="w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ChatPage