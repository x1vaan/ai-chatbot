"use client";
import { Fragment, useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { Message } from "@/types/types";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, text: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput('')
      
      // Simulate API response
      setTimeout(() => {
        const botResponse: Message = { id: messages.length + 2, text: "Thank you for your message. I'm processing your request.", sender: 'bot' }
        setMessages(prev => [...prev, botResponse])
      }, 1000)
    }
  }
  return (
    <Fragment>
      <ScrollArea className="flex-grow h-[500px] p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span className="inline-block px-2 py-1 rounded-full text-xs text-gray-500 dark:text-gray-400 mb-1">
                {message.sender === "user" ? "You" : "Bot"}
              </span>
              <p
                className={`text-sm ${
                  message.sender === "user"
                    ? "text-gray-800 dark:text-white"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex space-x-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 flex-grow bg-white dark:bg-darkSearchBar text-neutral-800 dark:text-gray-100 border-gray-300 dark:border-neutral-800"
          />
          <Button
            type="submit"
            size="icon"
            className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black"
          >
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </Fragment>
  );
}
