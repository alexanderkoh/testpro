"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, User } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Message {
  role: "assistant" | "user"
  content: string
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hello! I'm Hoops AI, your personal DeFi strategy assistant. I can help you analyze strategies, understand market conditions, and optimize your yield farming. What would you like to know?"
  },
  {
    role: "user",
    content: "Can you analyze the XLM/USDC yield strategy?"
  },
  {
    role: "assistant",
    content: "The XLM/USDC yield strategy (#8608556) is currently performing exceptionally well with a 10,872.27% APR. This high yield is primarily due to:\n\n1. High trading volume in the XLM/USDC pair\n2. Optimal position range selection\n3. Regular rebalancing of positions\n\nHowever, please note that such high APRs are often temporary and carry significant risks including:\n- Impermanent loss risk\n- Market volatility exposure\n- Smart contract risks\n\nWould you like me to provide more specific details about any of these aspects?"
  }
]

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessages = [
      ...messages,
      { role: "user", content: input },
      { role: "assistant", content: "I'm analyzing your request about " + input + ". This is a demo response - in the real application, this would be processed by our AI model." }
    ]
    setMessages(newMessages)
    setInput("")
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <Card
            key={i}
            className={cn(
              "p-4 max-w-[80%]",
              message.role === "assistant" ? "ml-0 bg-muted/50" : "ml-auto bg-primary text-primary-foreground"
            )}
          >
            <div className="flex items-start gap-3">
              {message.role === "assistant" ? (
                <Bot className="h-5 w-5 mt-1" />
              ) : (
                <User className="h-5 w-5 mt-1" />
              )}
              <div className="space-y-1">
                <div className="text-sm font-medium">
                  {message.role === "assistant" ? "Hoops AI" : "You"}
                </div>
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Ask about strategies, market conditions, or optimization..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

