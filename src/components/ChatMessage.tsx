
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import { cn } from '../lib/utils'

interface ChatMessageProps {
  message: string
  isAi: boolean
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAi }) => {
  return (
    <div
      className={cn(
        'flex gap-3 p-4 transition-all',
        isAi ? 'bg-gray-50' : 'bg-white'
      )}
    >
      <div className={cn(
        'w-8 h-8 rounded-full flex items-center justify-center',
        isAi ? 'bg-blue-500' : 'bg-gray-500'
      )}>
        {isAi ? <RocketIcon className="w-4 h-4 text-white" /> : <PersonIcon className="w-4 h-4 text-white" />}
      </div>
      <div className="flex-1">
        {isAi ? (
          <ReactMarkdown className="prose prose-sm max-w-none">
            {message}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-700">{message}</p>
        )}
      </div>
    </div>
  )
}