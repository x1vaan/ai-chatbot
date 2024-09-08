'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendIcon, Moon, Sun } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: 'bot' },
  ])
  const [input, setInput] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

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
    <div className="min-h-screen bg-white dark:bg-black flex flex-col transition-colors duration-200">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Spotify-Inspired Dark Mode Chatbot</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              Menu
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden flex flex-col bg-white dark:bg-gray-900">
          <ScrollArea className="flex-grow h-[500px] p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.sender === 'user'
                      ? 'text-right'
                      : 'text-left'
                  }`}
                >
                  <span className="inline-block px-2 py-1 rounded-full text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {message.sender === 'user' ? 'You' : 'Bot'}
                  </span>
                  <p className={`text-sm ${message.sender === 'user' ? 'text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex space-x-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
              <Button type="submit" size="icon" className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black">
                <SendIcon className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}